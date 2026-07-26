const { compileStrapi, createStrapi } = require('@strapi/core');

const PUBLISHED_STATUS = 'published';

function getArg(name) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

async function main() {
  const locale = getArg('locale') ?? 'ru';
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const products = await strapi.documents('api::product.product').findMany({
      locale,
      status: PUBLISHED_STATUS,
      sort: ['sortOrder:asc', 'updatedAt:desc'],
      populate: {
        gallery: { populate: ['image'] },
      },
      pagination: {
        page: 1,
        pageSize: 200,
      },
    });

    const projects = await strapi.documents('api::project.project').findMany({
      locale,
      status: PUBLISHED_STATUS,
      sort: ['sortOrder:asc', 'updatedAt:desc'],
      populate: {
        image: true,
        gallery: { populate: ['image'] },
      },
      pagination: {
        page: 1,
        pageSize: 200,
      },
    });

    console.log(
      JSON.stringify(
        {
          locale,
          products: products.map((item) => ({
            slug: item.slug,
            galleryCount: Array.isArray(item.gallery) ? item.gallery.length : 0,
            galleryImageCount: Array.isArray(item.gallery)
              ? item.gallery.filter((entry) => entry?.image?.id).length
              : 0,
          })),
          projects: projects.map((item) => ({
            slug: item.slug,
            imageId: item.image?.id ?? null,
            galleryCount: Array.isArray(item.gallery) ? item.gallery.length : 0,
            galleryImageCount: Array.isArray(item.gallery)
              ? item.gallery.filter((entry) => entry?.image?.id).length
              : 0,
          })),
        },
        null,
        2,
      ),
    );
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
