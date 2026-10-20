const { compileStrapi, createStrapi } = require('@strapi/core');

const UID = 'api::product.product';
const DOCUMENT_ID = 'qo7fg064x5jdj9l5gbpc3lnb';
const SLUG = 'spiral-express';
const SOURCE_LOCALE = 'uk';
const TARGET_LOCALE = 'ru';
const PUBLISHED_STATUS = 'published';

const EXPECTED_CORE_VALUES = {
  slug: SLUG,
  size: '22-26 м²',
  capacity: '10-13 дітей',
  material: 'ПВХ 650 г/м², склопластик',
  leadTime: '8–14 днів',
  sortOrder: 6,
  featured: true,
};

const GALLERY_ALT = [
  'Комбинированный игровой комплекс с трехъярусной башней, батутом и спиральной горкой, вид сверху спереди',
  'Детский игровой лабиринт с высокой оранжевой спиральной горкой и бассейном с шариками, вид справа спереди',
  'Боковой вид на трехъярусный игровой лабиринт с разноцветными платформами и препятствиями',
  'Полоса препятствий с сеткой-паутиной, подвесными цилиндрами и платформой, вид сзади под углом',
  'Общий вид комбинированного игрового комплекса с батутом, спиральной горкой и лабиринтом, вид слева спереди',
];

const POPULATE = {
  certifications: true,
  gallery: { populate: ['image'] },
  seo: { populate: ['ogImage'] },
  category: true,
};

function getMediaId(media) {
  return media && typeof media.id === 'number' ? media.id : undefined;
}

function assertSource(source) {
  if (!source) {
    throw new Error(`Published Ukrainian product ${DOCUMENT_ID} was not found.`);
  }

  for (const [field, expected] of Object.entries(EXPECTED_CORE_VALUES)) {
    if (source[field] !== expected) {
      throw new Error(
        `Source ${field} changed: expected ${JSON.stringify(expected)}, received ${JSON.stringify(source[field])}.`,
      );
    }
  }

  if (!Array.isArray(source.gallery) || source.gallery.length !== GALLERY_ALT.length) {
    throw new Error(`Expected ${GALLERY_ALT.length} source gallery images, received ${source.gallery?.length ?? 0}.`);
  }

  const missingImage = source.gallery.findIndex((item) => !getMediaId(item.image));
  if (missingImage !== -1) {
    throw new Error(`Source gallery item ${missingImage + 1} has no image relation.`);
  }

  if (!Array.isArray(source.category) || source.category.length !== 3) {
    throw new Error(`Expected 3 source categories, received ${source.category?.length ?? 0}.`);
  }
}

function buildRussianData(source) {
  return {
    name: 'Игровой детский лабиринт 6×4×3 «Спиральный Экспресс»',
    slug: source.slug,
    shortDescription:
      'Крупный комбинированный игровой комплекс Г-образной конфигурации в темно-зеленой, солнечно-желтой и оранжевой гамме. В одной модели собраны высокая трехэтажная башня-лабиринт, открытая скоростная спиральная горка, встроенная батутная секция, лестница-рампа и просторный сухой бассейн с белыми, оранжевыми и темно-зелеными шариками.',
    description:
      'Многофункциональный игровой центр для активного отдыха детей, в котором маршруты на трех уровнях дополнены прыжковой зоной и эффектным винтовым спуском. Высокая башня приглашает исследовать переходы и препятствия, а батут и спиральная горка делают комплекс заметной точкой притяжения в детском пространстве.\n\n**Особенности и комплектация:**\n\nТрехъярусная башня-лабиринт: Продуманная система переходов, угловых ступеней и наклонных платформ ведет к самому высокому уровню комплекса.\n\nОткрытая спиральная горка: Ярко-оранжевый винтовой спуск начинается на третьем ярусе и приводит прямо в сухой бассейн.\n\nВстроенный батутный модуль: Отдельная квадратная зона для прыжков оборудована мягким оранжевым защитным матом и удобной двухступенчатой лестницей.\n\nПросторный сухой бассейн: Большая прямоугольная чаша наполнена сочетанием белых, оранжевых и темно-зеленых шариков.\n\nПолоса препятствий Ninja Park: В маршрут входят подвесные цилиндры-груши, сетка-паутина, мягкие балансировочные пеньки и подвесные игровые мячи.\n\nПодъем в формате рампы: Широкая наклонная лестница с контрастными цветными ступенями помогает удобно подняться на второй этаж.\n\nНадежный защитный каркас: Прочная темно-зеленая металлическая рама закрыта защитной сеткой по периметру, а стойки дополнены мягкими накладками.\n\n**Рекомендуется для:**\n\nКрупных детских развлекательных центров в ТРЦ, батутных парков и семейных комплексов.\n\nСпортивно-развивающих секций и игровых клубов с высокой посещаемостью.\n\nЗагородных отелей, комплексов отдыха и семейных ресторанов.',
    priceLabel: 'Цену уточняйте',
    size: source.size,
    capacity: '10-13 детей',
    material: 'ПВХ 650 г/м², стеклопластик',
    leadTime: '8–14 дней',
    certifications: (source.certifications ?? []).map((item) => ({
      label: item.label,
      icon: item.icon,
    })),
    gallery: source.gallery.map((item, index) => ({
      alt: GALLERY_ALT[index],
      image: getMediaId(item.image),
    })),
    sortOrder: source.sortOrder,
    featured: source.featured,
    seo: {
      metaTitle: 'Трехъярусный игровой лабиринт с батутом и спиральной горкой',
      metaDescription:
        'Большой игровой комплекс с трехъярусным лабиринтом, батутом, открытой спиральной горкой и сухим бассейном для ТРЦ и семейных развлекательных центров.',
      ogTitle: 'Игровой комплекс «Спиральный Экспресс» | Kidsfera',
      ogDescription:
        'Трехуровневый детский лабиринт с батутной зоной, винтовой горкой, полосой препятствий и сухим бассейном.',
      canonicalPath: source.seo?.canonicalPath ?? null,
      noIndex: source.seo?.noIndex ?? false,
      ogImage: getMediaId(source.seo?.ogImage),
    },
    category: source.category.map((category) => ({ documentId: category.documentId })),
  };
}

async function main() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const source = await strapi.documents(UID).findOne({
      documentId: DOCUMENT_ID,
      locale: SOURCE_LOCALE,
      status: PUBLISHED_STATUS,
      populate: POPULATE,
    });

    assertSource(source);

    await strapi.documents(UID).update({
      documentId: DOCUMENT_ID,
      locale: TARGET_LOCALE,
      status: PUBLISHED_STATUS,
      data: buildRussianData(source),
    });

    const localized = await strapi.documents(UID).findOne({
      documentId: DOCUMENT_ID,
      locale: TARGET_LOCALE,
      status: PUBLISHED_STATUS,
      populate: POPULATE,
    });

    console.log(
      JSON.stringify(
        {
          documentId: localized.documentId,
          locale: localized.locale,
          published: Boolean(localized.publishedAt),
          name: localized.name,
          slug: localized.slug,
          priceLabel: localized.priceLabel,
          size: localized.size,
          capacity: localized.capacity,
          material: localized.material,
          leadTime: localized.leadTime,
          sortOrder: localized.sortOrder,
          featured: localized.featured,
          categories: localized.category.map((category) => category.slug),
          galleryCount: localized.gallery.length,
          galleryImageCount: localized.gallery.filter((item) => getMediaId(item.image)).length,
          seo: localized.seo,
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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
