const { compileStrapi, createStrapi } = require('@strapi/core');

const HOME_PAGE_UID = 'api::home-page.home-page';
const PUBLISHED_STATUS = 'published';

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isMediaRecord(value) {
  return (
    isRecord(value) &&
    (typeof value.mime === 'string' ||
      typeof value.provider === 'string' ||
      ('formats' in value && typeof value.url === 'string'))
  );
}

function sanitizeDocumentInput(value, asRelation = true) {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeDocumentInput(item));
  }

  if (!isRecord(value)) {
    return value;
  }

  if (isMediaRecord(value)) {
    return typeof value.id === 'number' ? value.id : undefined;
  }

  if (asRelation && typeof value.documentId === 'string') {
    return { documentId: value.documentId };
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key]) =>
          ![
            'id',
            'documentId',
            'createdAt',
            'updatedAt',
            'publishedAt',
            'locale',
            'localizations',
            'createdBy',
            'updatedBy',
          ].includes(key),
      )
      .map(([key, nestedValue]) => [key, sanitizeDocumentInput(nestedValue)])
      .filter(([, nestedValue]) => nestedValue !== undefined),
  );
}

function buildDocumentData(value) {
  return sanitizeDocumentInput(value, false);
}

function normalizeSingle(result) {
  if (Array.isArray(result)) {
    return result[0] ?? null;
  }

  return result ?? null;
}

function getPopulate() {
  return {
    seo: { populate: ['ogImage'] },
    heroImage: true,
    stats: true,
    featuredProducts: { populate: ['image', 'linkedCategory'] },
    features: true,
    processSteps: true,
    processPhases: true,
    contactItems: true,
    contactForm: true,
  };
}

function rewriteFeaturedProducts(items) {
  const copyByIndex = [
    {
      title: 'Игровые лабиринты',
      tagline: 'Маршруты, которые удерживают внимание',
      description:
        'Многоуровневые лабиринты для семейных центров, ТРЦ и indoor-парков, где важны поток посетителей, вариативность игры и яркий визуальный эффект.',
      badge: '3–12 лет',
      ctaLabel: 'Запросить расчёт',
      imageAlt: 'Дети в ярком игровом лабиринте',
    },
    {
      title: 'Уличные игровые комплексы',
      tagline: 'Для двора, парка и школы',
      description:
        'Износостойкие системы с башнями, горками и канатными элементами, рассчитанные на активную ежедневную нагрузку и работу на открытом воздухе.',
      badge: '2–14 лет',
      ctaLabel: 'Запросить расчёт',
      imageAlt: 'Современный уличный игровой комплекс',
    },
    {
      title: 'Скалодромы и rope-решения',
      tagline: 'Больше движения и вызова',
      description:
        'Маршруты для лазания и верёвочные элементы, которые добавляют игровой площадке динамику, спортивный интерес и заметный wow-эффект.',
      badge: '4–16 лет',
      ctaLabel: 'Запросить расчёт',
      imageAlt: 'Ребёнок проходит трассу на скалодроме',
    },
    {
      title: 'Лабиринты с батутной зоной',
      tagline: 'Комбо-формат для высокой вовлечённости',
      description:
        'Гибридные комплексы, где классический лабиринт объединён с батутным модулем и даёт гостям больше сценариев для активной игры.',
      badge: '3–12 лет',
      ctaLabel: 'Запросить расчёт',
      imageAlt: 'Дети в комбинированном лабиринте с батутной зоной',
    },
  ];

  return items.map((item, index) => {
    const rewritten = copyByIndex[index];

    if (!rewritten) {
      return item;
    }

    return {
      ...item,
      ...rewritten,
    };
  });
}

