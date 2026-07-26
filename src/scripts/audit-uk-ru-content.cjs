const { compileStrapi, createStrapi } = require('@strapi/core');

const PUBLISHED_STATUS = 'published';
const LOCALES = ['uk', 'ru'];
const EXCLUDED_UIDS = new Set([
  'admin::user',
  'plugin::upload.file',
  'plugin::upload.folder',
  'plugin::users-permissions.permission',
  'plugin::users-permissions.role',
  'plugin::users-permissions.user',
  'plugin::content-releases.release',
  'plugin::content-releases.release-action',
  'plugin::review-workflows.workflow',
  'plugin::review-workflows.workflow-stage',
]);

function getLocalizedContentTypes(strapi) {
  return Object.values(strapi.contentTypes)
    .filter((contentType) => {
      if (!contentType?.uid || EXCLUDED_UIDS.has(contentType.uid)) {
        return false;
      }

      return contentType.pluginOptions?.i18n?.localized === true;
    })
    .sort((left, right) => left.uid.localeCompare(right.uid));
}

function getLabel(entry) {
  if (!entry || typeof entry !== 'object') {
    return null;
  }

  const candidates = ['title', 'name', 'label', 'slug', 'question'];

  for (const key of candidates) {
    const value = entry[key];

    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return null;
}

function summarizeEntries(entries) {
  return entries.slice(0, 10).map((entry) => ({
    documentId: entry.documentId,
    label: getLabel(entry),
    slug: typeof entry.slug === 'string' ? entry.slug : null,
    updatedAt: entry.updatedAt,
  }));
}

async function main() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const localizedContentTypes = getLocalizedContentTypes(strapi);
    const report = [];

    for (const contentType of localizedContentTypes) {
      const localeData = {};

      for (const locale of LOCALES) {
        const result = await strapi.documents(contentType.uid).findMany({
          locale,
          status: PUBLISHED_STATUS,
          populate: '*',
          sort: ['updatedAt:desc'],
          pagination: {
            page: 1,
            pageSize: 200,
          },
        });

        const entries = Array.isArray(result) ? result : result ? [result] : [];

        localeData[locale] = {
          count: entries.length,
          sample: summarizeEntries(entries),
        };
      }

      report.push({
        uid: contentType.uid,
        kind: contentType.kind,
        singularName: contentType.info?.singularName ?? null,
        collectionName: contentType.collectionName ?? null,
        ukCount: localeData.uk.count,
        ruCount: localeData.ru.count,
        missingInRu:
          contentType.kind === 'singleType'
            ? Math.max(0, localeData.uk.count - localeData.ru.count)
            : Math.max(0, localeData.uk.count - localeData.ru.count),
        ukSample: localeData.uk.sample,
        ruSample: localeData.ru.sample,
      });
    }

    console.log(JSON.stringify(report, null, 2));
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
