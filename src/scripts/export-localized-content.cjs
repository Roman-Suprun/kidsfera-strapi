const { compileStrapi, createStrapi } = require('@strapi/core');

const PUBLISHED_STATUS = 'published';

function getArg(name) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

function getPopulateArg() {
  const populate = getArg('populate');
  return populate === 'full' ? '*' : undefined;
}

async function main() {
  const uid = getArg('uid');
  const locale = getArg('locale');
  const slug = getArg('slug');
  const documentId = getArg('documentId');

  if (!uid || !locale) {
    throw new Error('Usage: node src/scripts/export-localized-content.cjs --uid=<uid> --locale=<locale> [--slug=<slug>] [--documentId=<id>] [--populate=full]');
  }

  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const filters = {};

    if (slug) {
      filters.slug = { $eq: slug };
    }

    if (documentId) {
      filters.documentId = { $eq: documentId };
    }

    const entries = await strapi.documents(uid).findMany({
      locale,
      status: PUBLISHED_STATUS,
      populate: getPopulateArg(),
      filters,
      sort: ['updatedAt:desc'],
      pagination: {
        page: 1,
        pageSize: 200,
      },
    });

    console.log(JSON.stringify(entries, null, 2));
  } finally {
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