function buildRussianHomePageData(ukEntry) {
  const data = buildDocumentData(ukEntry);

  data.seo = {
    ...(isRecord(data.seo) ? data.seo : {}),
    metaTitle: 'Kidsfera | Игровые пространства, в которые возвращаются',
    metaDescription:
      'Лабиринты, уличные комплексы, скалодромы и indoor-парки: проектируем, производим и запускаем игровые решения под ваш формат.',
    ogTitle: 'Kidsfera | Игровые пространства, в которые возвращаются',
    ogDescription:
      'Лабиринты, уличные комплексы, скалодромы и indoor-парки: проектируем, производим и запускаем игровые решения под ваш формат.',
    canonicalPath: '/ru',
  };

  data.heroEyebrow = 'Производство игровых пространств · С 2010 года';
  data.heroTitleLine1 = 'Пространства';
  data.heroTitleLine2 = 'для живой';
  data.heroTitleLine3 = 'детской игры';
  data.heroDescription =
    'Kidsfera создаёт лабиринты, уличные площадки, скалодромы и indoor-парки с полным сопровождением: от идеи и визуализации до поставки и монтажа.';
  data.heroPrimaryCtaLabel = 'Открыть каталог';
  data.heroSecondaryCtaLabel = 'Смотреть направления';
  data.heroQuote =
    '"После открытия наша семейная зона быстро стала местом, куда в городе едут каждые выходные."';
  data.heroQuoteAttribution = 'Dream Винница, 2026';

  data.stats = [
    { value: '1000+', label: 'реализованных проектов' },
    { value: '30+', label: 'стран поставки' },
    { value: '15+', label: 'лет опыта' },
    { value: '20+', label: 'производственных направлений' },
  ];

  data.productsSectionEyebrow = 'Ключевые решения';
  data.productsSectionTitle =
    'Подбираем формат под возраст гостей, площадь площадки и вашу бизнес-модель';
  data.featuredProducts = rewriteFeaturedProducts(
    Array.isArray(data.featuredProducts) ? data.featuredProducts : [],
  );

  data.features = [
    {
      title: 'Соответствие нормам безопасности',
      description:
        'Проекты разрабатываются с опорой на требования, которые применяются на европейском рынке и в экспортных поставках.',
      iconKey: 'shield',
    },
    {
      title: 'Собственное производство в Украине',
      description:
        'Металл, HDPE, сетки, мягкие элементы и сборка координируются внутри одной производственной системы.',
      iconKey: 'wrench',
    },
    {
      title: 'Понятные сроки реализации',
      description:
        'После утверждения концепции быстро переходим к технической подготовке, графику производства и запуску комплектации.',
      iconKey: 'zap',
    },
    {
      title: 'Сопровождение монтажа',
      description:
        'Помогаем с логистикой, подготовкой площадки, сборкой и вводом объекта в работу до финального запуска.',
      iconKey: 'globe',
    },
  ];

  data.processEyebrow = 'Как мы запускаем проект';
  data.processTitle = 'От первой идеи до готовой площадки';
  data.processTimelineTitle = 'Средний цикл: 7–12 дней';
  data.processTimelineSubtitle = 'От согласования до запуска объекта';
  data.processSteps = [
    {
      stepNumber: '01',
      title: 'Бриф и концепция',
      description:
        'Фиксируем формат площадки, возрастную аудиторию и бюджет, затем собираем концепцию и визуальное направление проекта.',
      theme: 'orange',
    },
    {
      stepNumber: '02',
      title: 'Производство и комплектация',
      description:
        'Готовим несущие элементы, панели, сетки и мягкие модули, чтобы весь комплект пришёл на объект в согласованном составе.',
      theme: 'blue',
    },
    {
      stepNumber: '03',
      title: 'Логистика и монтаж',
      description:
        'Организуем доставку, сборку, финальную проверку и передачу объекта вашей команде.',
      theme: 'charcoal',
    },
  ];
  data.processPhases = [
    { title: 'День 1–2', subtitle: 'Бриф' },
    { title: 'День 3–8', subtitle: 'Производство' },
    { title: 'День 9–10', subtitle: 'Логистика' },
    { title: 'День 11–12', subtitle: 'Монтаж' },
  ];

  data.projectsEyebrow = 'Наши реализации';
  data.projectsTitle = 'Площадки, которые уже работают и собирают гостей';
  data.projectsCtaLabel = 'Посмотреть категории решений';
  data.testimonialsEyebrow = 'Что говорят клиенты';
  data.testimonialsTitle = 'Kidsfera выбирают парки, ТРЦ и городские пространства';

  data.ctaHeading = 'Обсудим вашу игровую площадку?';
  data.ctaSubtitle =
    'Поделитесь задачей, площадью и желаемыми сроками, а мы предложим формат, комплектацию и понятный план запуска.';
  data.ctaButtonLabel = 'Получить предложение';
  data.ctaNote = 'Без обязательств · С консультацией по проекту';

  data.contactEyebrow = 'Связаться с командой';
  data.contactTitle = 'Поможем собрать проект под вашу площадку';
  data.contactDescription =
    'Обычно возвращаемся с ответом в течение одного рабочего дня и сразу предлагаем следующий практический шаг.';
  data.contactItems = [
    { label: 'Продажи и расчёт', value: '+380987265812', type: 'phone' },
    { label: 'Общие вопросы', value: 'kidsferainfo@gmail.com', type: 'email' },
    {
      label: 'Производство и офис',
      value: 'Харьковская обл., с. Санжары, Харьков, Украина',
      type: 'address',
    },
  ];
  data.contactForm = {
    firstNameLabel: 'Имя',
    lastNameLabel: 'Фамилия',
    emailLabel: 'Email',
    projectTypeLabel: 'Формат проекта',
    messageLabel: 'Коротко опишите задачу',
    firstNamePlaceholder: 'Анна',
    lastNamePlaceholder: 'Коваленко',
    emailPlaceholder: 'example@mail.com',
    projectTypePlaceholder: 'Выберите направление...',
    messagePlaceholder: 'Площадь, город, бюджет, желаемая дата запуска...',
    projectOptions:
      'Лабиринт\nУличный комплекс\nСкалодром\nМягкая игровая зона\nКрытый парк\nИндивидуальное решение',
    submitLabel: 'Отправить запрос',
    note: 'Отвечаем в течение 24 часов · Без лишних писем',
  };

  return data;
}

