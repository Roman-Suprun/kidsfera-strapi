const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');

const ts = require('typescript');
const { compileStrapi, createStrapi } = require('@strapi/core');

const DEFAULT_LOCALE = 'en';
const PUBLISHED_STATUS = 'published';

function loadTsModule(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filePath,
  }).outputText;

  const moduleInstance = new Module(filePath, module);
  moduleInstance.filename = filePath;
  moduleInstance.paths = Module._nodeModulePaths(path.dirname(filePath));
  moduleInstance._compile(compiled, filePath);

  return moduleInstance.exports;
}

async function buildProjectData(
  strapi,
  item,
  locale,
  categoryIds,
  productIds,
  mediaCache,
  uploadImageFromUrl,
) {
  const localized = item.locales[locale];
  const { projectType: _ignoredProjectType, ...localizedFields } = localized;
  const galleryItems = item.gallery?.[locale] ?? [];
  const gallery = [];
  const categoryRelations = (item.categorySlugs ?? [item.categorySlug])
    .map((slug) => categoryIds.get(slug))
    .filter(Boolean)
    .map((documentId) => ({ documentId }));

  for (const galleryItem of galleryItems) {
    const imageId = await uploadImageFromUrl(strapi, galleryItem.url, galleryItem.alt, mediaCache);

    gallery.push({
      url: galleryItem.url,
      alt: galleryItem.alt,
      ...(imageId ? { image: imageId } : {}),
    });
  }

  const heroImageId = await uploadImageFromUrl(
    strapi,
    item.imageUrl,
    localized.title ?? localized.subtitle ?? item.slug,
    mediaCache,
  );

  const usedProducts = (item.usedProductSlugs ?? [])
    .map((slug) => productIds.get(slug))
    .filter(Boolean)
    .map((documentId) => ({ documentId }));

  return {
    slug: item.slug,
    sortOrder: item.sortOrder,
    featured: item.featured,
    themeColor: item.themeColor,
    countryFlag: item.countryFlag,
    ...(categoryRelations.length ? { projectType: categoryRelations } : {}),
    usedProducts,
    gallery,
    ...(heroImageId ? { image: heroImageId } : {}),
    ...localizedFields,
  };
}

async function upsertProjects() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const seedPath = path.join(process.cwd(), 'src', 'seed', 'kidsfera.ts');
    const mediaUtilsPath = path.join(process.cwd(), 'src', 'utils', 'media-library.ts');
    const { kidsferaSeed } = loadTsModule(seedPath);
    const { createMediaCache, uploadImageFromUrl } = loadTsModule(mediaUtilsPath);

    const mediaCache = createMediaCache();
    const categories = await strapi.documents('api::category.category').findMany({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      fields: ['slug'],
    });
    const categoryIds = new Map(
      (Array.isArray(categories) ? categories : []).map((category) => [
        category.slug,
        category.documentId,
      ]),
    );
    const products = await strapi.documents('api::product.product').findMany({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      fields: ['slug'],
    });
    const productIds = new Map(
      (Array.isArray(products) ? products : []).map((product) => [product.slug, product.documentId]),
    );

    for (const item of kidsferaSeed.projects) {
      const existingProjects = await strapi.documents('api::project.project').findMany({
        locale: DEFAULT_LOCALE,
        status: PUBLISHED_STATUS,
        fields: ['slug'],
        filters: { slug: { $eq: item.slug } },
      });
      const existingProject = Array.isArray(existingProjects) ? existingProjects[0] : existingProjects;

      const defaultData = await buildProjectData(
        strapi,
        item,
        DEFAULT_LOCALE,
        categoryIds,
        productIds,
        mediaCache,
        uploadImageFromUrl,
      );

      const projectDocumentId = existingProject?.documentId
        ? (
            await strapi.documents('api::project.project').update({
              documentId: existingProject.documentId,
              locale: DEFAULT_LOCALE,
              status: PUBLISHED_STATUS,
              data: defaultData,
            })
          ).documentId
        : (
            await strapi.documents('api::project.project').create({
              locale: DEFAULT_LOCALE,
              status: PUBLISHED_STATUS,
              data: defaultData,
            })
          ).documentId;

      for (const locale of kidsferaSeed.languages) {
        if (locale === DEFAULT_LOCALE) {
          continue;
        }

        const localizedData = await buildProjectData(
          strapi,
          item,
          locale,
          categoryIds,
          productIds,
          mediaCache,
          uploadImageFromUrl,
        );

        await strapi.documents('api::project.project').update({
          documentId: projectDocumentId,
          locale,
          status: PUBLISHED_STATUS,
          data: localizedData,
        });
      }

      console.log(`Synced project: ${item.slug}`);
    }
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

upsertProjects()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
