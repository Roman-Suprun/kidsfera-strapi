const { createReadStream, promises: fs } = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { compileStrapi, createStrapi } = require('@strapi/core');

const RESPONSIVE_SOURCE_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/tiff',
  'image/webp',
]);
const APPLY = process.argv.includes('--apply');
const limitArgument = process.argv.find((argument) => argument.startsWith('--limit='));
const LIMIT = limitArgument ? Number(limitArgument.slice('--limit='.length)) : undefined;

function isRemoteUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
}

function formatSummary(format) {
  return {
    width: format.width,
    height: format.height,
    sizeInBytes: format.sizeInBytes,
    mime: format.mime,
  };
}

async function downloadOriginal(file, temporaryDirectory) {
  if (!isRemoteUrl(file.url)) {
    return null;
  }

  const response = await fetch(file.url);

  if (!response.ok) {
    throw new Error(`Could not download media ${file.id}: HTTP ${response.status}`);
  }

  const extension = file.ext || '.img';
  const filepath = path.join(temporaryDirectory, `${file.hash}${extension}`);
  await fs.writeFile(filepath, Buffer.from(await response.arrayBuffer()));

  return filepath;
}

async function regenerateFile(strapi, file, temporaryDirectory) {
  if (!RESPONSIVE_SOURCE_TYPES.has(file.mime) || !isRemoteUrl(file.url)) {
    return { id: file.id, status: 'skipped' };
  }

  const filepath = await downloadOriginal(file, temporaryDirectory);

  if (!filepath) {
    return { id: file.id, status: 'skipped' };
  }

  const fileData = {
    name: file.name,
    hash: file.hash,
    ext: file.ext,
    mime: file.mime,
    width: file.width,
    height: file.height,
    path: file.path ?? null,
    filepath,
    tmpWorkingDirectory: temporaryDirectory,
    getStream: () => createReadStream(filepath),
  };
  const imageManipulation = strapi.plugin('upload').service('image-manipulation');
  const generated = await imageManipulation.generateResponsiveFormats(fileData);
  const formats = Object.fromEntries(generated.map(({ key, file: generatedFile }) => [key, generatedFile]));

  if (!APPLY) {
    return {
      id: file.id,
      name: file.name,
      status: 'would-regenerate',
      formats: Object.fromEntries(
        generated.map(({ key, file: generatedFile }) => [key, formatSummary(generatedFile)]),
      ),
    };
  }

  const provider = strapi.plugin('upload').provider;
  const providerService = strapi.plugin('upload').service('provider');

  // New WebP objects are uploaded before the obsolete derivatives are deleted,
  // so a failure never leaves the database pointing at a missing image.
  for (const { file: generatedFile } of generated) {
    await providerService.upload(generatedFile);
  }

  // Re-upload the exact original bytes only to set the S3 Cache-Control
  // metadata configured for the upload provider. The URL and binary stay the
  // same, so content references do not need to change.
  await providerService.upload({
    ...fileData,
    getStream: () => createReadStream(filepath),
  });

  const oldFormats = file.formats ?? {};
  const responsiveFormatKeys = Object.keys(oldFormats).filter((key) => key !== 'thumbnail');

  await Promise.all(
    responsiveFormatKeys.map((key) => provider.delete(oldFormats[key])),
  );

  await strapi.db.query('plugin::upload.file').update({
    where: { id: file.id },
    data: {
      formats: {
        ...(oldFormats.thumbnail ? { thumbnail: oldFormats.thumbnail } : {}),
        ...formats,
      },
    },
  });

  return {
    id: file.id,
    name: file.name,
    status: 'regenerated',
    formats: Object.fromEntries(
      generated.map(({ key, file: generatedFile }) => [key, formatSummary(generatedFile)]),
    ),
  };
}

async function main() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'kidsfera-responsive-media-'));

  try {
    const files = await strapi.db.query('plugin::upload.file').findMany({
      where: {
        mime: {
          $in: [...RESPONSIVE_SOURCE_TYPES],
        },
      },
      orderBy: { id: 'asc' },
      ...(Number.isSafeInteger(LIMIT) && LIMIT && LIMIT > 0 ? { limit: LIMIT } : {}),
    });
    const results = [];

    for (const file of files) {
      try {
        results.push(await regenerateFile(strapi, file, temporaryDirectory));
      } catch (error) {
        results.push({
          id: file.id,
          name: file.name,
          status: 'failed',
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    console.log(
      JSON.stringify(
        {
          mode: APPLY ? 'apply' : 'dry-run',
          processed: results.length,
          results,
        },
        null,
        2,
      ),
    );
  } finally {
    await fs.rm(temporaryDirectory, { recursive: true, force: true });

    try {
      await strapi.destroy();
    } catch (error) {
      if (!String(error).includes('aborted')) {
        throw error;
      }
    }
  }
}

main()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