async function main() {
  const printOnly = process.argv.includes('--print');
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    const ukEntry = normalizeSingle(
      await strapi.documents(HOME_PAGE_UID).findMany({
        locale: 'uk',
        status: PUBLISHED_STATUS,
        populate: getPopulate(),
      }),
    );

    const ruEntry = normalizeSingle(
      await strapi.documents(HOME_PAGE_UID).findMany({
        locale: 'ru',
        status: PUBLISHED_STATUS,
        populate: getPopulate(),
      }),
    );

    if (!ukEntry) {
      throw new Error('Could not find published Ukrainian home page entry.');
    }

    if (printOnly) {
      console.log(
        JSON.stringify(
          {
            uk: ukEntry,
            ru: ruEntry,
          },
          null,
          2,
        ),
      );
      return;
    }

    const nextData = buildRussianHomePageData(ukEntry);

    const updated = await strapi.documents(HOME_PAGE_UID).update({
      documentId: ukEntry.documentId,
      locale: 'ru',
      status: PUBLISHED_STATUS,
      data: nextData,
    });

    console.log(
      JSON.stringify(
        {
          updated: {
            documentId: updated.documentId,
            locale: updated.locale,
            heroTitleLine1: updated.heroTitleLine1,
            heroTitleLine2: updated.heroTitleLine2,
            heroTitleLine3: updated.heroTitleLine3,
            updatedAt: updated.updatedAt,
          },
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

module.exports = {
  buildRussianHomePageData,
};

if (require.main === module) {
  main()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
