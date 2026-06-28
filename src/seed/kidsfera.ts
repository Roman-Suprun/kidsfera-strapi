type Localized<T> = Record<"en" | "uk" | "ru" | "pl", T>;

const languages = ["en", "uk", "ru", "pl"] as const;

const sharedGallery = (items: Array<{ url: string; alt: string }>) => ({
  en: items,
  uk: items,
  ru: items,
  pl: items,
});

const sharedBadges = (labels: string[]) => ({
  en: labels.map((label) => ({ label })),
  uk: labels.map((label) => ({ label })),
  ru: labels.map((label) => ({ label })),
  pl: labels.map((label) => ({ label })),
});

export const kidsferaSeed = {
  locales: [
    { code: "en", name: "English" },
    { code: "uk", name: "Ukrainian" },
    { code: "ru", name: "Russian" },
    { code: "pl", name: "Polish" },
  ],
  siteSettings: {
    en: {
      siteName: "Kidsfera",
      siteTagline: "Play attraction manufacturer",
      defaultSeo: {
        metaTitle: "Kidsfera",
        metaDescription:
          "Multilingual showroom for indoor parks, outdoor playgrounds, climbing walls, and soft play systems.",
        canonicalPath: "/en",
      },
      navCategoriesLabel: "Categories",
      navCatalogLabel: "Catalog",
      navProjectsLabel: "Projects",
      navProcessLabel: "Process",
      navContactLabel: "Contact",
      navCtaLabel: "Get a Quote",
      footerDescription:
        "Kidsfera designs and manufactures children's attraction systems for malls, parks, family centres, and private clients.",
      footerCopyright: "© 2026 Kidsfera. All rights reserved.",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ul. Fabryczna 12, Poznań, Poland",
    },
    uk: {
      siteName: "Kidsfera",
      siteTagline: "Виробник дитячих атракціонів",
      defaultSeo: {
        metaTitle: "Kidsfera",
        metaDescription:
          "Мультимовний шоурум для критих парків, вуличних майданчиків, скелодромів і м'яких ігрових систем.",
        canonicalPath: "/uk",
      },
      navCategoriesLabel: "Категорії",
      navCatalogLabel: "Каталог",
      navProjectsLabel: "Проєкти",
      navProcessLabel: "Процес",
      navContactLabel: "Контакт",
      navCtaLabel: "Отримати пропозицію",
      footerDescription:
        "Kidsfera проєктує та виробляє дитячі атракціони для торгових центрів, парків, сімейних центрів і приватних клієнтів.",
      footerCopyright: "© 2026 Kidsfera. Всі права захищені.",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "вул. Fabryczna 12, Познань, Польща",
    },
    ru: {
      siteName: "Kidsfera",
      siteTagline: "Производитель детских аттракционов",
      defaultSeo: {
        metaTitle: "Kidsfera",
        metaDescription:
          "Мультиязычный шоурум для крытых парков, уличных площадок, скалодромов и мягких игровых систем.",
        canonicalPath: "/ru",
      },
      navCategoriesLabel: "Категории",
      navCatalogLabel: "Каталог",
      navProjectsLabel: "Проекты",
      navProcessLabel: "Процесс",
      navContactLabel: "Контакт",
      navCtaLabel: "Получить предложение",
      footerDescription:
        "Kidsfera проектирует и производит детские аттракционы для торговых центров, парков, семейных центров и частных клиентов.",
      footerCopyright: "© 2026 Kidsfera. Все права защищены.",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ул. Fabryczna 12, Познань, Польша",
    },
    pl: {
      siteName: "Kidsfera",
      siteTagline: "Producent atrakcji dla dzieci",
      defaultSeo: {
        metaTitle: "Kidsfera",
        metaDescription:
          "Wielojęzyczny showroom dla parków krytych, placów zabaw, ścianek wspinaczkowych i stref soft play.",
        canonicalPath: "/pl",
      },
      navCategoriesLabel: "Kategorie",
      navCatalogLabel: "Katalog",
      navProjectsLabel: "Realizacje",
      navProcessLabel: "Proces",
      navContactLabel: "Kontakt",
      navCtaLabel: "Zapytaj o ofertę",
      footerDescription:
        "Kidsfera projektuje i produkuje atrakcje dla dzieci do galerii handlowych, parków, centrów rodzinnych i klientów prywatnych.",
      footerCopyright: "© 2026 Kidsfera. Wszelkie prawa zastrzeżone.",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ul. Fabryczna 12, Poznań, Polska",
    },
  } satisfies Localized<Record<string, unknown>>,
  homePage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Where Kids Discover Adventure",
        metaDescription:
          "Indoor parks, labyrinths, outdoor playgrounds, trampolines, climbing attractions, and soft play solutions.",
        canonicalPath: "/en",
      },
      heroEyebrow: "Manufacturer & Supplier · Since 2006",
      heroTitleLine1: "Where Kids",
      heroTitleLine2: "Discover",
      heroTitleLine3: "Adventure",
      heroDescription:
        "We design and manufacture labyrinths, outdoor playgrounds, climbing walls, and indoor play parks delivered and installed worldwide.",
      heroPrimaryCtaLabel: "Browse Catalog",
      heroPrimaryCtaHref: "/catalog",
      heroSecondaryCtaLabel: "View Categories",
      heroSecondaryCtaHref: "/categories",
      heroQuote: '"Our family zone became the number one weekend destination in the city."',
      heroQuoteAttribution: "FunWorld Hamburg, 2025",
      heroImageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=1400&h=1000&fit=crop&auto=format",
      stats: [
        { value: "840+", label: "Projects installed" },
        { value: "32", label: "Countries served" },
        { value: "18", label: "Years manufacturing" },
        { value: "2.4M", label: "Children playing daily" },
      ],
      productsSectionEyebrow: "Our Products",
      productsSectionTitle: "Everything a child could dream of",
      featuredProducts: [
        {
          title: "Maze Labyrinths",
          tagline: "Get lost in wonder",
          description:
            "Modular indoor and outdoor labyrinth systems for exploration, social play, and high-throughput family entertainment centres.",
          badge: "Ages 3–12",
          ctaLabel: "Request a Quote",
          imageUrl:
            "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Young child inside a colorful play labyrinth",
          theme: "orange",
          linkedCategory: { slug: "shopping-centers" },
        },
        {
          title: "Outdoor Playgrounds",
          tagline: "Built for every childhood",
          description:
            "Durable outdoor systems with slides, towers, rope nets, and anti-vandal details for public parks and schools.",
          badge: "Ages 2–14",
          ctaLabel: "Request a Quote",
          imageUrl:
            "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Colorful outdoor playground structure",
          theme: "blue",
          linkedCategory: { slug: "outdoor-parks" },
        },
        {
          title: "Climbing Walls",
          tagline: "Reach new heights",
          description:
            "Bouldering walls and rope structures that add challenge, movement, and wow-factor to active entertainment spaces.",
          badge: "Ages 4–16",
          ctaLabel: "Request a Quote",
          imageUrl:
            "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Child climbing a colorful wall",
          theme: "charcoal",
          linkedCategory: { slug: "climbing-adventure" },
        },
        {
          title: "Ball Pits & Soft Play",
          tagline: "Dive right in",
          description:
            "Toddler-safe zones with foam shapes, tunnels, slides, and dry pools that encourage safe and imaginative play.",
          badge: "Ages 1–8",
          ctaLabel: "Request a Quote",
          imageUrl:
            "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Colorful slides descending into a ball pit",
          theme: "yellow",
          linkedCategory: { slug: "soft-play" },
        },
      ],
      features: [
        {
          title: "EN 1176 & ASTM certified",
          description:
            "Every product is built around playground safety requirements used across Europe and export markets.",
          iconKey: "shield",
        },
        {
          title: "Custom-built in Poland",
          description:
            "Design, steelwork, HDPE, nets, and foam assembly are coordinated under one production roof.",
          iconKey: "wrench",
        },
        {
          title: "Fast standard lead times",
          description:
            "Approved concepts move quickly from technical development into factory scheduling and shipment.",
          iconKey: "zap",
        },
        {
          title: "Worldwide installation support",
          description:
            "Our team coordinates deliveries, site preparation, installation, and launch support internationally.",
          iconKey: "globe",
        },
      ],
      processEyebrow: "How It Works",
      processTitle: "From idea to first slide",
      processTimelineTitle: "Typical timeline: 8–14 weeks",
      processTimelineSubtitle: "From signed contract to opening day",
      processSteps: [
        {
          stepNumber: "01",
          title: "Concept & Design",
          description:
            "We align on site plan, audience, and investment range before preparing presentation-ready concepts and 3D visuals.",
          theme: "orange",
        },
        {
          stepNumber: "02",
          title: "Manufacturing",
          description:
            "Our teams produce structural elements, HDPE details, nets, foam modules, and finishing packages.",
          theme: "blue",
        },
        {
          stepNumber: "03",
          title: "Delivery & Install",
          description:
            "We coordinate logistics, on-site assembly, final checks, and a smooth handover for your team.",
          theme: "charcoal",
        },
      ],
      processPhases: [
        { title: "Week 1–2", subtitle: "Concept" },
        { title: "Week 3–8", subtitle: "Factory" },
        { title: "Week 9–11", subtitle: "Shipping" },
        { title: "Week 12–14", subtitle: "Install" },
      ],
      projectsEyebrow: "Installed Projects",
      projectsTitle: "Play spaces we brought to life",
      projectsCtaLabel: "Explore product families",
      testimonialsEyebrow: "Client Stories",
      testimonialsTitle: "Trusted by parks, malls & municipalities",
      ctaHeading: "Ready to build something amazing?",
      ctaSubtitle:
        "Tell us about your space, your budget, and your launch target. We will shape the concept and delivery plan with you.",
      ctaButtonLabel: "Start Your Project",
      ctaButtonHref: "/catalog",
      ctaNote: "No commitment · Free consultation",
      contactEyebrow: "Get in Touch",
      contactTitle: "Let’s build your play space",
      contactDescription:
        "Our team usually replies within one business day with the next practical step.",
      contactItems: [
        { label: "Sales & quotes", value: "+48 61 234 5678", type: "phone" },
        { label: "General enquiries", value: "hello@kidsfera.example", type: "email" },
        {
          label: "Factory & HQ",
          value: "ul. Fabryczna 12, Poznań, Poland",
          type: "address",
        },
      ],
      contactForm: {
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        emailLabel: "Email",
        projectTypeLabel: "Project Type",
        messageLabel: "Tell us about your project",
        firstNamePlaceholder: "Anna",
        lastNamePlaceholder: "Kowalska",
        emailPlaceholder: "anna@kidsfera.eu",
        projectTypePlaceholder: "Select a category...",
        messagePlaceholder: "Site area, location, budget, opening date...",
        projectOptions:
          "Maze Labyrinth\nOutdoor Playground\nClimbing Wall\nSoft Play\nIndoor Park\nCustom Project",
        submitLabel: "Send Enquiry",
        note: "We respond within 24 hours · No spam, ever",
      },
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Де діти відкривають пригоди",
        metaDescription:
          "Криті парки, лабіринти, вуличні майданчики, батути, скелодроми та м'які ігрові рішення.",
        canonicalPath: "/uk",
      },
      heroEyebrow: "Виробник і постачальник · З 2006 року",
      heroTitleLine1: "Де діти",
      heroTitleLine2: "Відкривають",
      heroTitleLine3: "Пригоди",
      heroDescription:
        "Ми проєктуємо та виробляємо лабіринти, вуличні майданчики, скелодроми та криті ігрові парки з доставкою і монтажем по всьому світу.",
      heroPrimaryCtaLabel: "Переглянути каталог",
      heroPrimaryCtaHref: "/catalog",
      heroSecondaryCtaLabel: "Переглянути категорії",
      heroSecondaryCtaHref: "/categories",
      heroQuote: "\"Наша сімейна зона стала напрямком номер один на вихідні у місті.\"",
      heroQuoteAttribution: "FunWorld Hamburg, 2025",
      heroImageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=1400&h=1000&fit=crop&auto=format",
      stats: [
        { value: "840+", label: "Реалізованих об'єктів" },
        { value: "32", label: "Країни обслуговування" },
        { value: "18", label: "Років виробництва" },
        { value: "2.4M", label: "Дітей грають щодня" },
      ],
      productsSectionEyebrow: "Наша продукція",
      productsSectionTitle: "Усе, про що може мріяти дитина",
      featuredProducts: [
        {
          title: "Лабіринти",
          tagline: "Загубитися в захопленні",
          description:
            "Модульні системи лабіринтів для дослідження, командної гри та сімейних розважальних центрів із великим потоком відвідувачів.",
          badge: "Вік 3–12",
          ctaLabel: "Запросити пропозицію",
          imageUrl:
            "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Дитина всередині яскравого лабіринту",
          theme: "orange",
          linkedCategory: { slug: "shopping-centers" },
        },
        {
          title: "Вуличні майданчики",
          tagline: "Для кожного дитинства",
          description:
            "Надійні зовнішні системи з гірками, вежами, канатними сітками й антивандальними деталями для парків та шкіл.",
          badge: "Вік 2–14",
          ctaLabel: "Запросити пропозицію",
          imageUrl:
            "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Яскравий вуличний майданчик",
          theme: "blue",
          linkedCategory: { slug: "outdoor-parks" },
        },
        {
          title: "Скелодроми",
          tagline: "Підкорюй нові висоти",
          description:
            "Боулдерингові стіни та мотузкові конструкції, що додають рух, виклик і вау-ефект активним ігровим просторам.",
          badge: "Вік 4–16",
          ctaLabel: "Запросити пропозицію",
          imageUrl:
            "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Дитина на скелодромі",
          theme: "charcoal",
          linkedCategory: { slug: "climbing-adventure" },
        },
        {
          title: "Сухі басейни та soft play",
          tagline: "Пірнай у гру",
          description:
            "Безпечні зони для малюків з пінними модулями, тунелями, гірками та сухими басейнами для уявної гри.",
          badge: "Вік 1–8",
          ctaLabel: "Запросити пропозицію",
          imageUrl:
            "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Гірки у кульковий басейн",
          theme: "yellow",
          linkedCategory: { slug: "soft-play" },
        },
      ],
      features: [
        {
          title: "Сертифікація EN 1176 та ASTM",
          description:
            "Кожен продукт будується навколо вимог безпеки майданчиків, що використовуються в Європі та на експортних ринках.",
          iconKey: "shield",
        },
        {
          title: "Власне виробництво в Польщі",
          description:
            "Проєктування, метал, HDPE, сітки та пінні модулі координуються під одним виробничим дахом.",
          iconKey: "wrench",
        },
        {
          title: "Швидкі стандартні терміни",
          description:
            "Після погодження концепції ми швидко переводимо проєкт у технічну розробку та графік виробництва.",
          iconKey: "zap",
        },
        {
          title: "Підтримка монтажу по світу",
          description:
            "Команда координує логістику, підготовку майданчика, монтаж і запуск на міжнародних об'єктах.",
          iconKey: "globe",
        },
      ],
      processEyebrow: "Як це працює",
      processTitle: "Від ідеї до першої гірки",
      processTimelineTitle: "Типовий строк: 8–14 тижнів",
      processTimelineSubtitle: "Від підписання договору до дня відкриття",
      processSteps: [
        {
          stepNumber: "01",
          title: "Концепція та дизайн",
          description:
            "Узгоджуємо план майданчика, аудиторію та бюджет, після чого готуємо концепції і 3D-візуалізації.",
          theme: "orange",
        },
        {
          stepNumber: "02",
          title: "Виробництво",
          description:
            "Наші команди виробляють силові елементи, HDPE-деталі, сітки, пінні модулі та фінішні пакети.",
          theme: "blue",
        },
        {
          stepNumber: "03",
          title: "Доставка та монтаж",
          description:
            "Ми координуємо логістику, збірку на місці, фінальні перевірки та передачу об'єкта команді клієнта.",
          theme: "charcoal",
        },
      ],
      processPhases: [
        { title: "Тиж. 1–2", subtitle: "Концепція" },
        { title: "Тиж. 3–8", subtitle: "Фабрика" },
        { title: "Тиж. 9–11", subtitle: "Доставка" },
        { title: "Тиж. 12–14", subtitle: "Монтаж" },
      ],
      projectsEyebrow: "Реалізовані проєкти",
      projectsTitle: "Ігрові простори, які ми створили",
      projectsCtaLabel: "Дослідити продуктові сімейства",
      testimonialsEyebrow: "Відгуки клієнтів",
      testimonialsTitle: "Нам довіряють парки, молли та міста",
      ctaHeading: "Готові збудувати щось неймовірне?",
      ctaSubtitle:
        "Розкажіть про ваш простір, бюджет і дату запуску. Ми допоможемо сформувати концепцію та план реалізації.",
      ctaButtonLabel: "Розпочати проєкт",
      ctaButtonHref: "/catalog",
      ctaNote: "Без зобов'язань · Безкоштовна консультація",
      contactEyebrow: "Зв'яжіться з нами",
      contactTitle: "Створімо ваш ігровий простір",
      contactDescription:
        "Наша команда зазвичай відповідає протягом одного робочого дня з наступним практичним кроком.",
      contactItems: [
        { label: "Продажі та пропозиції", value: "+48 61 234 5678", type: "phone" },
        { label: "Загальні запити", value: "hello@kidsfera.example", type: "email" },
        {
          label: "Фабрика та головний офіс",
          value: "вул. Fabryczna 12, Познань, Польща",
          type: "address",
        },
      ],
      contactForm: {
        firstNameLabel: "Ім'я",
        lastNameLabel: "Прізвище",
        emailLabel: "Email",
        projectTypeLabel: "Тип проєкту",
        messageLabel: "Розкажіть про ваш проєкт",
        firstNamePlaceholder: "Анна",
        lastNamePlaceholder: "Коваленко",
        emailPlaceholder: "anna@kidsfera.ua",
        projectTypePlaceholder: "Оберіть категорію...",
        messagePlaceholder: "Площа, місто, бюджет, дата відкриття...",
        projectOptions:
          "Лабіринт\nВуличний майданчик\nСкелодром\nМ'яка зона\nКритий парк\nІндивідуальний проєкт",
        submitLabel: "Надіслати запит",
        note: "Відповідаємо протягом 24 годин · Без спаму",
      },
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Где дети открывают приключения",
        metaDescription:
          "Крытые парки, лабиринты, уличные площадки, батуты, скалодромы и мягкие игровые решения.",
        canonicalPath: "/ru",
      },
      heroEyebrow: "Производитель и поставщик · С 2006 года",
      heroTitleLine1: "Где дети",
      heroTitleLine2: "Открывают",
      heroTitleLine3: "Приключения",
      heroDescription:
        "Мы проектируем и производим лабиринты, уличные площадки, скалодромы и крытые игровые парки с доставкой и монтажом по всему миру.",
      heroPrimaryCtaLabel: "Смотреть каталог",
      heroPrimaryCtaHref: "/catalog",
      heroSecondaryCtaLabel: "Смотреть категории",
      heroSecondaryCtaHref: "/categories",
      heroQuote: "\"Наша семейная зона стала главным направлением выходного дня в городе.\"",
      heroQuoteAttribution: "FunWorld Hamburg, 2025",
      heroImageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=1400&h=1000&fit=crop&auto=format",
      stats: [
        { value: "840+", label: "Реализованных объектов" },
        { value: "32", label: "Страны обслуживания" },
        { value: "18", label: "Лет производства" },
        { value: "2.4M", label: "Детей играют ежедневно" },
      ],
      productsSectionEyebrow: "Наша продукция",
      productsSectionTitle: "Всё, о чём может мечтать ребёнок",
      featuredProducts: [
        {
          title: "Лабиринты",
          tagline: "Потеряться в восторге",
          description:
            "Модульные системы лабиринтов для исследования, командной игры и семейных центров с высоким трафиком.",
          badge: "Возраст 3–12",
          ctaLabel: "Запросить предложение",
          imageUrl:
            "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Ребёнок внутри яркого лабиринта",
          theme: "orange",
          linkedCategory: { slug: "shopping-centers" },
        },
        {
          title: "Уличные площадки",
          tagline: "Для каждого детства",
          description:
            "Надёжные наружные системы с горками, башнями, канатными сетями и антивандальными деталями для парков и школ.",
          badge: "Возраст 2–14",
          ctaLabel: "Запросить предложение",
          imageUrl:
            "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Яркая уличная площадка",
          theme: "blue",
          linkedCategory: { slug: "outdoor-parks" },
        },
        {
          title: "Скалодромы",
          tagline: "Поднимайся выше",
          description:
            "Боулдеринговые стены и канатные конструкции, которые добавляют движение, вызов и вау-эффект активным игровым зонам.",
          badge: "Возраст 4–16",
          ctaLabel: "Запросить предложение",
          imageUrl:
            "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Ребёнок на скалодроме",
          theme: "charcoal",
          linkedCategory: { slug: "climbing-adventure" },
        },
        {
          title: "Сухие бассейны и soft play",
          tagline: "Ныряй в игру",
          description:
            "Безопасные зоны для малышей с пенными модулями, тоннелями, горками и сухими бассейнами для воображаемой игры.",
          badge: "Возраст 1–8",
          ctaLabel: "Запросить предложение",
          imageUrl:
            "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Горки в бассейн с шариками",
          theme: "yellow",
          linkedCategory: { slug: "soft-play" },
        },
      ],
      features: [
        {
          title: "Сертификация EN 1176 и ASTM",
          description:
            "Каждый продукт строится вокруг требований безопасности игровых площадок для Европы и экспортных рынков.",
          iconKey: "shield",
        },
        {
          title: "Собственное производство в Польше",
          description:
            "Проектирование, металл, HDPE, сети и пенные модули координируются под одной производственной крышей.",
          iconKey: "wrench",
        },
        {
          title: "Быстрые стандартные сроки",
          description:
            "После согласования концепции мы быстро переводим проект в техническую разработку и график производства.",
          iconKey: "zap",
        },
        {
          title: "Поддержка монтажа по миру",
          description:
            "Команда координирует логистику, подготовку площадки, монтаж и запуск международных объектов.",
          iconKey: "globe",
        },
      ],
      processEyebrow: "Как это работает",
      processTitle: "От идеи до первой горки",
      processTimelineTitle: "Типичный срок: 8–14 недель",
      processTimelineSubtitle: "От подписания договора до дня открытия",
      processSteps: [
        {
          stepNumber: "01",
          title: "Концепция и дизайн",
          description:
            "Согласовываем план площадки, аудиторию и бюджет, затем готовим концепции и 3D-визуализации.",
          theme: "orange",
        },
        {
          stepNumber: "02",
          title: "Производство",
          description:
            "Наши команды производят силовые элементы, детали HDPE, сети, пенные модули и финишные комплекты.",
          theme: "blue",
        },
        {
          stepNumber: "03",
          title: "Доставка и монтаж",
          description:
            "Мы координируем логистику, сборку на площадке, финальные проверки и передачу объекта команде клиента.",
          theme: "charcoal",
        },
      ],
      processPhases: [
        { title: "Нед. 1–2", subtitle: "Концепция" },
        { title: "Нед. 3–8", subtitle: "Фабрика" },
        { title: "Нед. 9–11", subtitle: "Доставка" },
        { title: "Нед. 12–14", subtitle: "Монтаж" },
      ],
      projectsEyebrow: "Реализованные проекты",
      projectsTitle: "Игровые пространства, которые мы создали",
      projectsCtaLabel: "Изучить продуктовые семейства",
      testimonialsEyebrow: "Отзывы клиентов",
      testimonialsTitle: "Нам доверяют парки, моллы и города",
      ctaHeading: "Готовы построить что-то невероятное?",
      ctaSubtitle:
        "Расскажите о вашем пространстве, бюджете и дате запуска. Мы поможем сформировать концепцию и план реализации.",
      ctaButtonLabel: "Начать проект",
      ctaButtonHref: "/catalog",
      ctaNote: "Без обязательств · Бесплатная консультация",
      contactEyebrow: "Свяжитесь с нами",
      contactTitle: "Создадим ваше игровое пространство",
      contactDescription:
        "Наша команда обычно отвечает в течение одного рабочего дня с понятным следующим шагом.",
      contactItems: [
        { label: "Продажи и предложения", value: "+48 61 234 5678", type: "phone" },
        { label: "Общие запросы", value: "hello@kidsfera.example", type: "email" },
        {
          label: "Фабрика и головной офис",
          value: "ул. Fabryczna 12, Познань, Польша",
          type: "address",
        },
      ],
      contactForm: {
        firstNameLabel: "Имя",
        lastNameLabel: "Фамилия",
        emailLabel: "Email",
        projectTypeLabel: "Тип проекта",
        messageLabel: "Расскажите о вашем проекте",
        firstNamePlaceholder: "Анна",
        lastNamePlaceholder: "Коваленко",
        emailPlaceholder: "anna@kidsfera.ru",
        projectTypePlaceholder: "Выберите категорию...",
        messagePlaceholder: "Площадь, город, бюджет, дата открытия...",
        projectOptions:
          "Лабиринт\nУличная площадка\nСкалодром\nМягкая зона\nКрытый парк\nИндивидуальный проект",
        submitLabel: "Отправить запрос",
        note: "Отвечаем в течение 24 часов · Без спама",
      },
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Gdzie dzieci odkrywają przygodę",
        metaDescription:
          "Parki kryte, labirynty, place zabaw, trampoliny, ścianki wspinaczkowe i strefy soft play.",
        canonicalPath: "/pl",
      },
      heroEyebrow: "Producent i dostawca · Od 2006 roku",
      heroTitleLine1: "Gdzie dzieci",
      heroTitleLine2: "Odkrywają",
      heroTitleLine3: "Przygodę",
      heroDescription:
        "Projektujemy i produkujemy labirynty, place zabaw, ścianki wspinaczkowe i kryte parki zabawy z dostawą i montażem na całym świecie.",
      heroPrimaryCtaLabel: "Przeglądaj katalog",
      heroPrimaryCtaHref: "/catalog",
      heroSecondaryCtaLabel: "Zobacz kategorie",
      heroSecondaryCtaHref: "/categories",
      heroQuote: "\"Nasza strefa rodzinna stała się numerem jeden na weekend w mieście.\"",
      heroQuoteAttribution: "FunWorld Hamburg, 2025",
      heroImageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=1400&h=1000&fit=crop&auto=format",
      stats: [
        { value: "840+", label: "Zrealizowanych obiektów" },
        { value: "32", label: "Obsługiwane kraje" },
        { value: "18", label: "Lat produkcji" },
        { value: "2.4M", label: "Dzieci bawiących się codziennie" },
      ],
      productsSectionEyebrow: "Nasze produkty",
      productsSectionTitle: "Wszystko, o czym może marzyć dziecko",
      featuredProducts: [
        {
          title: "Labirynty",
          tagline: "Zgub się w zachwycie",
          description:
            "Modułowe systemy labiryntów do eksploracji, zabawy zespołowej i centrów rodzinnych o dużym ruchu.",
          badge: "Wiek 3–12",
          ctaLabel: "Zapytaj o ofertę",
          imageUrl:
            "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Dziecko w kolorowym labiryncie",
          theme: "orange",
          linkedCategory: { slug: "shopping-centers" },
        },
        {
          title: "Place zabaw",
          tagline: "Dla każdego dzieciństwa",
          description:
            "Wytrzymałe systemy zewnętrzne ze zjeżdżalniami, wieżami, siatkami linowymi i detalami antywandalowymi do parków i szkół.",
          badge: "Wiek 2–14",
          ctaLabel: "Zapytaj o ofertę",
          imageUrl:
            "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Kolorowy plac zabaw",
          theme: "blue",
          linkedCategory: { slug: "outdoor-parks" },
        },
        {
          title: "Ścianki wspinaczkowe",
          tagline: "Sięgaj wyżej",
          description:
            "Ściany bulderowe i konstrukcje linowe dodające ruch, wyzwanie i efekt wow aktywnym przestrzeniom zabawy.",
          badge: "Wiek 4–16",
          ctaLabel: "Zapytaj o ofertę",
          imageUrl:
            "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Dziecko na ściance wspinaczkowej",
          theme: "charcoal",
          linkedCategory: { slug: "climbing-adventure" },
        },
        {
          title: "Baseny z kulkami i soft play",
          tagline: "Zanurz się w zabawie",
          description:
            "Bezpieczne strefy dla maluchów z piankowymi modułami, tunelami, zjeżdżalniami i suchymi basenami.",
          badge: "Wiek 1–8",
          ctaLabel: "Zapytaj o ofertę",
          imageUrl:
            "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          imageAlt: "Zjeżdżalnie do basenu z kulkami",
          theme: "yellow",
          linkedCategory: { slug: "soft-play" },
        },
      ],
      features: [
        {
          title: "Certyfikacja EN 1176 i ASTM",
          description:
            "Każdy produkt budujemy zgodnie z wymaganiami bezpieczeństwa stosowanymi w Europie i na rynkach eksportowych.",
          iconKey: "shield",
        },
        {
          title: "Własna produkcja w Polsce",
          description:
            "Projektowanie, stal, HDPE, siatki i moduły piankowe są koordynowane pod jednym dachem produkcyjnym.",
          iconKey: "wrench",
        },
        {
          title: "Szybkie terminy standardowe",
          description:
            "Po akceptacji koncepcji sprawnie przechodzimy do rozwoju technicznego i harmonogramu produkcji.",
          iconKey: "zap",
        },
        {
          title: "Wsparcie montażu na świecie",
          description:
            "Zespół koordynuje logistykę, przygotowanie miejsca, montaż i start obiektów międzynarodowych.",
          iconKey: "globe",
        },
      ],
      processEyebrow: "Jak to działa",
      processTitle: "Od pomysłu do pierwszej zjeżdżalni",
      processTimelineTitle: "Typowy czas: 8–14 tygodni",
      processTimelineSubtitle: "Od podpisania umowy do dnia otwarcia",
      processSteps: [
        {
          stepNumber: "01",
          title: "Koncepcja i projekt",
          description:
            "Uzgadniamy plan terenu, odbiorcę i budżet, a następnie przygotowujemy koncepcje i wizualizacje 3D.",
          theme: "orange",
        },
        {
          stepNumber: "02",
          title: "Produkcja",
          description:
            "Nasze zespoły produkują elementy konstrukcyjne, detale HDPE, siatki, moduły piankowe i pakiety wykończeniowe.",
          theme: "blue",
        },
        {
          stepNumber: "03",
          title: "Dostawa i montaż",
          description:
            "Koordynujemy logistykę, montaż na miejscu, końcowe kontrole i przekazanie obiektu zespołowi klienta.",
          theme: "charcoal",
        },
      ],
      processPhases: [
        { title: "Tydz. 1–2", subtitle: "Koncepcja" },
        { title: "Tydz. 3–8", subtitle: "Fabryka" },
        { title: "Tydz. 9–11", subtitle: "Dostawa" },
        { title: "Tydz. 12–14", subtitle: "Montaż" },
      ],
      projectsEyebrow: "Zrealizowane projekty",
      projectsTitle: "Przestrzenie zabawy, które stworzyliśmy",
      projectsCtaLabel: "Poznaj rodziny produktów",
      testimonialsEyebrow: "Opinie klientów",
      testimonialsTitle: "Zaufali nam parki, galerie i miasta",
      ctaHeading: "Gotowi zbudować coś niesamowitego?",
      ctaSubtitle:
        "Opowiedz nam o swojej przestrzeni, budżecie i terminie otwarcia. Pomożemy ułożyć koncepcję i plan realizacji.",
      ctaButtonLabel: "Rozpocznij projekt",
      ctaButtonHref: "/catalog",
      ctaNote: "Bez zobowiązań · Bezpłatna konsultacja",
      contactEyebrow: "Skontaktuj się z nami",
      contactTitle: "Stwórzmy Twoją przestrzeń zabawy",
      contactDescription:
        "Nasz zespół zwykle odpowiada w ciągu jednego dnia roboczego z kolejnym konkretnym krokiem.",
      contactItems: [
        { label: "Sprzedaż i oferty", value: "+48 61 234 5678", type: "phone" },
        { label: "Zapytania ogólne", value: "hello@kidsfera.example", type: "email" },
        {
          label: "Fabryka i centrala",
          value: "ul. Fabryczna 12, Poznań, Polska",
          type: "address",
        },
      ],
      contactForm: {
        firstNameLabel: "Imię",
        lastNameLabel: "Nazwisko",
        emailLabel: "Email",
        projectTypeLabel: "Typ projektu",
        messageLabel: "Opowiedz o swoim projekcie",
        firstNamePlaceholder: "Anna",
        lastNamePlaceholder: "Kowalska",
        emailPlaceholder: "anna@kidsfera.pl",
        projectTypePlaceholder: "Wybierz kategorię...",
        messagePlaceholder: "Powierzchnia, lokalizacja, budżet, data otwarcia...",
        projectOptions:
          "Labirynt\nPlac zabaw\nŚcianka wspinaczkowa\nStrefa soft play\nPark kryty\nProjekt indywidualny",
        submitLabel: "Wyślij zapytanie",
        note: "Odpowiadamy w ciągu 24 godzin · Zero spamu",
      },
    },
  } satisfies Localized<Record<string, unknown>>,
  categoriesPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Categories",
        metaDescription: "Explore all attraction categories in the multilingual catalog.",
        canonicalPath: "/en/categories",
      },
      eyebrow: "All Categories",
      title: "Choose your attraction type",
      description:
        "From compact home sets to full shopping-centre megaparks, we shape each product family around a real use case.",
      allProductsLabel: "All Products",
      viewCatalogLabel: "Browse Catalog",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Категорії",
        metaDescription: "Досліджуйте всі категорії атракціонів у мультимовному каталозі.",
        canonicalPath: "/uk/categories",
      },
      eyebrow: "Усі категорії",
      title: "Оберіть тип атракціону",
      description:
        "Від компактних домашніх комплектів до мегапарків у торгових центрах ми формуємо кожне сімейство продуктів під реальний сценарій використання.",
      allProductsLabel: "Усі товари",
      viewCatalogLabel: "Перейти в каталог",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Категории",
        metaDescription: "Изучите все категории аттракционов в мультиязычном каталоге.",
        canonicalPath: "/ru/categories",
      },
      eyebrow: "Все категории",
      title: "Выберите тип аттракциона",
      description:
        "От компактных домашних наборов до мегапарков в торговых центрах мы строим каждую продуктовую семью под реальный сценарий.",
      allProductsLabel: "Все товары",
      viewCatalogLabel: "Перейти в каталог",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Kategorie",
        metaDescription: "Poznaj wszystkie kategorie atrakcji w wielojęzycznym katalogu.",
        canonicalPath: "/pl/categories",
      },
      eyebrow: "Wszystkie kategorie",
      title: "Wybierz typ atrakcji",
      description:
        "Od kompaktowych zestawów domowych po megaparki w galeriach handlowych budujemy każdą rodzinę produktów wokół realnego zastosowania.",
      allProductsLabel: "Wszystkie produkty",
      viewCatalogLabel: "Przejdź do katalogu",
    },
  } satisfies Localized<Record<string, unknown>>,
  catalogPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Catalog",
        metaDescription: "Filter multilingual products by category and age range.",
        canonicalPath: "/en/catalog",
      },
      eyebrow: "Filter by",
      title: "Product Catalog",
      description:
        "Compare play systems, explore categories, and move into product details without leaving the storefront.",
      filterByLabel: "Filters",
      categoryLabel: "Category",
      ageRangeLabel: "Age Range",
      allLabel: "All",
      noResultsLabel: "No products found. Try adjusting your filters.",
      viewDetailsLabel: "View Details",
      itemsLabel: "items",
      filtersLabel: "Filters",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Каталог",
        metaDescription: "Фільтруйте мультимовні товари за категорією та віковою групою.",
        canonicalPath: "/uk/catalog",
      },
      eyebrow: "Фільтрувати за",
      title: "Каталог продукції",
      description:
        "Порівнюйте ігрові системи, досліджуйте категорії та переходьте до деталей товару прямо у storefront.",
      filterByLabel: "Фільтри",
      categoryLabel: "Категорія",
      ageRangeLabel: "Вікова група",
      allLabel: "Усі",
      noResultsLabel: "Товарів не знайдено. Спробуйте змінити фільтри.",
      viewDetailsLabel: "Детальніше",
      itemsLabel: "товарів",
      filtersLabel: "Фільтри",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Каталог",
        metaDescription: "Фильтруйте мультиязычные товары по категории и возрасту.",
        canonicalPath: "/ru/catalog",
      },
      eyebrow: "Фильтровать по",
      title: "Каталог продукции",
      description:
        "Сравнивайте игровые системы, изучайте категории и переходите к деталям товара прямо внутри storefront.",
      filterByLabel: "Фильтры",
      categoryLabel: "Категория",
      ageRangeLabel: "Возрастная группа",
      allLabel: "Все",
      noResultsLabel: "Товары не найдены. Попробуйте изменить фильтры.",
      viewDetailsLabel: "Подробнее",
      itemsLabel: "товаров",
      filtersLabel: "Фильтры",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Katalog",
        metaDescription: "Filtruj wielojęzyczne produkty według kategorii i wieku.",
        canonicalPath: "/pl/catalog",
      },
      eyebrow: "Filtruj według",
      title: "Katalog produktów",
      description:
        "Porównuj systemy zabaw, przeglądaj kategorie i przechodź do szczegółów produktu bez opuszczania storefront.",
      filterByLabel: "Filtry",
      categoryLabel: "Kategoria",
      ageRangeLabel: "Wiek",
      allLabel: "Wszystkie",
      noResultsLabel: "Nie znaleziono produktów. Spróbuj zmienić filtry.",
      viewDetailsLabel: "Szczegóły",
      itemsLabel: "pozycji",
      filtersLabel: "Filtry",
    },
  } satisfies Localized<Record<string, unknown>>,
  productPage: {
    en: {
      galleryLabel: "Gallery",
      specsLabel: "Specifications",
      ageLabel: "Age Range",
      sizeLabel: "Dimensions",
      capacityLabel: "Capacity",
      materialLabel: "Material",
      leadLabel: "Lead Time",
      requestQuoteLabel: "Request a Quote",
      backToCatalogLabel: "Back to Catalog",
      relatedTitle: "Related Products",
      priceOnRequestLabel: "Price on request",
      certifiedByLabel: "Certified by",
      notFoundTitle: "Product not found",
    },
    uk: {
      galleryLabel: "Галерея",
      specsLabel: "Характеристики",
      ageLabel: "Вікова група",
      sizeLabel: "Розміри",
      capacityLabel: "Місткість",
      materialLabel: "Матеріал",
      leadLabel: "Термін виготовлення",
      requestQuoteLabel: "Запросити пропозицію",
      backToCatalogLabel: "Назад до каталогу",
      relatedTitle: "Схожі товари",
      priceOnRequestLabel: "Ціна за запитом",
      certifiedByLabel: "Сертифіковано",
      notFoundTitle: "Товар не знайдено",
    },
    ru: {
      galleryLabel: "Галерея",
      specsLabel: "Характеристики",
      ageLabel: "Возрастная группа",
      sizeLabel: "Размеры",
      capacityLabel: "Вместимость",
      materialLabel: "Материал",
      leadLabel: "Срок изготовления",
      requestQuoteLabel: "Запросить предложение",
      backToCatalogLabel: "Назад в каталог",
      relatedTitle: "Похожие товары",
      priceOnRequestLabel: "Цена по запросу",
      certifiedByLabel: "Сертифицировано",
      notFoundTitle: "Товар не найден",
    },
    pl: {
      galleryLabel: "Galeria",
      specsLabel: "Specyfikacja",
      ageLabel: "Wiek",
      sizeLabel: "Wymiary",
      capacityLabel: "Pojemność",
      materialLabel: "Materiał",
      leadLabel: "Czas realizacji",
      requestQuoteLabel: "Zapytaj o ofertę",
      backToCatalogLabel: "Wróć do katalogu",
      relatedTitle: "Podobne produkty",
      priceOnRequestLabel: "Cena na zapytanie",
      certifiedByLabel: "Certyfikowany",
      notFoundTitle: "Nie znaleziono produktu",
    },
  } satisfies Localized<Record<string, unknown>>,
  categories: [
    {
      slug: "shopping-centers",
      themeColor: "#FF4500",
      emoji: "🏆",
      imageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=700&h=500&fit=crop&auto=format",
      sortOrder: 1,
      featured: true,
      locales: {
        en: {
          name: "Shopping Centers",
          description:
            "Large multi-level attraction systems for malls and indoor entertainment centres.",
          cardDescription: "Multi-level complexes for malls and family destinations.",
          seo: {
            metaTitle: "Shopping Center Attractions | Kidsfera",
            metaDescription: "Maze and play systems for malls and indoor parks.",
          },
        },
        uk: {
          name: "Торгові центри",
          description:
            "Великі багаторівневі системи атракціонів для молів і критих розважальних центрів.",
          cardDescription: "Багаторівневі комплекси для молів та сімейних локацій.",
          seo: {
            metaTitle: "Атракціони для торгових центрів | Kidsfera",
            metaDescription: "Лабіринти та ігрові системи для молів і критих парків.",
          },
        },
        ru: {
          name: "Торговые центры",
          description:
            "Большие многоуровневые системы аттракционов для моллов и крытых развлекательных центров.",
          cardDescription: "Многоуровневые комплексы для моллов и семейных локаций.",
          seo: {
            metaTitle: "Аттракционы для торговых центров | Kidsfera",
            metaDescription: "Лабиринты и игровые системы для моллов и крытых парков.",
          },
        },
        pl: {
          name: "Centra handlowe",
          description:
            "Duże wielopoziomowe systemy atrakcji do galerii i krytych centrów rozrywki.",
          cardDescription: "Wielopoziomowe kompleksy dla galerii i rodzinnych destynacji.",
          seo: {
            metaTitle: "Atrakcje do centrów handlowych | Kidsfera",
            metaDescription: "Labirynty i systemy zabawy dla galerii i parków krytych.",
          },
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "outdoor-parks",
      themeColor: "#0055FF",
      emoji: "🌳",
      imageUrl:
        "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=700&h=500&fit=crop&auto=format",
      sortOrder: 2,
      featured: true,
      locales: {
        en: {
          name: "Outdoor & Parks",
          description: "All-season structures for parks, schools, cities, and hospitality projects.",
          cardDescription: "Weather-resistant systems for public outdoor use.",
        },
        uk: {
          name: "Вулиця та парки",
          description: "Всесезонні конструкції для парків, шкіл, міст і готельних проєктів.",
          cardDescription: "Стійкі до погоди системи для публічного зовнішнього використання.",
        },
        ru: {
          name: "Улица и парки",
          description: "Всесезонные конструкции для парков, школ, городов и гостиничных проектов.",
          cardDescription: "Погодостойкие системы для общественного наружного использования.",
        },
        pl: {
          name: "Zewnętrzne i parki",
          description: "Całoroczne konstrukcje do parków, szkół, miast i projektów hotelowych.",
          cardDescription: "Odporne na pogodę systemy do przestrzeni publicznych.",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "home-residential",
      themeColor: "#FFD700",
      emoji: "🏡",
      imageUrl:
        "https://images.unsplash.com/photo-1777613074050-e62980d065fd?w=700&h=500&fit=crop&auto=format",
      sortOrder: 3,
      featured: true,
      locales: {
        en: {
          name: "Home & Residential",
          description: "Compact backyard and indoor products for private homes and small spaces.",
          cardDescription: "Compact solutions for gardens, homes, and playrooms.",
        },
        uk: {
          name: "Для дому",
          description: "Компактні продукти для подвір'я та кімнат у приватних будинках і невеликих просторах.",
          cardDescription: "Компактні рішення для саду, дому та ігрових кімнат.",
        },
        ru: {
          name: "Для дома",
          description: "Компактные продукты для двора и комнаты в частных домах и небольших пространствах.",
          cardDescription: "Компактные решения для сада, дома и игровых комнат.",
        },
        pl: {
          name: "Dom i ogród",
          description: "Kompaktowe produkty do ogrodu i wnętrza dla domów prywatnych oraz małych przestrzeni.",
          cardDescription: "Kompaktowe rozwiązania do ogrodu, domu i sal zabaw.",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "jump-zones",
      themeColor: "#00C853",
      emoji: "🌀",
      imageUrl:
        "https://images.unsplash.com/photo-1751235640841-d8d1035a80f0?w=700&h=500&fit=crop&auto=format",
      sortOrder: 4,
      featured: false,
      locales: {
        en: {
          name: "Jump Zones",
          description: "Commercial trampoline and jump solutions for active fun centres.",
          cardDescription: "Arena-scale trampoline concepts and compact jump systems.",
        },
        uk: {
          name: "Батутні зони",
          description: "Комерційні батутні та jump-рішення для активних центрів дозвілля.",
          cardDescription: "Арени на батутах і компактні jump-системи.",
        },
        ru: {
          name: "Батутные зоны",
          description: "Коммерческие батутные и jump-решения для активных центров развлечений.",
          cardDescription: "Арены на батутах и компактные jump-системы.",
        },
        pl: {
          name: "Strefy skoku",
          description: "Komercyjne trampoliny i rozwiązania jump do aktywnych centrów zabawy.",
          cardDescription: "Areny trampolinowe i kompaktowe systemy jump.",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "climbing-adventure",
      themeColor: "#8B00FF",
      emoji: "🧗",
      imageUrl:
        "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=700&h=500&fit=crop&auto=format",
      sortOrder: 5,
      featured: true,
      locales: {
        en: {
          name: "Climbing & Adventure",
          description: "Bouldering walls, rope challenges, and adventure systems for active spaces.",
          cardDescription: "Movement-first attractions for energetic family destinations.",
        },
        uk: {
          name: "Скелелазіння та пригоди",
          description: "Боулдерингові стіни, мотузкові виклики та пригодницькі системи для активних просторів.",
          cardDescription: "Атракціони, орієнтовані на рух, для енергійних сімейних просторів.",
        },
        ru: {
          name: "Скалолазание и приключения",
          description: "Боулдеринговые стены, канатные испытания и приключенческие системы для активных пространств.",
          cardDescription: "Аттракционы, ориентированные на движение, для семейных пространств.",
        },
        pl: {
          name: "Wspinaczka i przygoda",
          description: "Ściany bulderowe, wyzwania linowe i systemy przygodowe do aktywnych przestrzeni.",
          cardDescription: "Atrakcje nastawione na ruch dla energetycznych miejsc rodzinnych.",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "soft-play",
      themeColor: "#FF1493",
      emoji: "🎈",
      imageUrl:
        "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=700&h=500&fit=crop&auto=format",
      sortOrder: 6,
      featured: true,
      locales: {
        en: {
          name: "Soft Play",
          description: "Soft zones, dry pools, toddler play, and foam-based movement structures.",
          cardDescription: "Safe, colorful, toddler-friendly play zones.",
        },
        uk: {
          name: "М'який спорт",
          description: "М'які зони, сухі басейни, toddler play та пінні конструкції для руху.",
          cardDescription: "Безпечні, яскраві та дружні до малюків ігрові зони.",
        },
        ru: {
          name: "Мягкий спорт",
          description: "Мягкие зоны, сухие бассейны, toddler play и пенные конструкции для движения.",
          cardDescription: "Безопасные, яркие и дружелюбные к малышам игровые зоны.",
        },
        pl: {
          name: "Soft play",
          description: "Miękkie strefy, suche baseny, toddler play i piankowe konstrukcje ruchowe.",
          cardDescription: "Bezpieczne, kolorowe strefy przyjazne najmłodszym.",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
  ],
  products: [
    {
      slug: "funmaze-pro-xl",
      categorySlug: "shopping-centers",
      sortOrder: 1,
      featured: true,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=900&h=700&fit=crop&auto=format",
          alt: "Indoor playground labyrinth installation",
        },
        {
          url: "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          alt: "Child walking through labyrinth bridge",
        },
      ]),
      certifications: sharedBadges(["EN 1176", "CE", "Indoor"]),
      locales: {
        en: {
          name: "FunMaze Pro XL",
          shortDescription: "Flagship shopping-centre labyrinth with bridges, tunnels, and slides.",
          description:
            "Our flagship shopping-centre labyrinth keeps families engaged for hours with multi-level circulation, bridges, tubes, and high-visibility color blocking.",
          ageRange: "3–12",
          priceLabel: "€28,000–€65,000",
          size: "80–400 m²",
          capacity: "60–200 children",
          material: "HDPE + steel",
          leadTime: "10–14 weeks",
          seo: {
            metaTitle: "FunMaze Pro XL | Kidsfera",
            metaDescription: "Indoor mall labyrinth system with multiple levels and slides.",
          },
        },
        uk: {
          name: "FunMaze Pro XL",
          shortDescription: "Флагманський лабіринт для торгових центрів з мостами, тунелями та гірками.",
          description:
            "Флагманська система лабіринту для молів, яка утримує увагу сімей багаторівневими маршрутами, мостами, тунелями та виразною кольоровою композицією.",
          ageRange: "3–12",
          priceLabel: "€28,000–€65,000",
          size: "80–400 м²",
          capacity: "60–200 дітей",
          material: "HDPE + сталь",
          leadTime: "10–14 тижнів",
        },
        ru: {
          name: "FunMaze Pro XL",
          shortDescription: "Флагманский лабиринт для торговых центров с мостами, тоннелями и горками.",
          description:
            "Флагманская система лабиринта для моллов, которая удерживает внимание семей за счёт многоуровневых маршрутов, мостов, тоннелей и яркой цветовой композиции.",
          ageRange: "3–12",
          priceLabel: "€28,000–€65,000",
          size: "80–400 м²",
          capacity: "60–200 детей",
          material: "HDPE + сталь",
          leadTime: "10–14 недель",
        },
        pl: {
          name: "FunMaze Pro XL",
          shortDescription: "Flagowy labirynt do galerii z mostami, tunelami i zjeżdżalniami.",
          description:
            "Flagowy system labiryntowy do galerii handlowych, który angażuje rodziny dzięki wielopoziomowemu układowi, mostom, tunelom i wyrazistej kolorystyce.",
          ageRange: "3–12",
          priceLabel: "€28,000–€65,000",
          size: "80–400 m²",
          capacity: "60–200 dzieci",
          material: "HDPE + stal",
          leadTime: "10–14 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "megatower-5000",
      categorySlug: "shopping-centers",
      sortOrder: 2,
      featured: false,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=900&h=700&fit=crop&auto=format",
          alt: "Tall soft play tower with slides",
        },
        {
          url: "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          alt: "Soft play tower and dry pool details",
        },
      ]),
      certifications: sharedBadges(["EN 1176", "CE", "Toddler Zone"]),
      locales: {
        en: {
          name: "MegaTower 5000",
          shortDescription: "High-capacity multi-level tower with toddler zone and slide package.",
          description:
            "A tall soft-play tower configured for large family centres with multiple routes, slides, climbing challenges, and an integrated toddler area.",
          ageRange: "1–10",
          priceLabel: "€35,000–€90,000",
          size: "120–600 m²",
          capacity: "100–300 children",
          material: "HDPE + foam",
          leadTime: "12–16 weeks",
        },
        uk: {
          name: "MegaTower 5000",
          shortDescription: "Багаторівнева вежа великої місткості з toddler-зоною та комплектом гірок.",
          description:
            "Висока soft-play вежа для великих сімейних центрів з кількома маршрутами, гірками, елементами для лазіння та інтегрованою зоною для малюків.",
          ageRange: "1–10",
          priceLabel: "€35,000–€90,000",
          size: "120–600 м²",
          capacity: "100–300 дітей",
          material: "HDPE + піна",
          leadTime: "12–16 тижнів",
        },
        ru: {
          name: "MegaTower 5000",
          shortDescription: "Многоуровневая башня большой вместимости с toddler-зоной и комплектом горок.",
          description:
            "Высокая soft-play башня для больших семейных центров с несколькими маршрутами, горками, элементами для лазания и встроенной зоной для малышей.",
          ageRange: "1–10",
          priceLabel: "€35,000–€90,000",
          size: "120–600 м²",
          capacity: "100–300 детей",
          material: "HDPE + пена",
          leadTime: "12–16 недель",
        },
        pl: {
          name: "MegaTower 5000",
          shortDescription: "Wielopoziomowa wieża o dużej pojemności ze strefą dla maluchów i pakietem zjeżdżalni.",
          description:
            "Wysoka wieża soft-play dla dużych centrów rodzinnych z wieloma trasami, zjeżdżalniami, wyzwaniami wspinaczkowymi i zintegrowaną strefą dla maluchów.",
          ageRange: "1–10",
          priceLabel: "€35,000–€90,000",
          size: "120–600 m²",
          capacity: "100–300 dzieci",
          material: "HDPE + pianka",
          leadTime: "12–16 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "naturepark-classic",
      categorySlug: "outdoor-parks",
      sortOrder: 3,
      featured: true,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          alt: "Outdoor playground in a park",
        },
      ]),
      certifications: sharedBadges(["EN 1176", "FSC Wood", "Outdoor"]),
      locales: {
        en: {
          name: "NaturePark Classic",
          shortDescription: "Classic FSC-certified outdoor playground with swings, slides, and climbing.",
          description:
            "A balanced outdoor playground system with wood aesthetics, steel reinforcement, slides, swings, and monkey-bar movement paths.",
          ageRange: "2–12",
          priceLabel: "€8,000–€25,000",
          size: "40–200 m²",
          capacity: "20–60 children",
          material: "FSC spruce + steel",
          leadTime: "6–10 weeks",
        },
        uk: {
          name: "NaturePark Classic",
          shortDescription: "Класичний сертифікований FSC вуличний майданчик з гойдалками, гірками та лазінням.",
          description:
            "Збалансована зовнішня система майданчика з дерев'яною естетикою, сталевим підсиленням, гірками, гойдалками та маршрутами для руху.",
          ageRange: "2–12",
          priceLabel: "€8,000–€25,000",
          size: "40–200 м²",
          capacity: "20–60 дітей",
          material: "FSC смерека + сталь",
          leadTime: "6–10 тижнів",
        },
        ru: {
          name: "NaturePark Classic",
          shortDescription: "Классическая сертифицированная FSC уличная площадка с качелями, горками и лазанием.",
          description:
            "Сбалансированная уличная система с древесной эстетикой, стальным усилением, горками, качелями и маршрутами для движения.",
          ageRange: "2–12",
          priceLabel: "€8,000–€25,000",
          size: "40–200 м²",
          capacity: "20–60 детей",
          material: "FSC ель + сталь",
          leadTime: "6–10 недель",
        },
        pl: {
          name: "NaturePark Classic",
          shortDescription: "Klasyczny certyfikowany plac zabaw FSC z huśtawkami, zjeżdżalniami i wspinaniem.",
          description:
            "Zrównoważony system zewnętrzny o drewnianej estetyce, stalowym wzmocnieniu, zjeżdżalniach, huśtawkach i ścieżkach ruchowych.",
          ageRange: "2–12",
          priceLabel: "€8,000–€25,000",
          size: "40–200 m²",
          capacity: "20–60 dzieci",
          material: "FSC świerk + stal",
          leadTime: "6–10 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "homehaven-mini",
      categorySlug: "home-residential",
      sortOrder: 4,
      featured: false,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1777613074050-e62980d065fd?w=900&h=700&fit=crop&auto=format",
          alt: "Compact backyard playground",
        },
      ]),
      certifications: sharedBadges(["EN 71", "Garden", "Self-Assembly"]),
      locales: {
        en: {
          name: "HomeHaven Mini",
          shortDescription: "Compact timber backyard playground with slide, swings, and rope wall.",
          description:
            "A private-home play set built for quick installation and safe daily play in gardens, courtyards, and hospitality villas.",
          ageRange: "2–10",
          priceLabel: "€1,200–€4,500",
          size: "4×3 m – 8×5 m",
          capacity: "3–8 children",
          material: "Impregnated pine",
          leadTime: "3–5 weeks",
        },
        uk: {
          name: "HomeHaven Mini",
          shortDescription: "Компактний дерев'яний майданчик для двору з гіркою, гойдалками та канатною стіною.",
          description:
            "Приватний ігровий комплект, розрахований на швидкий монтаж і безпечну щоденну гру у садах, подвір'ях та гостьових віллах.",
          ageRange: "2–10",
          priceLabel: "€1,200–€4,500",
          size: "4×3 м – 8×5 м",
          capacity: "3–8 дітей",
          material: "Імпрегнована сосна",
          leadTime: "3–5 тижнів",
        },
        ru: {
          name: "HomeHaven Mini",
          shortDescription: "Компактная деревянная площадка для двора с горкой, качелями и канатной стеной.",
          description:
            "Частный игровой комплект для быстрого монтажа и безопасной ежедневной игры в садах, дворах и виллах.",
          ageRange: "2–10",
          priceLabel: "€1,200–€4,500",
          size: "4×3 м – 8×5 м",
          capacity: "3–8 детей",
          material: "Импрегнированная сосна",
          leadTime: "3–5 недель",
        },
        pl: {
          name: "HomeHaven Mini",
          shortDescription: "Kompaktowy drewniany plac zabaw do ogrodu ze zjeżdżalnią, huśtawkami i ścianą linową.",
          description:
            "Prywatny zestaw zabawowy zaprojektowany z myślą o szybkim montażu i bezpiecznej codziennej zabawie w ogrodach oraz na dziedzińcach.",
          ageRange: "2–10",
          priceLabel: "€1,200–€4,500",
          size: "4×3 m – 8×5 m",
          capacity: "3–8 dzieci",
          material: "Impregnowana sosna",
          leadTime: "3–5 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "jumpzone-arena",
      categorySlug: "jump-zones",
      sortOrder: 5,
      featured: false,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1751235640841-d8d1035a80f0?w=900&h=700&fit=crop&auto=format",
          alt: "Commercial trampoline arena",
        },
      ]),
      certifications: sharedBadges(["EN 13219", "CE", "Commercial"]),
      locales: {
        en: {
          name: "JumpZone Arena",
          shortDescription: "Full-scale trampoline arena for high-energy entertainment centers.",
          description:
            "Commercial jump arena with interconnected trampolines, wall jumps, active courts, and modular support zones.",
          ageRange: "4–16",
          priceLabel: "€40,000–€120,000",
          size: "300–1 500 m²",
          capacity: "80–250 persons",
          material: "Galvanised steel + springs",
          leadTime: "14–18 weeks",
        },
        uk: {
          name: "JumpZone Arena",
          shortDescription: "Повноформатна батутна арена для енергійних розважальних центрів.",
          description:
            "Комерційна jump-арена зі з'єднаними батутами, стінками для стрибків, активними кортами та модульними додатковими зонами.",
          ageRange: "4–16",
          priceLabel: "€40,000–€120,000",
          size: "300–1 500 м²",
          capacity: "80–250 осіб",
          material: "Оцинкована сталь + пружини",
          leadTime: "14–18 тижнів",
        },
        ru: {
          name: "JumpZone Arena",
          shortDescription: "Полноформатная батутная арена для энергичных развлекательных центров.",
          description:
            "Коммерческая jump-арена с объединёнными батутами, стенками для прыжков, активными кортами и модульными дополнительными зонами.",
          ageRange: "4–16",
          priceLabel: "€40,000–€120,000",
          size: "300–1 500 м²",
          capacity: "80–250 человек",
          material: "Оцинкованная сталь + пружины",
          leadTime: "14–18 недель",
        },
        pl: {
          name: "JumpZone Arena",
          shortDescription: "Pełnowymiarowa arena trampolinowa dla dynamicznych centrów rozrywki.",
          description:
            "Komercyjna arena jump z połączonymi trampolinami, ścianami do skoków, aktywnymi boiskami i modułowymi strefami wsparcia.",
          ageRange: "4–16",
          priceLabel: "€40,000–€120,000",
          size: "300–1 500 m²",
          capacity: "80–250 osób",
          material: "Stal ocynkowana + sprężyny",
          leadTime: "14–18 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "boulderwall-v3",
      categorySlug: "climbing-adventure",
      sortOrder: 6,
      featured: true,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=900&h=700&fit=crop&auto=format",
          alt: "Indoor colorful climbing wall",
        },
      ]),
      certifications: sharedBadges(["EN 12572", "CE", "Indoor/Outdoor"]),
      locales: {
        en: {
          name: "BoulderWall V3",
          shortDescription: "Commercial bouldering wall with color-coded routes and crash mat.",
          description:
            "A flexible climbing product for parks and family centers, with interchangeable holds and configurable visual identity.",
          ageRange: "4–16",
          priceLabel: "€4,000–€18,000",
          size: "10–100 m²",
          capacity: "5–30 climbers",
          material: "Plywood + holds",
          leadTime: "4–8 weeks",
        },
        uk: {
          name: "BoulderWall V3",
          shortDescription: "Комерційна боулдерингова стіна з кольоровими трасами та матом.",
          description:
            "Гнучкий продукт для парків і сімейних центрів зі змінними зачепами та налаштовуваною візуальною ідентикою.",
          ageRange: "4–16",
          priceLabel: "€4,000–€18,000",
          size: "10–100 м²",
          capacity: "5–30 скелелазів",
          material: "Фанера + зачепи",
          leadTime: "4–8 тижнів",
        },
        ru: {
          name: "BoulderWall V3",
          shortDescription: "Коммерческая боулдеринговая стена с цветными трассами и матом.",
          description:
            "Гибкий продукт для парков и семейных центров со сменными зацепами и настраиваемой визуальной айдентикой.",
          ageRange: "4–16",
          priceLabel: "€4,000–€18,000",
          size: "10–100 м²",
          capacity: "5–30 скалолазов",
          material: "Фанера + зацепы",
          leadTime: "4–8 недель",
        },
        pl: {
          name: "BoulderWall V3",
          shortDescription: "Komercyjna ściana bulderowa z kolorowymi trasami i materacem.",
          description:
            "Elastyczny produkt do parków i centrów rodzinnych z wymiennymi chwytami i konfigurowalną identyfikacją wizualną.",
          ageRange: "4–16",
          priceLabel: "€4,000–€18,000",
          size: "10–100 m²",
          capacity: "5–30 wspinaczy",
          material: "Sklejka + chwyty",
          leadTime: "4–8 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "ropenet-adventure",
      categorySlug: "climbing-adventure",
      sortOrder: 7,
      featured: false,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1706688142585-bbbf4a5fce26?w=900&h=700&fit=crop&auto=format",
          alt: "Rope play and climbing structure",
        },
      ]),
      certifications: sharedBadges(["EN 1176", "CE", "Indoor/Outdoor"]),
      locales: {
        en: {
          name: "RopeNet Adventure",
          shortDescription: "Rope structures with bridges, crossings, and active adventure movement.",
          description:
            "A scalable rope-based attraction line for indoor and outdoor projects that mixes walking, climbing, and balance challenges.",
          ageRange: "3–14",
          priceLabel: "€6,000–€30,000",
          size: "20–200 m²",
          capacity: "15–60 children",
          material: "Galvanised wire + HDPE",
          leadTime: "6–10 weeks",
        },
        uk: {
          name: "RopeNet Adventure",
          shortDescription: "Мотузкові конструкції з мостами, переходами та активним пригодницьким рухом.",
          description:
            "Масштабована лінійка мотузкових атракціонів для зовнішніх і внутрішніх проєктів, що поєднує ходьбу, лазіння та баланс.",
          ageRange: "3–14",
          priceLabel: "€6,000–€30,000",
          size: "20–200 м²",
          capacity: "15–60 дітей",
          material: "Оцинкований дріт + HDPE",
          leadTime: "6–10 тижнів",
        },
        ru: {
          name: "RopeNet Adventure",
          shortDescription: "Канатные конструкции с мостами, переходами и активным приключенческим движением.",
          description:
            "Масштабируемая линейка канатных аттракционов для уличных и внутренних проектов, сочетающая ходьбу, лазание и баланс.",
          ageRange: "3–14",
          priceLabel: "€6,000–€30,000",
          size: "20–200 м²",
          capacity: "15–60 детей",
          material: "Оцинкованный трос + HDPE",
          leadTime: "6–10 недель",
        },
        pl: {
          name: "RopeNet Adventure",
          shortDescription: "Konstrukcje linowe z mostami, przejściami i aktywnym ruchem przygodowym.",
          description:
            "Skalowalna linia atrakcji linowych do projektów zewnętrznych i wewnętrznych, łącząca chodzenie, wspinanie i balans.",
          ageRange: "3–14",
          priceLabel: "€6,000–€30,000",
          size: "20–200 m²",
          capacity: "15–60 dzieci",
          material: "Drut ocynkowany + HDPE",
          leadTime: "6–10 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "splashpit-xl",
      categorySlug: "soft-play",
      sortOrder: 8,
      featured: true,
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          alt: "Ball pit and soft play attraction",
        },
      ]),
      certifications: sharedBadges(["EN 71", "CE", "Sanitation System"]),
      locales: {
        en: {
          name: "SplashPit XL",
          shortDescription: "Commercial dry pool with slides and sanitation-friendly ball handling.",
          description:
            "A large dry-pool attraction designed for repeat commercial use with integrated slide package and maintenance-conscious detailing.",
          ageRange: "1–8",
          priceLabel: "€8,000–€28,000",
          size: "20–120 m²",
          capacity: "20–80 children",
          material: "HDPE + PP balls",
          leadTime: "5–9 weeks",
        },
        uk: {
          name: "SplashPit XL",
          shortDescription: "Комерційний сухий басейн з гірками та рішеннями для гігієнічного обслуговування.",
          description:
            "Великий атракціон сухого басейну для регулярного комерційного використання з інтегрованим пакетом гірок і продуманим сервісним доглядом.",
          ageRange: "1–8",
          priceLabel: "€8,000–€28,000",
          size: "20–120 м²",
          capacity: "20–80 дітей",
          material: "HDPE + PP кульки",
          leadTime: "5–9 тижнів",
        },
        ru: {
          name: "SplashPit XL",
          shortDescription: "Коммерческий сухой бассейн с горками и решениями для гигиеничного обслуживания.",
          description:
            "Большой аттракцион сухого бассейна для регулярного коммерческого использования с интегрированным пакетом горок и продуманным сервисом.",
          ageRange: "1–8",
          priceLabel: "€8,000–€28,000",
          size: "20–120 м²",
          capacity: "20–80 детей",
          material: "HDPE + PP шарики",
          leadTime: "5–9 недель",
        },
        pl: {
          name: "SplashPit XL",
          shortDescription: "Komercyjny suchy basen ze zjeżdżalniami i rozwiązaniami higienicznymi.",
          description:
            "Duża atrakcja suchego basenu do intensywnego użytku komercyjnego z pakietem zjeżdżalni i detalami ułatwiającymi utrzymanie.",
          ageRange: "1–8",
          priceLabel: "€8,000–€28,000",
          size: "20–120 m²",
          capacity: "20–80 dzieci",
          material: "HDPE + kulki PP",
          leadTime: "5–9 tygodni",
        },
      } satisfies Localized<Record<string, unknown>>,
    },
  ],
  projects: [
    {
      slug: "funworld-hamburg",
      sortOrder: 1,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=700&h=500&fit=crop&auto=format",
      locales: {
        en: { title: "FunWorld Hamburg", subtitle: "Indoor megapark for a flagship family destination.", projectType: "Indoor Megapark" },
        uk: { title: "FunWorld Hamburg", subtitle: "Критий мегапарк для флагманського сімейного центру.", projectType: "Критий мегапарк" },
        ru: { title: "FunWorld Hamburg", subtitle: "Крытый мегапарк для флагманского семейного центра.", projectType: "Крытый мегапарк" },
        pl: { title: "FunWorld Hamburg", subtitle: "Kryty megapark dla flagowego centrum rodzinnego.", projectType: "Kryty megapark" },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "poznan-city-park",
      sortOrder: 2,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?w=700&h=500&fit=crop&auto=format",
      locales: {
        en: { title: "Poznań City Park", subtitle: "Owl-themed outdoor playground with natural materials.", projectType: "Outdoor Playground" },
        uk: { title: "Poznań City Park", subtitle: "Вуличний майданчик у тематиці сови з природними матеріалами.", projectType: "Вуличний майданчик" },
        ru: { title: "Poznań City Park", subtitle: "Уличная площадка в тематике совы с натуральными материалами.", projectType: "Уличная площадка" },
        pl: { title: "Poznań City Park", subtitle: "Plac zabaw w motywie sowy z naturalnymi materiałami.", projectType: "Plac zabaw" },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "kidspace-dubai",
      sortOrder: 3,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1630139026564-4a2bf5670879?w=700&h=500&fit=crop&auto=format",
      locales: {
        en: { title: "KidSpace Dubai", subtitle: "Premium indoor attraction tailored to a hospitality venue.", projectType: "Premium Indoor" },
        uk: { title: "KidSpace Dubai", subtitle: "Преміальний критий атракціон для готельно-розважальної локації.", projectType: "Преміальний indoor" },
        ru: { title: "KidSpace Dubai", subtitle: "Премиальный крытый аттракцион для гостинично-развлекательной площадки.", projectType: "Премиальный indoor" },
        pl: { title: "KidSpace Dubai", subtitle: "Premiumowa atrakcja kryta dla obiektu hospitality.", projectType: "Premium indoor" },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "leapfrog-stockholm",
      sortOrder: 4,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=700&h=500&fit=crop&auto=format",
      locales: {
        en: { title: "Leapfrog Stockholm", subtitle: "Soft play zone with color-led toddler programming.", projectType: "Soft Play Zone" },
        uk: { title: "Leapfrog Stockholm", subtitle: "Soft-play зона з кольоровим програмуванням для малюків.", projectType: "Soft-play зона" },
        ru: { title: "Leapfrog Stockholm", subtitle: "Soft-play зона с цветовым зонированием для малышей.", projectType: "Soft-play зона" },
        pl: { title: "Leapfrog Stockholm", subtitle: "Strefa soft play z kolorystycznym programem dla maluchów.", projectType: "Strefa soft play" },
      } satisfies Localized<Record<string, unknown>>,
    },
  ],
  testimonials: [
    {
      sortOrder: 1,
      featured: true,
      rating: 5,
      locales: {
        en: { quote: "Kidsfera delivered our indoor park in 11 weeks with impressive quality control.", author: "Marta Kowalska", role: "Owner, KidZone Wrocław" },
        uk: { quote: "Kidsfera здали наш критий парк за 11 тижнів із дуже високим контролем якості.", author: "Марта Ковальська", role: "Власниця, KidZone Wrocław" },
        ru: { quote: "Kidsfera сдали наш крытый парк за 11 недель с очень высоким контролем качества.", author: "Марта Ковальска", role: "Владелица, KidZone Wrocław" },
        pl: { quote: "Kidsfera oddała nasz park kryty w 11 tygodni z imponującą kontrolą jakości.", author: "Marta Kowalska", role: "Właścicielka, KidZone Wrocław" },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      sortOrder: 2,
      featured: true,
      rating: 5,
      locales: {
        en: { quote: "The custom labyrinth became our strongest footfall driver in the mall.", author: "Stefan Brauer", role: "Retail Director, Stadtpark GmbH" },
        uk: { quote: "Індивідуальний лабіринт став найсильнішим драйвером трафіку у нашому молі.", author: "Штефан Брауер", role: "Retail Director, Stadtpark GmbH" },
        ru: { quote: "Индивидуальный лабиринт стал самым сильным драйвером трафика в нашем молле.", author: "Штефан Брауер", role: "Retail Director, Stadtpark GmbH" },
        pl: { quote: "Indywidualny labirynt stał się najmocniejszym generatorem ruchu w naszej galerii.", author: "Stefan Brauer", role: "Retail Director, Stadtpark GmbH" },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      sortOrder: 3,
      featured: true,
      rating: 5,
      locales: {
        en: { quote: "Every element passed the municipal safety review on the first attempt.", author: "Agnieszka Nowak", role: "Parks Manager, Gdańsk" },
        uk: { quote: "Кожен елемент пройшов муніципальну перевірку безпеки з першої спроби.", author: "Агнєшка Новак", role: "Менеджерка парків, Гданськ" },
        ru: { quote: "Каждый элемент прошёл муниципальную проверку безопасности с первой попытки.", author: "Агнешка Новак", role: "Менеджер парков, Гданьск" },
        pl: { quote: "Każdy element przeszedł miejski przegląd bezpieczeństwa za pierwszym podejściem.", author: "Agnieszka Nowak", role: "Kierownik parków, Gdańsk" },
      } satisfies Localized<Record<string, unknown>>,
    },
  ],
  languages,
} as const;
