const { compileStrapi, createStrapi } = require('@strapi/core');

const PUBLISHED_STATUS = 'published';
const SITE_SETTING_UID = 'api::site-setting.site-setting';

const GROUP_TITLE_MAP = {
  'Продукція': 'Продукция',
  'Компанія': 'Компания',
  'Документи': 'Документы',
};

const ITEM_LABEL_MAP = {
  'Лабіринти': 'Лабиринты',
  'Майданчики': 'Площадки',
  'Скелодроми': 'Скалодромы',
  'Сухі басейни': 'Сухие бассейны',
  'Про нас': 'О нас',
  'Проєкти': 'Проекты',
  'Блог': 'Блог',
  'Контакти': 'Контакты',
  'Конфіденційність': 'Конфиденциальность',
  'Умови продажу': 'Условия продажи',
};

async function findSingle(strapi, locale) {
  const entries = await strapi.documents(SITE_SETTING_UID).findMany({
    locale,
    status: PUBLISHED_STATUS,
    populate: {
      footerLinkGroups: { populate: ['items'] },
    },
  });

  return Array.isArray(entries) ? entries[0] ?? null : entries;
}

function translateFooterGroups(ukGroups) {
  return (ukGroups ?? []).map((group) => ({
    title: GROUP_TITLE_MAP[group.title] ?? group.title,
    items: Array.isArray(group.items)
      ? group.items.map((item) => ({
          label: ITEM_LABEL_MAP[item.label] ?? item.label,
          href: item.href,
        }))
      : [],
  }));
}

async function main() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const siteSettingUk = await findSingle(strapi, 'uk');
    const siteSettingRu = await findSingle(strapi, 'ru');

    if (!siteSettingUk?.documentId) {
      throw new Error('Missing Ukrainian site-setting document.');
    }

    if (!siteSettingRu?.documentId) {
      throw new Error('Missing Russian site-setting document.');
    }

    const updated = await strapi.documents(SITE_SETTING_UID).update({
      documentId: siteSettingRu.documentId,
      locale: 'ru',
      status: PUBLISHED_STATUS,
      data: {
        footerLinkGroups: translateFooterGroups(siteSettingUk.footerLinkGroups),
      },
      populate: {
        footerLinkGroups: { populate: ['items'] },
      },
    });

    console.log(
      JSON.stringify(
        {
          sourceLocale: 'uk',
          targetLocale: 'ru',
          footerLinkGroups: updated.footerLinkGroups,
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
