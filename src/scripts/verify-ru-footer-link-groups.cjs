const { compileStrapi, createStrapi } = require('@strapi/core');

const PUBLISHED_STATUS = 'published';
const SITE_SETTING_UID = 'api::site-setting.site-setting';

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
    const entries = await strapi.documents(SITE_SETTING_UID).findMany({
      locale,
      status: PUBLISHED_STATUS,
      populate: {
        footerLinkGroups: { populate: ['items'] },
      },
    });

    const entry = Array.isArray(entries) ? entries[0] ?? null : entries;

    if (!entry) {
      throw new Error('Missing Russian site-setting document.');
    }

    console.log(
      JSON.stringify(
        {
          documentId: entry.documentId,
          locale: entry.locale,
          footerLinkGroups: entry.footerLinkGroups,
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
