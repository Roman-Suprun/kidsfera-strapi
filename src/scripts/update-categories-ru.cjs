const { compileStrapi, createStrapi } = require('@strapi/core');

const CATEGORY_UID = 'api::category.category';
const PUBLISHED_STATUS = 'published';

const CATEGORY_TRANSLATIONS = {
  'shopping-centers': {
    name: 'Торговые центры',
    description:
      'Крупные многоуровневые игровые системы для моллов и крытых семейно-развлекательных площадок.',
    cardDescription: 'Масштабные комплексы для моллов и семейных локаций.',
  },
  'outdoor-parks': {
    name: 'Улица и парки',
    description:
      'Всесезонные конструкции для парков, школ, городских пространств и гостиничных проектов.',
    cardDescription: 'Надёжные уличные системы для общественных пространств.',
  },
  'home-residential': {
    name: 'Для дома',
    description:
      'Компактные игровые решения для двора, детской комнаты и частных домов с небольшой площадью.',
    cardDescription: 'Компактный формат для сада, дома и игровых комнат.',
  },
  'jump-zones': {
    name: 'Батутные зоны',
    description:
      'Коммерческие батутные и jump-решения для активных развлекательных пространств.',
    cardDescription: 'Батутные арены и компактные jump-системы.',
  },
  'climbing-adventure': {
    name: 'Скалолазание и приключения',
    description:
      'Боулдеринговые стены, канатные испытания и adventure-системы для активных игровых площадок.',
    cardDescription: 'Аттракционы с упором на движение для энергичных семейных пространств.',
  },
  'soft-play': {
    name: 'Мягкий спорт',
    description:
      'Мягкие зоны, сухие бассейны, toddler play и пенные конструкции для безопасного движения.',
    cardDescription: 'Яркие и безопасные игровые зоны для малышей.',
  },
  'trampoline-labyrinths': {
    name: 'Лабиринты с батутом',
    description:
      'Многоуровневые лабиринты со встроенными батутными элементами для активных крытых пространств.',
    cardDescription: 'Гибридные лабиринты и jump-аттракционы для семейных локаций.',
  },
};

async function findMany(strapi, locale) {
  const entries = await strapi.documents(CATEGORY_UID).findMany({
    locale,
    status: PUBLISHED_STATUS,
    sort: ['sortOrder:asc', 'updatedAt:desc'],
    pagination: {
      page: 1,
      pageSize: 200,
    },
  });

  return Array.isArray(entries) ? entries : [];
}

async function main() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const ukCategories = await findMany(strapi, 'uk');
    const updatedEntries = [];

    for (const ukCategory of ukCategories) {
      const translation = CATEGORY_TRANSLATIONS[ukCategory.slug];

      if (!translation) {
        throw new Error(`Missing category translation for slug: ${ukCategory.slug}`);
      }

      const updated = await strapi.documents(CATEGORY_UID).update({
        documentId: ukCategory.documentId,
        locale: 'ru',
        status: PUBLISHED_STATUS,
        data: {
          name: translation.name,
          description: translation.description,
          cardDescription: translation.cardDescription,
        },
      });

      updatedEntries.push({
        slug: updated.slug,
        name: updated.name,
        locale: updated.locale,
        updatedAt: updated.updatedAt,
      });
    }

    console.log(JSON.stringify({ updatedEntries }, null, 2));
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
