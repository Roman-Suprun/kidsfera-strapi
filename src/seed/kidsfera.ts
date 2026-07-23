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

const sharedLocale = <T,>(value: T): Localized<T> => ({
  en: value,
  uk: value,
  ru: value,
  pl: value,
});

const footerGroup = (
  title: string,
  items: Array<string | { label: string; href?: string }>,
) => ({
  title,
  items: items.map((item) => (typeof item === 'string' ? { label: item } : item)),
});

const footerBadges = () =>
  ['EN 1176', 'CE', 'ISO 9001', 'ASTM F1292'].map((label) => ({ label }));

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
      showEnglish: true,
      showUkrainian: true,
      showRussian: true,
      showPolish: true,
      navCategoriesLabel: "Categories",
      navCatalogLabel: "Catalog",
      navProjectsLabel: "Projects",
      navProcessLabel: "Process",
      navAboutLabel: "About",
      navBlogLabel: "Blog",
      navContactLabel: "Contact",
      navCtaLabel: "Get a Quote",
      footerDescription:
        "Kidsfera designs and manufactures children's attraction systems for malls, parks, family centres, and private clients.",
      footerCopyright: "© 2026 Kidsfera. All rights reserved.",
      businessHoursLabel: "Working Hours",
      businessHoursPrimary: "Mon–Fri: 9:00–18:00",
      businessHoursSecondary: "Sat: 10:00–15:00 · Sun: closed",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ul. Fabryczna 12, Poznań, Poland",
      socialLinks: [
        { label: "Facebook", href: "https://facebook.com/kidsfera", platform: "facebook" },
        { label: "Instagram", href: "https://instagram.com/kidsfera", platform: "instagram" },
        { label: "LinkedIn", href: "https://linkedin.com/company/kidsfera", platform: "linkedin" },
        { label: "YouTube", href: "https://youtube.com/@kidsfera", platform: "youtube" },
      ],
      footerLinkGroups: [
        footerGroup('Products', ['Labyrinths', 'Playgrounds', 'Climbing Walls', 'Ball Pits']),
        footerGroup('Company', ['About Us', 'Our Factory', 'Projects', 'Certifications']),
        footerGroup('Legal', [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms of Sale', href: '/delivery-payment' },
          'EN 1176 Docs',
          { label: 'GDPR', href: '/gdpr' },
        ]),
      ],
      footerBadges: footerBadges(),
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
      showEnglish: true,
      showUkrainian: true,
      showRussian: true,
      showPolish: true,
      navCategoriesLabel: "Категорії",
      navCatalogLabel: "Каталог",
      navProjectsLabel: "Проєкти",
      navProcessLabel: "Процес",
      navAboutLabel: "Про нас",
      navBlogLabel: "Блог",
      navContactLabel: "Контакт",
      navCtaLabel: "Отримати пропозицію",
      footerDescription:
        "Kidsfera проєктує та виробляє дитячі атракціони для торгових центрів, парків, сімейних центрів і приватних клієнтів.",
      footerCopyright: "© 2026 Kidsfera. Всі права захищені.",
      businessHoursLabel: "Графік роботи",
      businessHoursPrimary: "Пн–Пт: 9:00–18:00",
      businessHoursSecondary: "Сб: 10:00–15:00 · Нд: вихідний",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "вул. Fabryczna 12, Познань, Польща",
      socialLinks: [
        { label: "Facebook", href: "https://facebook.com/kidsfera", platform: "facebook" },
        { label: "Instagram", href: "https://instagram.com/kidsfera", platform: "instagram" },
        { label: "LinkedIn", href: "https://linkedin.com/company/kidsfera", platform: "linkedin" },
        { label: "YouTube", href: "https://youtube.com/@kidsfera", platform: "youtube" },
      ],
      footerLinkGroups: [
        footerGroup('Продукція', ['Лабіринти', 'Майданчики', 'Скелодроми', 'Сухі басейни']),
        footerGroup('Компанія', ['Про нас', 'Наш завод', 'Проєкти', 'Сертифікати']),
        footerGroup('Документи', [
          { label: 'Конфіденційність', href: '/privacy-policy' },
          { label: 'Умови продажу', href: '/delivery-payment' },
          'EN 1176',
          { label: 'GDPR', href: '/gdpr' },
        ]),
      ],
      footerBadges: footerBadges(),
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
      showEnglish: true,
      showUkrainian: true,
      showRussian: true,
      showPolish: true,
      navCategoriesLabel: "Категории",
      navCatalogLabel: "Каталог",
      navProjectsLabel: "Проекты",
      navProcessLabel: "Процесс",
      navAboutLabel: "О нас",
      navBlogLabel: "Блог",
      navContactLabel: "Контакт",
      navCtaLabel: "Получить предложение",
      footerDescription:
        "Kidsfera проектирует и производит детские аттракционы для торговых центров, парков, семейных центров и частных клиентов.",
      footerCopyright: "© 2026 Kidsfera. Все права защищены.",
      businessHoursLabel: "График работы",
      businessHoursPrimary: "Пн–Пт: 9:00–18:00",
      businessHoursSecondary: "Сб: 10:00–15:00 · Вс: выходной",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ул. Fabryczna 12, Познань, Польша",
      socialLinks: [
        { label: "Facebook", href: "https://facebook.com/kidsfera", platform: "facebook" },
        { label: "Instagram", href: "https://instagram.com/kidsfera", platform: "instagram" },
        { label: "LinkedIn", href: "https://linkedin.com/company/kidsfera", platform: "linkedin" },
        { label: "YouTube", href: "https://youtube.com/@kidsfera", platform: "youtube" },
      ],
      footerLinkGroups: [
        footerGroup('Продукция', ['Лабиринты', 'Площадки', 'Скалодромы', 'Сухие бассейны']),
        footerGroup('Компания', ['О нас', 'Наш завод', 'Проекты', 'Сертификаты']),
        footerGroup('Документы', [
          { label: 'Конфиденциальность', href: '/privacy-policy' },
          { label: 'Условия продажи', href: '/delivery-payment' },
          'EN 1176',
          { label: 'GDPR', href: '/gdpr' },
        ]),
      ],
      footerBadges: footerBadges(),
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
      showEnglish: true,
      showUkrainian: true,
      showRussian: true,
      showPolish: true,
      navCategoriesLabel: "Kategorie",
      navCatalogLabel: "Katalog",
      navProjectsLabel: "Realizacje",
      navProcessLabel: "Proces",
      navAboutLabel: "O nas",
      navBlogLabel: "Blog",
      navContactLabel: "Kontakt",
      navCtaLabel: "Zapytaj o ofertę",
      footerDescription:
        "Kidsfera projektuje i produkuje atrakcje dla dzieci do galerii handlowych, parków, centrów rodzinnych i klientów prywatnych.",
      footerCopyright: "© 2026 Kidsfera. Wszelkie prawa zastrzeżone.",
      businessHoursLabel: "Godziny pracy",
      businessHoursPrimary: "Pon–Pt: 9:00–18:00",
      businessHoursSecondary: "Sob: 10:00–15:00 · Niedz.: zamknięte",
      contactEmail: "hello@kidsfera.example",
      contactPhone: "+48 61 234 5678",
      contactAddress: "ul. Fabryczna 12, Poznań, Polska",
      socialLinks: [
        { label: "Facebook", href: "https://facebook.com/kidsfera", platform: "facebook" },
        { label: "Instagram", href: "https://instagram.com/kidsfera", platform: "instagram" },
        { label: "LinkedIn", href: "https://linkedin.com/company/kidsfera", platform: "linkedin" },
        { label: "YouTube", href: "https://youtube.com/@kidsfera", platform: "youtube" },
      ],
      footerLinkGroups: [
        footerGroup('Produkty', ['Labirynty', 'Place zabaw', 'Ścianki', 'Suche baseny']),
        footerGroup('Firma', ['O nas', 'Nasza fabryka', 'Realizacje', 'Certyfikaty']),
        footerGroup('Dokumenty', [
          { label: 'Polityka prywatności', href: '/privacy-policy' },
          { label: 'Warunki sprzedaży', href: '/delivery-payment' },
          'EN 1176',
          { label: 'RODO', href: '/gdpr' },
        ]),
      ],
      footerBadges: footerBadges(),
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
  aboutPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | About Us",
        metaDescription:
          "Meet the team, factory, values, and certifications behind Kidsfera's children's attraction systems.",
        canonicalPath: "/en/about",
      },
      heroEyebrow: "About Us",
      heroTitle: "We build\nchildren's dreams",
      heroDescription:
        "Since 2006 Kidsfera designs and manufactures attractions that inspire children to explore, move, and imagine.",
      heroImageUrl:
        "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600&h=900&fit=crop&auto=format",
      heroStats: [
        { value: "840+", label: "Projects" },
        { value: "32", label: "Countries" },
        { value: "18", label: "Years" },
        { value: "2.4M", label: "Kids Daily" },
      ],
      storyEyebrow: "Our Story",
      storyTitle: "From a garage to a\n14,000 m² factory",
      storyParagraph1:
        "In 2006, Jan Kowalski assembled the first labyrinth in a rented garage in Poznań. Clients were queuing before the paint dried. A year later the first workshop opened — 800 m². Five years later came the first international contract.",
      storyParagraph2:
        "Today our 14,000 m² factory produces over 80 projects per year — from backyard playsets to three-storey entertainment megaparks. Everything is designed, welded, painted, and tested under one roof in Poland.",
      milestones: [
        { year: "2006", text: "First labyrinth assembled in a Poznań garage" },
        { year: "2009", text: "100th completed project" },
        { year: "2012", text: "Own factory opens (5,000 m²)" },
        { year: "2016", text: "ISO 9001 certification" },
        { year: "2018", text: "Factory expands to 14,000 m²" },
        { year: "2021", text: "500+ projects, entry into Asian markets" },
        { year: "2024", text: "840+ projects across 32 countries" },
      ],
      valuesEyebrow: "Our Values",
      valuesTitle: "Why clients trust us",
      values: [
        {
          title: "Safety First",
          description:
            "Every component meets EN 1176, ASTM, and CE. Independent audit is mandatory before every shipment.",
          icon: "🛡️",
          theme: "orange",
        },
        {
          title: "Hand-Crafted",
          description:
            "Welding, coating, installation — no outsourcing. 280 craftspeople under one roof.",
          icon: "🔨",
          theme: "blue",
        },
        {
          title: "Built to Last",
          description:
            "HDPE does not rot, powder coat does not peel, steel is galvanised. 10–15 year warranty depending on series.",
          icon: "⏳",
          theme: "yellow",
        },
        {
          title: "On-Time Delivery",
          description:
            "8 weeks from design to shipment for standard configurations. We have never missed an opening date.",
          icon: "🚀",
          theme: "green",
        },
      ],
      factoryEyebrow: "Our Factory",
      factoryTitle: "The heart of Kidsfera",
      factoryDescription:
        "Poznań, ul. Fabryczna 12. 14,000 m², 280 employees, 6 production lines. This is where every labyrinth, climbing wall, and trampoline arena we sell is born.",
      factoryImageUrl:
        "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=900&h=700&fit=crop&auto=format",
      factoryLocationLabel: "Poznań, Poland",
      factoryAddress: "ul. Fabryczna 12",
      factoryStats: [
        { value: "14,000 m²", label: "Factory floor" },
        { value: "280", label: "Employees" },
        { value: "6", label: "Production lines" },
        { value: "80+", label: "Projects per year" },
      ],
      showTeamSection: true,
      teamEyebrow: "The Team",
      teamTitle: "The people behind Kidsfera",
      teamMembers: [
        {
          name: "Jan Kowalski",
          role: "Founder & CEO",
          bio: "Mechanical engineer, father of three. Built the first labyrinth by hand in 2006.",
          imageUrl:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Marta Nowak",
          role: "Head of Design",
          bio: "Architect with 18 years of experience. Specialises in children's spaces and neuro-design.",
          imageUrl:
            "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Piotr Wiśniewski",
          role: "Production Director",
          bio: "Has run the factory since 2011. Under his leadership output has quadrupled.",
          imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Anna Dąbrowska",
          role: "International Sales",
          bio: "Covers 32 countries. Has conducted over 400 negotiations across 5 continents.",
          imageUrl:
            "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=400&h=400&fit=crop&crop=face&auto=format",
        },
      ],
      showCertificationsSection: true,
      certificationsEyebrow: "Certifications",
      certificationsTitle: "Verified by independent bodies",
      certifications: [
        { label: "EN 1176 — Playground equipment and surfacing" },
        { label: "EN 13219 — Trampolining equipment" },
        { label: "EN 12572 — Artificial climbing structures" },
        { label: "ASTM F1292 — Impact attenuation of surfacing" },
        { label: "CE — EU conformity marking" },
        { label: "ISO 9001 — Quality management system" },
      ],
      safetyCalloutIcon: "🏆",
      safetyCalloutTitle: "18 years of zero\nsafety incidents",
      safetyCalloutDescription:
        "Every product is independently tested before shipment. No Kidsfera installation has ever been involved in a recordable safety incident since our founding in 2006.",
      safetyBadges: [
        { label: "EN 1176" },
        { label: "CE" },
        { label: "ISO 9001" },
        { label: "ASTM" },
        { label: "EN 13219" },
        { label: "EN 12572" },
      ],
      ctaTitle: "Ready to work\nwith us?",
      ctaDescription:
        "Contact our team and get a tailored proposal for your project within 24 hours.",
      ctaPrimaryLabel: "Get a Quote",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Browse Catalog",
      ctaSecondaryHref: "/catalog",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Про нас",
        metaDescription:
          "Познайомтеся з командою, заводом, цінностями та сертифікаціями Kidsfera.",
        canonicalPath: "/uk/about",
      },
      heroEyebrow: "Про нас",
      heroTitle: "Ми будуємо\nмрії дітей",
      heroDescription:
        "З 2006 року Kidsfera проєктує та виробляє атракціони, що надихають дітей досліджувати, рухатись та уявляти.",
      heroImageUrl:
        "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600&h=900&fit=crop&auto=format",
      heroStats: [
        { value: "840+", label: "Проєктів" },
        { value: "32", label: "Країни" },
        { value: "18", label: "Років" },
        { value: "2.4M", label: "Дітей щодня" },
      ],
      storyEyebrow: "Наша історія",
      storyTitle: "Від гаража до\n14 000 м² заводу",
      storyParagraph1:
        "У 2006 році Jan Kowalski зібрав перший лабіринт у орендованому гаражі в Познані. Замовники стояли в черзі ще до того, як фарба висохла. Через рік відкрився перший цех — 800 м². Через п'ять років з'явився перший міжнародний контракт.",
      storyParagraph2:
        "Сьогодні наш завод площею 14 000 м² виробляє понад 80 проєктів на рік — від домашніх майданчиків до триповерхових розважальних комплексів. Усе проєктується, зварюється, фарбується та тестується під одним дахом у Польщі.",
      milestones: [
        { year: "2006", text: "Перший лабіринт зібраний у гаражі в Познані" },
        { year: "2009", text: "100-й реалізований проєкт" },
        { year: "2012", text: "Відкриття власного заводу (5 000 м²)" },
        { year: "2016", text: "Сертифікація ISO 9001" },
        { year: "2018", text: "Розширення заводу до 14 000 м²" },
        { year: "2021", text: "500+ проєктів, вихід на ринки Азії" },
        { year: "2024", text: "840+ проєктів у 32 країнах" },
      ],
      valuesEyebrow: "Наші цінності",
      valuesTitle: "Чому нам довіряють",
      values: [
        {
          title: "Безпека передусім",
          description:
            "Кожна деталь відповідає EN 1176, ASTM та CE. Незалежний аудит обов'язковий перед кожним відвантаженням.",
          icon: "🛡️",
          theme: "orange",
        },
        {
          title: "Ручна праця",
          description:
            "Зварювання, покриття, монтаж — ніякого аутсорсингу. 280 майстрів на одному заводі.",
          icon: "🔨",
          theme: "blue",
        },
        {
          title: "Довговічність",
          description:
            "HDPE не гниє, порошкова фарба не облазить, сталь оцинкована. Гарантія 10–15 років залежно від серії.",
          icon: "⏳",
          theme: "yellow",
        },
        {
          title: "Дотримання строків",
          description:
            "8 тижнів від дизайну до відвантаження для стандартних конфігурацій. Ми ніколи не зривали дату відкриття.",
          icon: "🚀",
          theme: "green",
        },
      ],
      factoryEyebrow: "Наш завод",
      factoryTitle: "Серце Kidsfera",
      factoryDescription:
        "Познань, вул. Fabryczna 12. 14 000 м², 280 співробітників, 6 виробничих ліній. Тут народжується кожен лабіринт, скелодром та батутна арена, яку ми продаємо.",
      factoryImageUrl:
        "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=900&h=700&fit=crop&auto=format",
      factoryLocationLabel: "Познань, Польща",
      factoryAddress: "вул. Fabryczna 12",
      factoryStats: [
        { value: "14 000 м²", label: "Площа заводу" },
        { value: "280", label: "Співробітників" },
        { value: "6", label: "Виробничих ліній" },
        { value: "80+", label: "Проєктів на рік" },
      ],
      showTeamSection: true,
      teamEyebrow: "Команда",
      teamTitle: "Люди за Kidsfera",
      teamMembers: [
        {
          name: "Jan Kowalski",
          role: "Засновник та CEO",
          bio: "Інженер-механік, батько трьох дітей. Зібрав перший лабіринт власноруч у 2006 році.",
          imageUrl:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Marta Nowak",
          role: "Директор дизайну",
          bio: "Архітектор з 18-річним досвідом. Спеціалізується на дитячих просторах та нейродизайні.",
          imageUrl:
            "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Piotr Wiśniewski",
          role: "Директор виробництва",
          bio: "Керує заводом з 2011 року. Під його керівництвом продуктивність зросла вчетверо.",
          imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Anna Dąbrowska",
          role: "Міжнародні продажі",
          bio: "Відповідає за 32 країни. Провела понад 400 переговорів на 5 континентах.",
          imageUrl:
            "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=400&h=400&fit=crop&crop=face&auto=format",
        },
      ],
      showCertificationsSection: true,
      certificationsEyebrow: "Сертифікати",
      certificationsTitle: "Перевірено незалежними органами",
      certifications: [
        { label: "EN 1176 — Обладнання та покриття дитячих майданчиків" },
        { label: "EN 13219 — Батутне обладнання" },
        { label: "EN 12572 — Штучні скельні конструкції" },
        { label: "ASTM F1292 — Ударне поглинання покриттів" },
        { label: "CE — Відповідність стандартам ЄС" },
        { label: "ISO 9001 — Управління якістю" },
      ],
      safetyCalloutIcon: "🏆",
      safetyCalloutTitle: "18 років без\nінцидентів безпеки",
      safetyCalloutDescription:
        "Кожен продукт проходить незалежні випробування перед відвантаженням. Від моменту заснування у 2006 році жоден об'єкт Kidsfera не мав зафіксованого інциденту безпеки.",
      safetyBadges: [
        { label: "EN 1176" },
        { label: "CE" },
        { label: "ISO 9001" },
        { label: "ASTM" },
        { label: "EN 13219" },
        { label: "EN 12572" },
      ],
      ctaTitle: "Готові працювати\nз нами?",
      ctaDescription:
        "Зв'яжіться з нашою командою та отримайте персональну пропозицію для вашого проєкту протягом 24 годин.",
      ctaPrimaryLabel: "Отримати пропозицію",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Переглянути каталог",
      ctaSecondaryHref: "/catalog",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | О нас",
        metaDescription:
          "Познакомьтесь с командой, заводом, ценностями и сертификацией Kidsfera.",
        canonicalPath: "/ru/about",
      },
      heroEyebrow: "О нас",
      heroTitle: "Мы строим\nмечты детей",
      heroDescription:
        "С 2006 года Kidsfera проектирует и производит аттракционы, которые вдохновляют детей исследовать, двигаться и воображать.",
      heroImageUrl:
        "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600&h=900&fit=crop&auto=format",
      heroStats: [
        { value: "840+", label: "Проектов" },
        { value: "32", label: "Страны" },
        { value: "18", label: "Лет" },
        { value: "2.4M", label: "Детей в день" },
      ],
      storyEyebrow: "Наша история",
      storyTitle: "От гаража до\n14 000 м² завода",
      storyParagraph1:
        "В 2006 году Jan Kowalski собрал первый лабиринт в арендованном гараже в Познани. Клиенты стояли в очереди ещё до того, как высохла краска. Через год открылся первый цех — 800 м². Через пять лет появился первый международный контракт.",
      storyParagraph2:
        "Сегодня наш завод площадью 14 000 м² производит более 80 проектов в год — от домашних площадок до трёхэтажных развлекательных комплексов. Всё проектируется, сваривается, красится и тестируется под одной крышей в Польше.",
      milestones: [
        { year: "2006", text: "Первый лабиринт собран в гараже в Познани" },
        { year: "2009", text: "100-й реализованный проект" },
        { year: "2012", text: "Открытие собственного завода (5 000 м²)" },
        { year: "2016", text: "Сертификация ISO 9001" },
        { year: "2018", text: "Расширение завода до 14 000 м²" },
        { year: "2021", text: "500+ проектов, выход на рынки Азии" },
        { year: "2024", text: "840+ проектов в 32 странах" },
      ],
      valuesEyebrow: "Наши ценности",
      valuesTitle: "Почему нам доверяют",
      values: [
        {
          title: "Безопасность прежде всего",
          description:
            "Каждая деталь соответствует EN 1176, ASTM и CE. Независимый аудит обязателен перед каждой отгрузкой.",
          icon: "🛡️",
          theme: "orange",
        },
        {
          title: "Ручная работа",
          description:
            "Сварка, покрытие, монтаж — никакого аутсорсинга. 280 мастеров под одной крышей.",
          icon: "🔨",
          theme: "blue",
        },
        {
          title: "Долговечность",
          description:
            "HDPE не гниёт, порошковая краска не облезает, сталь оцинкована. Гарантия 10–15 лет в зависимости от серии.",
          icon: "⏳",
          theme: "yellow",
        },
        {
          title: "Соблюдение сроков",
          description:
            "8 недель от дизайна до отгрузки для стандартных конфигураций. Мы никогда не срывали дату открытия.",
          icon: "🚀",
          theme: "green",
        },
      ],
      factoryEyebrow: "Наш завод",
      factoryTitle: "Сердце Kidsfera",
      factoryDescription:
        "Познань, ул. Fabryczna 12. 14 000 м², 280 сотрудников, 6 производственных линий. Здесь рождается каждый лабиринт, скалодром и батутная арена, которую мы продаём.",
      factoryImageUrl:
        "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=900&h=700&fit=crop&auto=format",
      factoryLocationLabel: "Познань, Польша",
      factoryAddress: "ул. Fabryczna 12",
      factoryStats: [
        { value: "14 000 м²", label: "Площадь завода" },
        { value: "280", label: "Сотрудников" },
        { value: "6", label: "Производственных линий" },
        { value: "80+", label: "Проектов в год" },
      ],
      showTeamSection: true,
      teamEyebrow: "Команда",
      teamTitle: "Люди за Kidsfera",
      teamMembers: [
        {
          name: "Jan Kowalski",
          role: "Основатель и CEO",
          bio: "Инженер-механик, отец троих детей. Собрал первый лабиринт своими руками в 2006 году.",
          imageUrl:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Marta Nowak",
          role: "Директор по дизайну",
          bio: "Архитектор с 18-летним опытом. Специализируется на детских пространствах и нейродизайне.",
          imageUrl:
            "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Piotr Wiśniewski",
          role: "Директор производства",
          bio: "Руководит заводом с 2011 года. Под его руководством производительность выросла в четыре раза.",
          imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Anna Dąbrowska",
          role: "Международные продажи",
          bio: "Отвечает за 32 страны. Провела более 400 переговоров на 5 континентах.",
          imageUrl:
            "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=400&h=400&fit=crop&crop=face&auto=format",
        },
      ],
      showCertificationsSection: true,
      certificationsEyebrow: "Сертификаты",
      certificationsTitle: "Проверено независимыми органами",
      certifications: [
        { label: "EN 1176 — Оборудование и покрытия детских площадок" },
        { label: "EN 13219 — Батутное оборудование" },
        { label: "EN 12572 — Искусственные скальные конструкции" },
        { label: "ASTM F1292 — Ударопоглощение покрытий" },
        { label: "CE — Соответствие стандартам ЕС" },
        { label: "ISO 9001 — Управление качеством" },
      ],
      safetyCalloutIcon: "🏆",
      safetyCalloutTitle: "18 лет без\nинцидентов безопасности",
      safetyCalloutDescription:
        "Каждый продукт проходит независимые испытания перед отгрузкой. С момента основания в 2006 году ни один объект Kidsfera не был связан с зафиксированным инцидентом безопасности.",
      safetyBadges: [
        { label: "EN 1176" },
        { label: "CE" },
        { label: "ISO 9001" },
        { label: "ASTM" },
        { label: "EN 13219" },
        { label: "EN 12572" },
      ],
      ctaTitle: "Готовы работать\nс нами?",
      ctaDescription:
        "Свяжитесь с нашей командой и получите персональное предложение для вашего проекта в течение 24 часов.",
      ctaPrimaryLabel: "Получить предложение",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Смотреть каталог",
      ctaSecondaryHref: "/catalog",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | O nas",
        metaDescription:
          "Poznaj zespół, fabrykę, wartości i certyfikacje stojące za marką Kidsfera.",
        canonicalPath: "/pl/about",
      },
      heroEyebrow: "O nas",
      heroTitle: "Budujemy\nmarzenia dzieci",
      heroDescription:
        "Od 2006 roku Kidsfera projektuje i produkuje atrakcje, które inspirują dzieci do odkrywania, ruchu i wyobraźni.",
      heroImageUrl:
        "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600&h=900&fit=crop&auto=format",
      heroStats: [
        { value: "840+", label: "Projektów" },
        { value: "32", label: "Kraje" },
        { value: "18", label: "Lat" },
        { value: "2.4M", label: "Dzieci dziennie" },
      ],
      storyEyebrow: "Nasza historia",
      storyTitle: "Od garażu do fabryki\n14 000 m²",
      storyParagraph1:
        "W 2006 roku Jan Kowalski złożył pierwszy labirynt w wynajętym garażu w Poznaniu. Klienci ustawiali się w kolejce, zanim farba wyschła. Rok później otworzył się pierwszy warsztat — 800 m². Pięć lat później pojawił się pierwszy kontrakt międzynarodowy.",
      storyParagraph2:
        "Dziś nasza fabryka o powierzchni 14 000 m² produkuje ponad 80 projektów rocznie — od domowych placów zabaw po trzypiętrowe megaparki rozrywki. Wszystko jest projektowane, spawane, lakierowane i testowane pod jednym dachem w Polsce.",
      milestones: [
        { year: "2006", text: "Pierwszy labirynt złożony w garażu w Poznaniu" },
        { year: "2009", text: "100. zrealizowany projekt" },
        { year: "2012", text: "Otwarcie własnej fabryki (5 000 m²)" },
        { year: "2016", text: "Certyfikacja ISO 9001" },
        { year: "2018", text: "Rozbudowa fabryki do 14 000 m²" },
        { year: "2021", text: "500+ projektów, wejście na rynki azjatyckie" },
        { year: "2024", text: "840+ projektów w 32 krajach" },
      ],
      valuesEyebrow: "Nasze wartości",
      valuesTitle: "Dlaczego klienci nam ufają",
      values: [
        {
          title: "Bezpieczeństwo przede wszystkim",
          description:
            "Każdy element spełnia normy EN 1176, ASTM i CE. Niezależny audit obowiązkowy przed każdą wysyłką.",
          icon: "🛡️",
          theme: "orange",
        },
        {
          title: "Rękodzieło",
          description:
            "Spawanie, lakierowanie, montaż — bez outsourcingu. 280 rzemieślników pod jednym dachem.",
          icon: "🔨",
          theme: "blue",
        },
        {
          title: "Trwałość",
          description:
            "HDPE nie gnije, farba proszkowa nie odpada, stal jest ocynkowana. Gwarancja 10–15 lat zależnie od serii.",
          icon: "⏳",
          theme: "yellow",
        },
        {
          title: "Dotrzymanie terminów",
          description:
            "8 tygodni od projektu do wysyłki dla standardowych konfiguracji. Nigdy nie spóźniliśmy się na otwarcie.",
          icon: "🚀",
          theme: "green",
        },
      ],
      factoryEyebrow: "Nasza fabryka",
      factoryTitle: "Serce Kidsfera",
      factoryDescription:
        "Poznań, ul. Fabryczna 12. 14 000 m², 280 pracowników, 6 linii produkcyjnych. Tutaj rodzi się każdy labirynt, ścianka wspinaczkowa i arena trampolinowa, którą sprzedajemy.",
      factoryImageUrl:
        "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=900&h=700&fit=crop&auto=format",
      factoryLocationLabel: "Poznań, Polska",
      factoryAddress: "ul. Fabryczna 12",
      factoryStats: [
        { value: "14 000 m²", label: "Powierzchnia fabryki" },
        { value: "280", label: "Pracowników" },
        { value: "6", label: "Linii produkcyjnych" },
        { value: "80+", label: "Projektów rocznie" },
      ],
      showTeamSection: true,
      teamEyebrow: "Zespół",
      teamTitle: "Ludzie za Kidsfera",
      teamMembers: [
        {
          name: "Jan Kowalski",
          role: "Założyciel i CEO",
          bio: "Inżynier mechanik, ojciec trojga dzieci. Złożył pierwszy labirynt własnoręcznie w 2006 roku.",
          imageUrl:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Marta Nowak",
          role: "Dyrektor ds. designu",
          bio: "Architektka z 18-letnim doświadczeniem. Specjalizuje się w przestrzeniach dla dzieci i neurodesignie.",
          imageUrl:
            "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Piotr Wiśniewski",
          role: "Dyrektor produkcji",
          bio: "Zarządza fabryką od 2011 roku. Pod jego kierownictwem wydajność wzrosła czterokrotnie.",
          imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face&auto=format",
        },
        {
          name: "Anna Dąbrowska",
          role: "Sprzedaż międzynarodowa",
          bio: "Odpowiada za 32 kraje. Prowadziła ponad 400 negocjacji na 5 kontynentach.",
          imageUrl:
            "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=400&h=400&fit=crop&crop=face&auto=format",
        },
      ],
      showCertificationsSection: true,
      certificationsEyebrow: "Certyfikaty",
      certificationsTitle: "Weryfikowane przez niezależne jednostki",
      certifications: [
        { label: "EN 1176 — Wyposażenie i nawierzchnie placów zabaw" },
        { label: "EN 13219 — Wyposażenie trampolinowe" },
        { label: "EN 12572 — Sztuczne ściany wspinaczkowe" },
        { label: "ASTM F1292 — Amortyzacja uderzeń nawierzchni" },
        { label: "CE — Oznakowanie zgodności UE" },
        { label: "ISO 9001 — System zarządzania jakością" },
      ],
      safetyCalloutIcon: "🏆",
      safetyCalloutTitle: "18 lat bez\nincydentów bezpieczeństwa",
      safetyCalloutDescription:
        "Każdy produkt jest niezależnie testowany przed wysyłką. Od momentu powstania w 2006 roku żadna instalacja Kidsfera nie była związana z odnotowanym incydentem bezpieczeństwa.",
      safetyBadges: [
        { label: "EN 1176" },
        { label: "CE" },
        { label: "ISO 9001" },
        { label: "ASTM" },
        { label: "EN 13219" },
        { label: "EN 12572" },
      ],
      ctaTitle: "Gotowi pracować\nz nami?",
      ctaDescription:
        "Skontaktuj się z naszym zespołem i otrzymaj dopasowaną ofertę dla swojego projektu w ciągu 24 godzin.",
      ctaPrimaryLabel: "Zapytaj o ofertę",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Przeglądaj katalog",
      ctaSecondaryHref: "/catalog",
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
        metaDescription: "Filter multilingual products by category.",
        canonicalPath: "/en/catalog",
      },
      eyebrow: "Filter by",
      title: "Product Catalog",
      description:
        "Compare play systems, explore categories, and move into product details without leaving the storefront.",
      filterByLabel: "Filters",
      categoryLabel: "Category",
      allLabel: "All",
      noResultsLabel: "No products found. Try adjusting your filters.",
      viewDetailsLabel: "View Details",
      itemsLabel: "items",
      filtersLabel: "Filters",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Каталог",
        metaDescription: "Фільтруйте мультимовні товари за категорією.",
        canonicalPath: "/uk/catalog",
      },
      eyebrow: "Фільтрувати за",
      title: "Каталог продукції",
      description:
        "Порівнюйте ігрові системи, досліджуйте категорії та переходьте до деталей товару прямо у storefront.",
      filterByLabel: "Фільтри",
      categoryLabel: "Категорія",
      allLabel: "Усі",
      noResultsLabel: "Товарів не знайдено. Спробуйте змінити фільтри.",
      viewDetailsLabel: "Детальніше",
      itemsLabel: "товарів",
      filtersLabel: "Фільтри",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Каталог",
        metaDescription: "Фильтруйте мультиязычные товары по категории.",
        canonicalPath: "/ru/catalog",
      },
      eyebrow: "Фильтровать по",
      title: "Каталог продукции",
      description:
        "Сравнивайте игровые системы, изучайте категории и переходите к деталям товара прямо внутри storefront.",
      filterByLabel: "Фильтры",
      categoryLabel: "Категория",
      allLabel: "Все",
      noResultsLabel: "Товары не найдены. Попробуйте изменить фильтры.",
      viewDetailsLabel: "Подробнее",
      itemsLabel: "товаров",
      filtersLabel: "Фильтры",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Katalog",
        metaDescription: "Filtruj wielojęzyczne produkty według kategorii.",
        canonicalPath: "/pl/catalog",
      },
      eyebrow: "Filtruj według",
      title: "Katalog produktów",
      description:
        "Porównuj systemy zabaw, przeglądaj kategorie i przechodź do szczegółów produktu bez opuszczania storefront.",
      filterByLabel: "Filtry",
      categoryLabel: "Kategoria",
      allLabel: "Wszystkie",
      noResultsLabel: "Nie znaleziono produktów. Spróbuj zmienić filtry.",
      viewDetailsLabel: "Szczegóły",
      itemsLabel: "pozycji",
      filtersLabel: "Filtry",
    },
  } satisfies Localized<Record<string, unknown>>,
  projectsPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Projects",
        metaDescription:
          "Explore installed play spaces delivered by Kidsfera across malls, parks, and family destinations worldwide.",
        canonicalPath: "/en/projects",
      },
      eyebrow: "Installed Projects",
      title: "840+ spaces\nbuilt for play",
      subtitle:
        "From Dubai to Stockholm, we build destinations where children move, discover, and return with their families.",
      filterAllLabel: "All",
      viewProjectLabel: "View Project",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Проєкти",
        metaDescription:
          "Перегляньте реалізовані ігрові простори Kidsfera у торгових центрах, парках і сімейних локаціях по всьому світу.",
        canonicalPath: "/uk/projects",
      },
      eyebrow: "Реалізовані проєкти",
      title: "840+ просторів\nдля гри",
      subtitle:
        "Від Дубаю до Стокгольма ми створюємо локації, куди діти хочуть повертатися разом із сім'ями.",
      filterAllLabel: "Всі",
      viewProjectLabel: "Детальніше",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Проекты",
        metaDescription:
          "Изучите реализованные игровые пространства Kidsfera для торговых центров, парков и семейных локаций по всему миру.",
        canonicalPath: "/ru/projects",
      },
      eyebrow: "Реализованные проекты",
      title: "840+ пространств\nдля игры",
      subtitle:
        "От Дубая до Стокгольма мы создаём места, куда дети и семьи хотят возвращаться снова.",
      filterAllLabel: "Все",
      viewProjectLabel: "Подробнее",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Realizacje",
        metaDescription:
          "Poznaj zrealizowane przestrzenie zabaw Kidsfera w galeriach handlowych, parkach i rodzinnych destynacjach na całym świecie.",
        canonicalPath: "/pl/projects",
      },
      eyebrow: "Zrealizowane projekty",
      title: "840+ przestrzeni\ndo zabawy",
      subtitle:
        "Od Dubaju po Sztokholm tworzymy miejsca, do których dzieci i rodziny chcą wracać.",
      filterAllLabel: "Wszystkie",
      viewProjectLabel: "Zobacz projekt",
    },
  } satisfies Localized<Record<string, unknown>>,
  deliveryPaymentPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Delivery & Payment Terms",
        metaDescription:
          "Review Kidsfera's delivery options, payment methods, 50/50 production scheme, and shipping coverage.",
        canonicalPath: "/en/delivery-payment",
      },
      heroEyebrow: "Kidsfera",
      title: "Delivery & Payment Terms",
      subtitle: "Transparent terms, official operations, full security for your order.",
      alertTitle: "Delivery is by prepayment only",
      alertSubtitle: "This guarantees you priority in production and protects both parties.",
      deliveryTitle: "Delivery Methods",
      paymentTitle: "Payment Methods",
      deliveryMethods: [
        {
          icon: "📦",
          title: "Nova Poshta",
          description: "Shipping across Ukraine. Convenient, fast, reliable.",
          accentColor: "#0055FF",
        },
        {
          icon: "🏭",
          title: "Self-Pickup",
          description: "Collect your order from our warehouse in Poznań.",
          accentColor: "#FF4500",
        },
        {
          icon: "🚛",
          title: "Delivery Service",
          description: "Shipping via the Delivery carrier network.",
          accentColor: "#00C853",
        },
        {
          icon: "📦",
          title: "Groupage Cargo",
          description: "We search for accompanying freight to reduce transport costs.",
          accentColor: "#8B00FF",
        },
      ],
      paymentMethods: [
        {
          icon: "💳",
          title: "Cash on Delivery",
          description: "Pay on receipt of goods via the delivery service.",
          badge: "Available",
          accentColor: "#0055FF",
        },
        {
          icon: "🏦",
          title: "Bank Transfer",
          description:
            "Official 50/50 scheme. First payment starts production, second before shipping.",
          badge: "Primary method",
          accentColor: "#FF4500",
        },
        {
          icon: "💵",
          title: "Cash",
          description: "Available for self-pickup or in-person collection.",
          badge: "Self-pickup",
          accentColor: "#00C853",
        },
        {
          icon: "📋",
          title: "By Requisites",
          description: "Payment to company account with full documentation package.",
          badge: "For businesses",
          accentColor: "#8B00FF",
        },
      ],
      schemeTitle: "50/50 Payment Scheme",
      schemeStep1Value: "50%",
      schemeStep1Title: "50% — Prepayment",
      schemeStep1Description:
        "The first payment launches production. Without it, we do not begin work.",
      schemeStep2Value: "50%",
      schemeStep2Title: "50% — Before Shipping",
      schemeStep2Description:
        "The second payment after manufacturing is complete, before the goods are dispatched.",
      schemeBadge: "Official scheme · Full transparency",
      deliveryDetailTitle: "Delivery Details",
      localTabLabel: "Ukraine",
      internationalTabLabel: "International",
      localDeliveryIntro: "We ship orders to all regions of Ukraine:",
      localDeliveryLocations:
        "Kyiv, Kharkiv, Odesa, Dnipro, Lviv, Zaporizhzhia, Vinnytsia, Poltava, Mykolaiv, Kherson, Chernivtsi, Ivano-Frankivsk, Ternopil, Rivne, Lutsk, Chernihiv, Zhytomyr, Uzhhorod, Khmelnytskyi, Sumy, Kropyvnytskyi, Cherkasy and other cities.",
      deliveryNote:
        "Since we produce large-scale products, cargo delivery is the optimal option. It reduces transportation costs by shipping directly from our warehouse to your address.",
      deliveryPickupNotes: [
        { label: "We arrange cargo pick-up from the carrier" },
        {
          label:
            "Our driver can deliver to the Delivery terminal for a fixed fee of 700 UAH — approximately 3× cheaper than the standard Delivery pick-up rate.",
        },
      ],
      internationalDeliveryIntro:
        "We ship internationally to European countries and neighbouring regions:",
      internationalCountries: [
        { label: "🇲🇩 Moldova" },
        { label: "🇵🇱 Poland" },
        { label: "🇩🇪 Germany" },
        { label: "🇱🇻 Latvia" },
        { label: "🇱🇹 Lithuania" },
        { label: "🇪🇪 Estonia" },
        { label: "🇨🇿 Czech Republic" },
        { label: "🇸🇰 Slovakia" },
        { label: "🇭🇺 Hungary" },
        { label: "🇷🇴 Romania" },
        { label: "🇧🇬 Bulgaria" },
        { label: "🇮🇹 Italy" },
        { label: "🇫🇷 France" },
        { label: "🇪🇸 Spain" },
        { label: "🇦🇹 Austria" },
        { label: "🇧🇪 Belgium" },
        { label: "🇳🇱 Netherlands" },
      ],
      paymentRequirementsTitle: "Payment by Bank Transfer",
      paymentRequirementsText:
        "Prepayment of at least 50% of the total order value is required. The final payment is made to the company's account after production is complete and before shipping.",
      cashTitle: "Cash Payment",
      cashText:
        "Cash payment is available when collecting your order in person or using self-pickup from our warehouse.",
      ctaTitle: "Ready to place an order?",
      ctaSubtitle: "Contact us — we respond within 24 hours.",
      ctaPrimaryLabel: "Get a Quote",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Browse Catalog",
      ctaSecondaryHref: "/catalog",
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Умови доставки та оплати",
        metaDescription:
          "Перегляньте способи доставки Kidsfera, варіанти оплати, схему 50/50 та географію відправок.",
        canonicalPath: "/uk/delivery-payment",
      },
      heroEyebrow: "Kidsfera",
      title: "Умови доставки та оплати",
      subtitle: "Прозорі умови, офіційна робота, повна безпека для вашого замовлення.",
      alertTitle: "Доставка здійснюється тільки по передоплаті",
      alertSubtitle: "Це гарантує вам пріоритет у виробництві та захищає обидві сторони.",
      deliveryTitle: "Способи доставки",
      paymentTitle: "Способи оплати",
      deliveryMethods: [
        {
          icon: "📦",
          title: "Нова Пошта",
          description: "Відправка по всій Україні. Зручно, швидко, надійно.",
          accentColor: "#0055FF",
        },
        {
          icon: "🏭",
          title: "Самовивіз",
          description: "Забирайте замовлення самостійно з нашого складу в Познані.",
          accentColor: "#FF4500",
        },
        {
          icon: "🚛",
          title: "Delivery",
          description: "Доставка через популярну транспортну службу Delivery.",
          accentColor: "#00C853",
        },
        {
          icon: "📦",
          title: "Довантаж",
          description: "Шукаємо попутний вантаж для зниження вартості транспортування.",
          accentColor: "#8B00FF",
        },
      ],
      paymentMethods: [
        {
          icon: "💳",
          title: "Післяплата",
          description: "Оплата при отриманні товару через службу доставки.",
          badge: "Доступно",
          accentColor: "#0055FF",
        },
        {
          icon: "🏦",
          title: "Оплата на рахунок",
          description:
            "Офіційна схема 50/50. Перший платіж — запуск виробництва, другий — перед відправкою.",
          badge: "Основний спосіб",
          accentColor: "#FF4500",
        },
        {
          icon: "💵",
          title: "Готівкою",
          description: "При самовивозі або особистому отриманні замовлення.",
          badge: "При самовивозі",
          accentColor: "#00C853",
        },
        {
          icon: "📋",
          title: "За реквізитами",
          description:
            "Оплата на розрахунковий рахунок підприємства з повним пакетом документів.",
          badge: "Юридичним особам",
          accentColor: "#8B00FF",
        },
      ],
      schemeTitle: "Схема оплати 50/50",
      schemeStep1Value: "50%",
      schemeStep1Title: "50% — передоплата",
      schemeStep1Description:
        "Перший платіж запускає виробництво. Без нього ми не розпочинаємо роботу.",
      schemeStep2Value: "50%",
      schemeStep2Title: "50% — перед відправкою",
      schemeStep2Description:
        "Другий платіж після завершення виготовлення, перед відправкою товару.",
      schemeBadge: "Офіційна схема · Повна прозорість",
      deliveryDetailTitle: "Деталі доставки",
      localTabLabel: "Україна",
      internationalTabLabel: "Міжнародна",
      localDeliveryIntro: "Ми відправляємо замовлення у всі регіони України:",
      localDeliveryLocations:
        "Київ, Харків, Одеса, Дніпро, Львів, Запоріжжя, Вінниця, Полтава, Миколаїв, Херсон, Чернівці, Івано-Франківськ, Тернопіль, Рівне, Луцьк, Чернігів, Житомир, Ужгород, Хмельницький, Суми, Кропивницький, Черкаси та інші міста.",
      deliveryNote:
        "Оскільки ми виробляємо великогабаритну продукцію, оптимальним варіантом є доставка вантажем. Це дозволяє зменшити витрати на транспортування, відправляючи товар безпосередньо зі складу до вашої адреси.",
      deliveryPickupNotes: [
        { label: "Ми замовляємо забір вантажу у транспортній компанії" },
        {
          label:
            "Наш водій доставить до терміналу за фіксовану вартість 700 грн — приблизно у 3 рази дешевше ніж стандартний тариф Delivery.",
        },
      ],
      internationalDeliveryIntro:
        "Ми здійснюємо доставку за кордон у країни Європи та ближнього зарубіжжя:",
      internationalCountries: [
        { label: "🇲🇩 Молдова" },
        { label: "🇵🇱 Польща" },
        { label: "🇩🇪 Німеччина" },
        { label: "🇱🇻 Латвія" },
        { label: "🇱🇹 Литва" },
        { label: "🇪🇪 Естонія" },
        { label: "🇨🇿 Чехія" },
        { label: "🇸🇰 Словаччина" },
        { label: "🇭🇺 Угорщина" },
        { label: "🇷🇴 Румунія" },
        { label: "🇧🇬 Болгарія" },
        { label: "🇮🇹 Італія" },
        { label: "🇫🇷 Франція" },
        { label: "🇪🇸 Іспанія" },
        { label: "🇦🇹 Австрія" },
        { label: "🇧🇪 Бельгія" },
        { label: "🇳🇱 Нідерланди" },
      ],
      paymentRequirementsTitle: "Оплата за реквізитами",
      paymentRequirementsText:
        "Передплата становить не менше 50% від загальної вартості замовлення. Остаточний розрахунок проводиться на розрахунковий рахунок після завершення виготовлення та перед відправкою продукції.",
      cashTitle: "Готівкою",
      cashText:
        "Готівковий розрахунок можливий при особистому отриманні замовлення або самовивозі зі складу.",
      ctaTitle: "Готові зробити замовлення?",
      ctaSubtitle: "Зв'яжіться з нами — відповімо протягом 24 годин.",
      ctaPrimaryLabel: "Отримати пропозицію",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Переглянути каталог",
      ctaSecondaryHref: "/catalog",
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Условия доставки и оплаты",
        metaDescription:
          "Изучите способы доставки Kidsfera, варианты оплаты, схему 50/50 и географию отправок.",
        canonicalPath: "/ru/delivery-payment",
      },
      heroEyebrow: "Kidsfera",
      title: "Условия доставки и оплаты",
      subtitle: "Прозрачные условия, официальная работа, полная безопасность вашего заказа.",
      alertTitle: "Доставка осуществляется только по предоплате",
      alertSubtitle: "Это гарантирует вам приоритет в производстве и защищает обе стороны.",
      deliveryTitle: "Способы доставки",
      paymentTitle: "Способы оплаты",
      deliveryMethods: [
        {
          icon: "📦",
          title: "Нова Пошта",
          description: "Отправка по всей Украине. Удобно, быстро, надёжно.",
          accentColor: "#0055FF",
        },
        {
          icon: "🏭",
          title: "Самовывоз",
          description: "Заберите заказ самостоятельно с нашего склада.",
          accentColor: "#FF4500",
        },
        {
          icon: "🚛",
          title: "Delivery",
          description: "Доставка через популярную транспортную службу Delivery.",
          accentColor: "#00C853",
        },
        {
          icon: "📦",
          title: "Догруз",
          description: "Ищем попутный груз для снижения стоимости перевозки.",
          accentColor: "#8B00FF",
        },
      ],
      paymentMethods: [
        {
          icon: "💳",
          title: "Наложенный платёж",
          description: "Оплата при получении товара через службу доставки.",
          badge: "Доступно",
          accentColor: "#0055FF",
        },
        {
          icon: "🏦",
          title: "Оплата на счёт",
          description:
            "Официальная схема 50/50. Первый платёж — запуск, второй — перед отправкой.",
          badge: "Основной способ",
          accentColor: "#FF4500",
        },
        {
          icon: "💵",
          title: "Наличными",
          description: "При самовывозе или личном получении заказа.",
          badge: "При самовывозе",
          accentColor: "#00C853",
        },
        {
          icon: "📋",
          title: "По реквизитам",
          description: "Оплата на расчётный счёт с полным пакетом документов.",
          badge: "Для юридических лиц",
          accentColor: "#8B00FF",
        },
      ],
      schemeTitle: "Схема оплаты 50/50",
      schemeStep1Value: "50%",
      schemeStep1Title: "50% — предоплата",
      schemeStep1Description:
        "Первый платёж запускает производство. Без него мы не начинаем работу.",
      schemeStep2Value: "50%",
      schemeStep2Title: "50% — перед отправкой",
      schemeStep2Description:
        "Второй платёж после завершения изготовления, перед отправкой товара.",
      schemeBadge: "Официальная схема · Полная прозрачность",
      deliveryDetailTitle: "Детали доставки",
      localTabLabel: "Украина",
      internationalTabLabel: "Международная",
      localDeliveryIntro: "Мы отправляем заказы во все регионы Украины:",
      localDeliveryLocations:
        "Киев, Харьков, Одесса, Днепр, Львов, Запорожье, Винница, Полтава, Николаев, Херсон, Черновцы, Ивано-Франковск, Тернополь, Ровно, Луцк, Чернигов, Житомир, Ужгород, Хмельницкий, Сумы, Кропивницкий, Черкассы и другие города.",
      deliveryNote:
        "Поскольку мы производим крупногабаритную продукцию, оптимальным вариантом является доставка грузом. Это позволяет снизить затраты на транспортировку, отправляя товар напрямую со склада на ваш адрес.",
      deliveryPickupNotes: [
        { label: "Мы заказываем забор груза у транспортной компании" },
        {
          label:
            "Наш водитель доставит на терминал Delivery за фиксированную стоимость 700 грн — примерно в 3 раза дешевле стандартного тарифа.",
        },
      ],
      internationalDeliveryIntro:
        "Мы осуществляем доставку за рубеж в страны Европы и ближнего зарубежья:",
      internationalCountries: [
        { label: "🇲🇩 Молдова" },
        { label: "🇵🇱 Польша" },
        { label: "🇩🇪 Германия" },
        { label: "🇱🇻 Латвия" },
        { label: "🇱🇹 Литва" },
        { label: "🇪🇪 Эстония" },
        { label: "🇨🇿 Чехия" },
        { label: "🇸🇰 Словакия" },
        { label: "🇭🇺 Венгрия" },
        { label: "🇷🇴 Румыния" },
        { label: "🇧🇬 Болгария" },
        { label: "🇮🇹 Италия" },
        { label: "🇫🇷 Франция" },
        { label: "🇪🇸 Испания" },
        { label: "🇦🇹 Австрия" },
        { label: "🇧🇪 Бельгия" },
        { label: "🇳🇱 Нидерланды" },
      ],
      paymentRequirementsTitle: "Оплата по реквизитам",
      paymentRequirementsText:
        "Предоплата составляет не менее 50% от общей стоимости заказа. Окончательный расчёт производится на расчётный счёт после завершения изготовления и перед отправкой продукции.",
      cashTitle: "Наличными",
      cashText: "Наличный расчёт возможен при личном получении заказа или самовывозе со склада.",
      ctaTitle: "Готовы сделать заказ?",
      ctaSubtitle: "Свяжитесь с нами — ответим в течение 24 часов.",
      ctaPrimaryLabel: "Получить предложение",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Посмотреть каталог",
      ctaSecondaryHref: "/catalog",
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Warunki dostawy i płatności",
        metaDescription:
          "Poznaj metody dostawy Kidsfera, formy płatności, schemat 50/50 i zasięg wysyłki.",
        canonicalPath: "/pl/delivery-payment",
      },
      heroEyebrow: "Kidsfera",
      title: "Warunki dostawy i płatności",
      subtitle: "Przejrzyste warunki, oficjalna działalność, pełne bezpieczeństwo zamówienia.",
      alertTitle: "Dostawa realizowana wyłącznie po przedpłacie",
      alertSubtitle: "Gwarantuje to priorytet w produkcji i zabezpiecza obie strony.",
      deliveryTitle: "Metody dostawy",
      paymentTitle: "Metody płatności",
      deliveryMethods: [
        {
          icon: "📦",
          title: "Nova Poshta",
          description: "Wysyłka na terenie całej Ukrainy. Wygodnie, szybko, niezawodnie.",
          accentColor: "#0055FF",
        },
        {
          icon: "🏭",
          title: "Odbiór własny",
          description: "Odbierz zamówienie osobiście z naszego magazynu w Poznaniu.",
          accentColor: "#FF4500",
        },
        {
          icon: "🚛",
          title: "Delivery",
          description: "Dostawa przez popularną sieć transportową Delivery.",
          accentColor: "#00C853",
        },
        {
          icon: "📦",
          title: "Ładunek łączony",
          description: "Szukamy towarzyszącego ładunku w celu obniżenia kosztów transportu.",
          accentColor: "#8B00FF",
        },
      ],
      paymentMethods: [
        {
          icon: "💳",
          title: "Pobranie",
          description: "Płatność przy odbiorze towaru przez przewoźnika.",
          badge: "Dostępne",
          accentColor: "#0055FF",
        },
        {
          icon: "🏦",
          title: "Przelew bankowy",
          description:
            "Oficjalny schemat 50/50. Pierwsza płatność uruchamia produkcję, druga przed wysyłką.",
          badge: "Podstawowa metoda",
          accentColor: "#FF4500",
        },
        {
          icon: "💵",
          title: "Gotówka",
          description: "Przy odbiorze osobistym lub odbiorze własnym z magazynu.",
          badge: "Odbiór własny",
          accentColor: "#00C853",
        },
        {
          icon: "📋",
          title: "Przelew na konto",
          description: "Płatność na konto firmowe z pełnym pakietem dokumentów.",
          badge: "Dla firm",
          accentColor: "#8B00FF",
        },
      ],
      schemeTitle: "Schemat płatności 50/50",
      schemeStep1Value: "50%",
      schemeStep1Title: "50% — przedpłata",
      schemeStep1Description:
        "Pierwsza płatność uruchamia produkcję. Bez niej nie rozpoczynamy pracy.",
      schemeStep2Value: "50%",
      schemeStep2Title: "50% — przed wysyłką",
      schemeStep2Description:
        "Druga płatność po zakończeniu produkcji, przed wysyłką towaru.",
      schemeBadge: "Oficjalny schemat · Pełna przejrzystość",
      deliveryDetailTitle: "Szczegóły dostawy",
      localTabLabel: "Ukraina",
      internationalTabLabel: "Międzynarodowa",
      localDeliveryIntro: "Wysyłamy zamówienia do wszystkich regionów Ukrainy:",
      localDeliveryLocations:
        "Kijów, Charków, Odessa, Dniepr, Lwów, Zaporoże, Winnica, Połtawa, Mikołajów, Chersoń, Czerniowce, Iwano-Frankiwsk, Tarnopol, Równe, Łuck, Czernihów, Żytomierz, Użhorod, Chmielnicki, Sumy, Kropywnycki, Czerkasy i inne miasta.",
      deliveryNote:
        "Ponieważ produkujemy wielkogabarytowe wyroby, optymalnym rozwiązaniem jest dostawa ładunkowa. Pozwala to obniżyć koszty transportu poprzez wysyłkę bezpośrednio z magazynu na Twój adres.",
      deliveryPickupNotes: [
        { label: "Zamawiamy odbiór ładunku przez firmę transportową" },
        {
          label:
            "Nasz kierowca dostarczy do terminalu Delivery za stałą opłatą 700 UAH — około 3× taniej niż standardowa usługa odbioru w Delivery.",
        },
      ],
      internationalDeliveryIntro:
        "Realizujemy dostawy za granicę do krajów Europy i bliskiej zagranicy:",
      internationalCountries: [
        { label: "🇲🇩 Mołdawia" },
        { label: "🇵🇱 Polska" },
        { label: "🇩🇪 Niemcy" },
        { label: "🇱🇻 Łotwa" },
        { label: "🇱🇹 Litwa" },
        { label: "🇪🇪 Estonia" },
        { label: "🇨🇿 Czechy" },
        { label: "🇸🇰 Słowacja" },
        { label: "🇭🇺 Węgry" },
        { label: "🇷🇴 Rumunia" },
        { label: "🇧🇬 Bułgaria" },
        { label: "🇮🇹 Włochy" },
        { label: "🇫🇷 Francja" },
        { label: "🇪🇸 Hiszpania" },
        { label: "🇦🇹 Austria" },
        { label: "🇧🇪 Belgia" },
        { label: "🇳🇱 Holandia" },
      ],
      paymentRequirementsTitle: "Płatność przelewem",
      paymentRequirementsText:
        "Przedpłata wynosi co najmniej 50% całkowitej wartości zamówienia. Ostateczne rozliczenie następuje na rachunek bankowy po zakończeniu produkcji i przed wysyłką.",
      cashTitle: "Gotówka",
      cashText:
        "Płatność gotówkowa możliwa przy osobistym odbiorze zamówienia lub odbiorze własnym z magazynu.",
      ctaTitle: "Gotowy złożyć zamówienie?",
      ctaSubtitle: "Skontaktuj się z nami — odpowiadamy w ciągu 24 godzin.",
      ctaPrimaryLabel: "Zapytaj o ofertę",
      ctaPrimaryHref: "/#contact",
      ctaSecondaryLabel: "Przeglądaj katalog",
      ctaSecondaryHref: "/catalog",
    },
  } satisfies Localized<Record<string, unknown>>,
  privacyPolicyPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | Privacy Policy",
        metaDescription:
          "Learn how Kidsfera collects, uses, stores, and protects personal data shared through the website and business communication.",
        canonicalPath: "/en/privacy-policy",
      },
      heroEyebrow: "Legal",
      title: "Privacy Policy",
      subtitle: "How we handle personal data collected through our website, forms, and direct communication.",
      content: `## 1. Data Controller
Kidsfera acts as the controller of personal data submitted through the website, quote forms, and direct email or phone communication.

## 2. What Data We Collect
- contact details such as name, email address, and phone number
- company details provided in an enquiry
- message content, project requirements, and attachments
- basic analytics and technical data needed to secure and improve the website

## 3. Why We Use Personal Data
We use personal data to respond to enquiries, prepare quotations, manage orders, provide customer support, and improve our services. We only process data when we have a legal basis to do so.

## 4. Data Sharing and Storage
We may share data with trusted service providers involved in hosting, communication, logistics, accounting, or legal compliance. Data is stored only for as long as necessary for the purpose for which it was collected or to meet legal obligations.

## 5. Your Rights
You may request access to your data, correction, deletion, restriction of processing, objection, or data portability where applicable. To exercise your rights, contact us using the details published on this website.`,
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Політика конфіденційності",
        metaDescription:
          "Дізнайтеся, як Kidsfera збирає, використовує, зберігає та захищає персональні дані, передані через сайт і ділову комунікацію.",
        canonicalPath: "/uk/privacy-policy",
      },
      heroEyebrow: "Документи",
      title: "Політика конфіденційності",
      subtitle: "Як ми працюємо з персональними даними, отриманими через сайт, форми та пряме спілкування.",
      content: `## 1. Володілець персональних даних
Kidsfera є володільцем персональних даних, які надсилаються через сайт, форми запиту комерційної пропозиції, електронну пошту або телефон.

## 2. Які дані ми збираємо
- контактні дані, зокрема ім'я, email та номер телефону
- дані компанії, зазначені у зверненні
- зміст повідомлення, вимоги до проєкту та вкладення
- базові аналітичні й технічні дані, потрібні для безпеки та покращення сайту

## 3. Для чого ми використовуємо дані
Ми використовуємо персональні дані для відповіді на звернення, підготовки пропозицій, супроводу замовлень, клієнтської підтримки та покращення сервісу. Обробка здійснюється лише за наявності законної підстави.

## 4. Передача та зберігання даних
Ми можемо передавати дані надійним постачальникам послуг, які беруть участь у хостингу, комунікації, логістиці, бухгалтерії або юридичному супроводі. Дані зберігаються лише стільки, скільки це потрібно для відповідної мети або для виконання вимог закону.

## 5. Ваші права
Ви можете звернутися із запитом на доступ до даних, виправлення, видалення, обмеження обробки, заперечення або перенесення даних, якщо це застосовно. Щоб скористатися своїми правами, зв'яжіться з нами за контактами, вказаними на сайті.`,
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Политика конфиденциальности",
        metaDescription:
          "Узнайте, как Kidsfera собирает, использует, хранит и защищает персональные данные, переданные через сайт и деловую коммуникацию.",
        canonicalPath: "/ru/privacy-policy",
      },
      heroEyebrow: "Документы",
      title: "Политика конфиденциальности",
      subtitle: "Как мы работаем с персональными данными, полученными через сайт, формы и прямое общение.",
      content: `## 1. Оператор персональных данных
Kidsfera выступает оператором персональных данных, которые передаются через сайт, формы запроса предложения, электронную почту или телефон.

## 2. Какие данные мы собираем
- контактные данные, включая имя, email и номер телефона
- данные компании, указанные в обращении
- содержание сообщения, требования к проекту и вложения
- базовые аналитические и технические данные, необходимые для безопасности и улучшения сайта

## 3. Для чего мы используем данные
Мы используем персональные данные для ответа на запросы, подготовки предложений, сопровождения заказов, поддержки клиентов и улучшения сервиса. Обработка выполняется только при наличии законного основания.

## 4. Передача и хранение данных
Мы можем передавать данные надежным поставщикам услуг, которые участвуют в хостинге, коммуникации, логистике, бухгалтерии или юридическом сопровождении. Данные хранятся только столько, сколько необходимо для соответствующей цели или выполнения требований закона.

## 5. Ваши права
Вы можете запросить доступ к данным, исправление, удаление, ограничение обработки, возражение или перенос данных, если это применимо. Чтобы воспользоваться своими правами, свяжитесь с нами по контактам, указанным на сайте.`,
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Polityka prywatności",
        metaDescription:
          "Dowiedz się, jak Kidsfera zbiera, wykorzystuje, przechowuje i chroni dane osobowe przekazywane przez stronę i komunikację biznesową.",
        canonicalPath: "/pl/privacy-policy",
      },
      heroEyebrow: "Dokumenty",
      title: "Polityka prywatności",
      subtitle: "W jaki sposób przetwarzamy dane osobowe pozyskiwane przez stronę, formularze i bezpośredni kontakt.",
      content: `## 1. Administrator danych
Kidsfera jest administratorem danych osobowych przekazywanych przez stronę internetową, formularze zapytań ofertowych oraz kontakt e-mailowy lub telefoniczny.

## 2. Jakie dane zbieramy
- dane kontaktowe, takie jak imię, adres e-mail i numer telefonu
- dane firmy podane w zapytaniu
- treść wiadomości, wymagania projektu i załączniki
- podstawowe dane analityczne i techniczne potrzebne do zabezpieczenia i ulepszania strony

## 3. W jakim celu używamy danych
Dane osobowe wykorzystujemy do odpowiadania na zapytania, przygotowywania ofert, obsługi zamówień, wsparcia klienta i ulepszania usług. Przetwarzamy dane wyłącznie wtedy, gdy mamy do tego podstawę prawną.

## 4. Udostępnianie i przechowywanie danych
Możemy udostępniać dane zaufanym dostawcom usług wspierającym hosting, komunikację, logistykę, księgowość lub zgodność prawną. Dane przechowujemy tylko przez okres niezbędny do realizacji celu albo spełnienia obowiązków prawnych.

## 5. Twoje prawa
Możesz zażądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu lub przeniesienia danych, jeśli ma to zastosowanie. Aby skorzystać ze swoich praw, skontaktuj się z nami, używając danych kontaktowych opublikowanych na stronie.`,
    },
  } satisfies Localized<Record<string, unknown>>,
  gdprPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera | GDPR Information",
        metaDescription:
          "Overview of GDPR-related rights, legal bases for processing, and how to contact Kidsfera regarding personal data requests.",
        canonicalPath: "/en/gdpr",
      },
      heroEyebrow: "Legal",
      title: "GDPR Information",
      subtitle: "Your rights under the General Data Protection Regulation and how we support data requests.",
      content: `## 1. Legal Basis for Processing
Kidsfera processes personal data only when there is a valid legal basis, including contract performance, pre-contractual communication, legitimate interest, legal obligation, or consent where required.

## 2. Data Subject Rights
Under GDPR, you may request access to your personal data, rectification, erasure, restriction of processing, objection to processing, and data portability where applicable.

## 3. Consent and Withdrawal
Where processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out before the request was made.

## 4. Complaints and Requests
If you believe your data is being processed unlawfully, you may contact us first so we can resolve the issue quickly. You also have the right to lodge a complaint with the competent supervisory authority.

## 5. How to Contact Us
To submit a GDPR-related request, please contact Kidsfera using the contact details listed on this website and include enough information for us to identify your request securely.`,
    },
    uk: {
      seo: {
        metaTitle: "Kidsfera | Інформація щодо GDPR",
        metaDescription:
          "Огляд прав за GDPR, правових підстав обробки та способів звернення до Kidsfera щодо персональних даних.",
        canonicalPath: "/uk/gdpr",
      },
      heroEyebrow: "Документи",
      title: "Інформація щодо GDPR",
      subtitle: "Ваші права за Загальним регламентом захисту даних та наш порядок опрацювання запитів.",
      content: `## 1. Правові підстави обробки
Kidsfera обробляє персональні дані лише за наявності належної правової підстави, зокрема для виконання договору, переддоговірного спілкування, законного інтересу, юридичного обов'язку або згоди, якщо вона потрібна.

## 2. Права суб'єкта даних
Відповідно до GDPR ви можете вимагати доступ до своїх даних, їх виправлення, видалення, обмеження обробки, заперечення проти обробки та перенесення даних, якщо це застосовно.

## 3. Згода та її відкликання
Якщо обробка ґрунтується на згоді, ви можете відкликати її в будь-який момент. Відкликання не впливає на законність обробки, здійсненої до моменту звернення.

## 4. Скарги та звернення
Якщо ви вважаєте, що ваші дані обробляються неправомірно, спершу зверніться до нас, щоб ми могли оперативно вирішити питання. Ви також маєте право подати скаргу до компетентного наглядового органу.

## 5. Як з нами зв'язатися
Щоб надіслати запит щодо GDPR, зверніться до Kidsfera за контактами, вказаними на сайті, та надайте достатньо інформації для безпечної ідентифікації вашого запиту.`,
    },
    ru: {
      seo: {
        metaTitle: "Kidsfera | Информация по GDPR",
        metaDescription:
          "Обзор прав по GDPR, правовых оснований обработки и способов обращения в Kidsfera по вопросам персональных данных.",
        canonicalPath: "/ru/gdpr",
      },
      heroEyebrow: "Документы",
      title: "Информация по GDPR",
      subtitle: "Ваши права по Общему регламенту защиты данных и порядок обработки запросов в Kidsfera.",
      content: `## 1. Правовые основания обработки
Kidsfera обрабатывает персональные данные только при наличии надлежащего правового основания, включая исполнение договора, преддоговорное общение, законный интерес, юридическую обязанность или согласие, если оно требуется.

## 2. Права субъекта данных
Согласно GDPR вы можете запросить доступ к своим данным, их исправление, удаление, ограничение обработки, возражение против обработки и перенос данных, если это применимо.

## 3. Согласие и его отзыв
Если обработка основана на согласии, вы можете отозвать его в любое время. Отзыв не влияет на законность обработки, выполненной до момента обращения.

## 4. Жалобы и обращения
Если вы считаете, что ваши данные обрабатываются неправомерно, сначала свяжитесь с нами, чтобы мы могли быстро решить вопрос. Вы также имеете право подать жалобу в компетентный надзорный орган.

## 5. Как с нами связаться
Чтобы отправить запрос по GDPR, свяжитесь с Kidsfera по контактам, указанным на сайте, и предоставьте достаточно информации для безопасной идентификации вашего запроса.`,
    },
    pl: {
      seo: {
        metaTitle: "Kidsfera | Informacje o RODO",
        metaDescription:
          "Przegląd praw wynikających z RODO, podstaw przetwarzania oraz sposobów kontaktu z Kidsfera w sprawach danych osobowych.",
        canonicalPath: "/pl/gdpr",
      },
      heroEyebrow: "Dokumenty",
      title: "Informacje o RODO",
      subtitle: "Twoje prawa wynikające z RODO oraz sposób, w jaki obsługujemy wnioski dotyczące danych osobowych.",
      content: `## 1. Podstawy prawne przetwarzania
Kidsfera przetwarza dane osobowe wyłącznie wtedy, gdy istnieje odpowiednia podstawa prawna, w tym wykonanie umowy, działania przed zawarciem umowy, prawnie uzasadniony interes, obowiązek prawny lub zgoda, gdy jest wymagana.

## 2. Prawa osoby, której dane dotyczą
Zgodnie z RODO możesz żądać dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz przeniesienia danych, jeśli ma to zastosowanie.

## 3. Zgoda i jej cofnięcie
Jeżeli przetwarzanie opiera się na zgodzie, możesz ją wycofać w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed zgłoszeniem.

## 4. Skargi i wnioski
Jeśli uważasz, że Twoje dane są przetwarzane niezgodnie z prawem, skontaktuj się z nami w pierwszej kolejności, abyśmy mogli szybko wyjaśnić sprawę. Masz również prawo złożyć skargę do właściwego organu nadzorczego.

## 5. Jak się z nami skontaktować
Aby złożyć wniosek dotyczący RODO, skontaktuj się z Kidsfera, korzystając z danych kontaktowych podanych na stronie, i podaj informacje wystarczające do bezpiecznej identyfikacji Twojego zgłoszenia.`,
    },
  } satisfies Localized<Record<string, unknown>>,
  productPage: {
    en: {
      galleryLabel: "Gallery",
      specsLabel: "Specifications",
      sizeLabel: "Dimensions",
      capacityLabel: "Capacity",
      materialLabel: "Material",
      leadLabel: "Lead Time",
      requestQuoteLabel: "Request a Quote",
      backToCatalogLabel: "Back to Catalog",
      relatedTitle: "Related Products",
      priceOnRequestLabel: "Made to order",
      certifiedByLabel: "Certified by",
      notFoundTitle: "Product not found",
    },
    uk: {
      galleryLabel: "Галерея",
      specsLabel: "Характеристики",
      sizeLabel: "Розміри",
      capacityLabel: "Місткість",
      materialLabel: "Матеріал",
      leadLabel: "Термін виготовлення",
      requestQuoteLabel: "Запросити пропозицію",
      backToCatalogLabel: "Назад до каталогу",
      relatedTitle: "Схожі товари",
      priceOnRequestLabel: "Під замовлення",
      certifiedByLabel: "Сертифіковано",
      notFoundTitle: "Товар не знайдено",
    },
    ru: {
      galleryLabel: "Галерея",
      specsLabel: "Характеристики",
      sizeLabel: "Размеры",
      capacityLabel: "Вместимость",
      materialLabel: "Материал",
      leadLabel: "Срок изготовления",
      requestQuoteLabel: "Запросить предложение",
      backToCatalogLabel: "Назад в каталог",
      relatedTitle: "Похожие товары",
      priceOnRequestLabel: "Под заказ",
      certifiedByLabel: "Сертифицировано",
      notFoundTitle: "Товар не найден",
    },
    pl: {
      galleryLabel: "Galeria",
      specsLabel: "Specyfikacja",
      sizeLabel: "Wymiary",
      capacityLabel: "Pojemność",
      materialLabel: "Materiał",
      leadLabel: "Czas realizacji",
      requestQuoteLabel: "Zapytaj o ofertę",
      backToCatalogLabel: "Wróć do katalogu",
      relatedTitle: "Podobne produkty",
      priceOnRequestLabel: "Na zamówienie",
      certifiedByLabel: "Certyfikowany",
      notFoundTitle: "Nie znaleziono produktu",
    },
  } satisfies Localized<Record<string, unknown>>,
  blogPage: {
    en: {
      seo: {
        metaTitle: "Kidsfera Blog",
        metaDescription:
          "Thoughts, research, and practical insights on attraction businesses, play design, and child development.",
        canonicalPath: "/en/blogs",
      },
      heroEyebrow: "Kidsfera Blog",
      heroTitle: "Thoughts, research\n& insights",
      heroSubtitle:
        "On the business of attractions, the design of play spaces, and the science of child development.",
      readMoreLabel: "Read article",
      readTimeLabel: "min read",
      minutesShortLabel: "min",
      allCategoriesLabel: "All",
      backToBlogLabel: "Back to Blog",
      relatedArticlesTitle: "Related Articles",
      authorLabel: "By",
      emptyStateText: "No articles in this category yet.",
    },
    uk: {
      seo: {
        metaTitle: "Блог Kidsfera",
        metaDescription:
          "Думки, дослідження та практичні інсайти про бізнес атракціонів, дизайн ігрових просторів і розвиток дитини.",
        canonicalPath: "/uk/blogs",
      },
      heroEyebrow: "Блог Kidsfera",
      heroTitle: "Думки, дослідження\nта інсайти",
      heroSubtitle:
        "Про бізнес атракціонів, дизайн просторів гри та науку дитячого розвитку.",
      readMoreLabel: "Читати далі",
      readTimeLabel: "хв читання",
      minutesShortLabel: "хв",
      allCategoriesLabel: "Всі",
      backToBlogLabel: "Назад до блогу",
      relatedArticlesTitle: "Схожі статті",
      authorLabel: "Автор",
      emptyStateText: "У цій категорії ще немає статей.",
    },
    ru: {
      seo: {
        metaTitle: "Блог Kidsfera",
        metaDescription:
          "Мысли, исследования и практические инсайты о бизнесе аттракционов, дизайне игровых пространств и развитии ребёнка.",
        canonicalPath: "/ru/blogs",
      },
      heroEyebrow: "Блог Kidsfera",
      heroTitle: "Мысли, исследования\nи инсайты",
      heroSubtitle:
        "О бизнесе аттракционов, дизайне игровых пространств и науке детского развития.",
      readMoreLabel: "Читать далее",
      readTimeLabel: "мин чтения",
      minutesShortLabel: "мин",
      allCategoriesLabel: "Все",
      backToBlogLabel: "Назад к блогу",
      relatedArticlesTitle: "Похожие статьи",
      authorLabel: "Автор",
      emptyStateText: "В этой категории пока нет статей.",
    },
    pl: {
      seo: {
        metaTitle: "Blog Kidsfera",
        metaDescription:
          "Myśli, badania i praktyczne spostrzeżenia o biznesie atrakcji, projektowaniu stref zabawy i rozwoju dziecka.",
        canonicalPath: "/pl/blogs",
      },
      heroEyebrow: "Blog Kidsfera",
      heroTitle: "Myśli, badania\ni spostrzeżenia",
      heroSubtitle:
        "O biznesie atrakcji, projektowaniu przestrzeni zabaw i nauce rozwoju dziecka.",
      readMoreLabel: "Czytaj artykuł",
      readTimeLabel: "min czytania",
      minutesShortLabel: "min",
      allCategoriesLabel: "Wszystkie",
      backToBlogLabel: "Wróć do bloga",
      relatedArticlesTitle: "Podobne artykuły",
      authorLabel: "Autor",
      emptyStateText: "W tej kategorii nie ma jeszcze artykułów.",
    },
  } satisfies Localized<Record<string, unknown>>,
  blogCategories: [
    {
      slug: "business",
      color: "#FF4500",
      sortOrder: 1,
      locales: {
        en: { name: "Business" },
        uk: { name: "Бізнес" },
        ru: { name: "Бизнес" },
        pl: { name: "Biznes" },
      },
    },
    {
      slug: "design",
      color: "#0055FF",
      sortOrder: 2,
      locales: {
        en: { name: "Design" },
        uk: { name: "Дизайн" },
        ru: { name: "Дизайн" },
        pl: { name: "Design" },
      },
    },
    {
      slug: "safety",
      color: "#00C853",
      sortOrder: 3,
      locales: {
        en: { name: "Safety" },
        uk: { name: "Безпека" },
        ru: { name: "Безопасность" },
        pl: { name: "Bezpieczenstwo" },
      },
    },
    {
      slug: "attractions",
      color: "#8B00FF",
      sortOrder: 4,
      locales: {
        en: { name: "Attractions" },
        uk: { name: "Атракціони" },
        ru: { name: "Аттракционы" },
        pl: { name: "Atrakcje" },
      },
    },
    {
      slug: "lifestyle",
      color: "#FF1493",
      sortOrder: 5,
      locales: {
        en: { name: "Lifestyle" },
        uk: { name: "Стиль життя" },
        ru: { name: "Образ жизни" },
        pl: { name: "Styl zycia" },
      },
    },
  ],
  blogPosts: [
    {
      slug: "indoor-play-retail",
      categorySlug: "business",
      publishDate: "2024-11-12",
      readTimeMinutes: 7,
      sortOrder: 1,
      featured: true,
      locales: sharedLocale({
        title: "How Indoor Play Parks Became the Most Profitable Square Metre in Retail",
        excerpt:
          "Footfall data from 28 shopping centres across Europe reveals a surprising winner in the battle for customer dwell time, and it is not the food court.",
        authorName: "Anna Dabrowska",
        authorRole: "Head of International Sales",
        coverImageUrl:
          "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "How Indoor Play Parks Became the Most Profitable Square Metre in Retail",
          metaDescription:
            "A practical look at why family play zones extend dwell time and increase revenue for shopping centres.",
        },
        bodySections: [
          {
            heading: "The data does not lie",
            text:
              "Across 28 shopping-centre projects, attractions with a dedicated children's play zone produced materially longer average dwell times than those without. That extra time translated into higher spend across food, fashion, and impulse categories.",
          },
          {
            heading: "Why parents spend more",
            text:
              "When children are occupied and safe, parents browse more freely and stay longer. That changes the commercial value of the entire venue, not only the attraction itself.",
          },
          {
            heading: "The ROI case",
            text:
              "A well-run indoor play installation can create direct ticket revenue, party revenue, and meaningful secondary lift for neighbouring tenants. For many operators, the investment case is strongest when the full ecosystem is considered.",
          },
          {
            heading: "What this means for operators",
            text:
              "A play zone is no longer a decorative amenity. In the right format, it becomes a serious retention and revenue strategy for retail, hospitality, and mixed-use destinations.",
          },
        ],
      }),
    },
    {
      slug: "labyrinth-spatial-intelligence",
      categorySlug: "design",
      publishDate: "2024-10-03",
      readTimeMinutes: 5,
      sortOrder: 2,
      featured: false,
      locales: sharedLocale({
        title: "The Science of Play: Why Labyrinths Boost Children's Spatial Intelligence",
        excerpt:
          "Our design team explains why wrong turns, hidden sightlines, and gradual challenge are so effective for developing brains.",
        authorName: "Marta Nowak",
        authorRole: "Head of Design",
        coverImageUrl:
          "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "Why Labyrinths Boost Children's Spatial Intelligence",
          metaDescription:
            "How maze-style attractions train orientation, persistence, and spatial reasoning through play.",
        },
        bodySections: [
          {
            heading: "What happens in the brain",
            text:
              "As children navigate a maze, they actively build and revise internal maps. Every turn and correction reinforces the brain systems responsible for orientation and spatial reasoning.",
          },
          {
            heading: "Dead ends are features",
            text:
              "The wrong path is often the most valuable moment. It asks a child to re-evaluate, adapt, and try again, which turns play into a form of executive-function training.",
          },
          {
            heading: "Designing for cognitive growth",
            text:
              "The best labyrinths layer challenge gradually. Wider early passages, subtle landmarks, and strategic visibility help children stay engaged without tipping into frustration.",
          },
        ],
      }),
    },
    {
      slug: "trampoline-park-launch-checklist",
      categorySlug: "attractions",
      publishDate: "2024-08-16",
      readTimeMinutes: 8,
      sortOrder: 3,
      featured: false,
      locales: sharedLocale({
        title: "Opening a Trampoline Park: The 4 Numbers to Model Before You Sign a Lease",
        excerpt:
          "Before the design moodboards and launch campaigns, there are four operational numbers that determine whether a trampoline park works commercially.",
        authorName: "Anna Dabrowska",
        authorRole: "Head of International Sales",
        coverImageUrl:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "Opening a Trampoline Park: The 4 Numbers to Model",
          metaDescription:
            "A practical checklist for operators planning a trampoline attraction from lease to launch.",
        },
        bodySections: [
          {
            heading: "Ceiling height and clear span",
            text:
              "A trampoline concept can look convincing on paper while failing in the real shell. Ceiling height, column grid, and circulation zones define what is actually buildable.",
          },
          {
            heading: "Commercial-grade equipment",
            text:
              "Consumer-grade products are not designed for repeated, multi-user commercial loads. Equipment specification has to be aligned with certification, maintenance, and insurance from day one.",
          },
          {
            heading: "Insurance and throughput",
            text:
              "Ticket pricing matters, but capacity, waiver flow, staffing, and claims exposure matter just as much. The right model balances all four before a lease is signed.",
          },
        ],
      }),
    },
    {
      slug: "playground-safety-checklist",
      categorySlug: "safety",
      publishDate: "2024-07-22",
      readTimeMinutes: 6,
      sortOrder: 4,
      featured: false,
      locales: sharedLocale({
        title: "5 Things to Check Before Buying a Commercial Playground",
        excerpt:
          "After hundreds of completed projects, these are the questions buyers forget to ask and the answers that separate good suppliers from great ones.",
        authorName: "Jan Kowalski",
        authorRole: "Founder and CEO",
        coverImageUrl:
          "https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "5 Things to Check Before Buying a Commercial Playground",
          metaDescription:
            "A practical safety and procurement checklist for commercial playground buyers.",
        },
        bodySections: [
          {
            heading: "Who manufactures the equipment",
            text:
              "If a supplier cannot clearly explain where the product is made and who controls quality, that uncertainty follows the entire project.",
          },
          {
            heading: "What the certification covers",
            text:
              "Certification on a component is not the same thing as conformity of a full installation. Buyers should confirm what applies to the finished build on their actual site.",
          },
          {
            heading: "How installation is handled",
            text:
              "Installation quality is a safety issue, not just a programme issue. Ask who installs, how they are trained, and who signs off the final inspection.",
          },
          {
            heading: "What the warranty really means",
            text:
              "The marketing summary is never enough. Read what is covered, what is excluded, and how claims are processed before the contract is signed.",
          },
        ],
      }),
    },
    {
      slug: "dubai-vs-stockholm",
      categorySlug: "lifestyle",
      publishDate: "2024-06-14",
      readTimeMinutes: 5,
      sortOrder: 5,
      featured: false,
      locales: sharedLocale({
        title: "Dubai vs Stockholm: What Two Opposite Markets Taught Us About How Children Play",
        excerpt:
          "Two very different projects showed us what is universal in children's behaviour and what needs to change from one market to another.",
        authorName: "Marta Nowak",
        authorRole: "Head of Design",
        coverImageUrl:
          "https://images.unsplash.com/photo-1630139026564-4a2bf5670879?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "Dubai vs Stockholm: What Two Opposite Markets Taught Us",
          metaDescription:
            "Lessons from two culturally different play-space projects and what they revealed about childhood behaviour.",
        },
        bodySections: [
          {
            heading: "What was universal",
            text:
              "In both projects, children quickly sought height, scanned the environment, and mapped the space before fully committing to play. That behaviour showed up regardless of context.",
          },
          {
            heading: "What was different",
            text:
              "Family movement patterns, desired sightlines, and the balance between group play and solo discovery changed dramatically between the two markets.",
          },
          {
            heading: "What design teams should learn",
            text:
              "Strong attractions respond to both human universals and local behaviour. The magic lives in designing for both at the same time.",
          },
        ],
      }),
    },
    {
      slug: "family-centre-membership-economics",
      categorySlug: "business",
      publishDate: "2024-05-28",
      readTimeMinutes: 6,
      sortOrder: 6,
      featured: false,
      locales: sharedLocale({
        title: "The Membership Model for Family Entertainment Centres Is Stronger Than Most Operators Think",
        excerpt:
          "Single-ticket revenue is visible, but recurring family membership revenue often becomes the real stabiliser in year two.",
        authorName: "Anna Dabrowska",
        authorRole: "Head of International Sales",
        coverImageUrl:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=700&fit=crop&auto=format",
        seo: {
          metaTitle: "The Membership Model for Family Entertainment Centres",
          metaDescription:
            "Why recurring family memberships can transform the economics of indoor entertainment venues.",
        },
        bodySections: [
          {
            heading: "Predictability beats spikes",
            text:
              "Birthday peaks and weekend spikes are important, but predictable recurring revenue creates calmer staffing, better stock planning, and stronger resilience in slower months.",
          },
          {
            heading: "Design influences retention",
            text:
              "Families renew when the venue keeps feeling fresh. Zoning, progressive challenge, and age-layered experiences matter as much as the pricing model itself.",
          },
          {
            heading: "Membership is an operational strategy",
            text:
              "The strongest membership programmes are coordinated with events, food and beverage, and school-holiday programming rather than treated as a simple discount product.",
          },
        ],
      }),
    },
  ],
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
    {
      slug: "trampoline-labyrinths",
      themeColor: "#FF6F00",
      emoji: "🤸",
      imageUrl:
        "https://images.unsplash.com/photo-1751235640841-d8d1035a80f0?w=700&h=500&fit=crop&auto=format",
      sortOrder: 7,
      featured: false,
      locales: {
        en: {
          name: "Trampoline Labyrinths",
          description:
            "Multi-level labyrinth systems with integrated trampoline elements for active indoor play spaces.",
          cardDescription: "Hybrid maze-and-jump attractions for high-energy family venues.",
        },
        uk: {
          name: "Лабіринти з батутом",
          description:
            "Багаторівневі лабіринтові системи з інтегрованими батутними елементами для активних критих ігрових просторів.",
          cardDescription: "Гібридні лабіринти та jump-атракціони для енергійних сімейних локацій.",
        },
        ru: {
          name: "Лабиринты с батутом",
          description:
            "Многоуровневые лабиринтовые системы со встроенными батутными элементами для активных крытых игровых пространств.",
          cardDescription: "Гибридные лабиринты и jump-аттракционы для энергичных семейных локаций.",
        },
        pl: {
          name: "Labirynty z trampoliną",
          description:
            "Wielopoziomowe systemy labiryntowe ze zintegrowanymi elementami trampolinowymi do aktywnych krytych stref zabawy.",
          cardDescription: "Hybrydowe labirynty i atrakcje jump do energetycznych przestrzeni rodzinnych.",
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
      categorySlug: "shopping-centers",
      sortOrder: 1,
      featured: true,
      themeColor: "#FF4500",
      countryFlag: "🇩🇪",
      usedProductSlugs: ["funmaze-pro-xl", "megatower-5000"],
      imageUrl:
        "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=700&h=500&fit=crop&auto=format",
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=900&h=700&fit=crop&auto=format",
          alt: "Indoor megapark play installation",
        },
        {
          url: "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          alt: "Child inside a colorful play labyrinth",
        },
        {
          url: "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=900&h=700&fit=crop&auto=format",
          alt: "Soft play tower inside a family destination",
        },
        {
          url: "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          alt: "Soft play and dry pool detail",
        },
      ]),
      locales: {
        en: {
          title: "FunWorld Hamburg",
          subtitle: "Indoor megapark for a flagship family destination.",
          projectType: "Indoor Megapark",
          description:
            "A flagship indoor family destination designed around high-throughput circulation, layered play moments, and a bold visual identity that works equally well for children and mall operators.",
          location: "Hamburg, Germany",
          clientName: "FunWorld Group",
          area: "1,800 m²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Kidsfera delivered a complex indoor park with impressive coordination, strong detailing, and a very smooth launch timeline.",
            author: "Marta Kowalska",
            role: "Operations Director, FunWorld Group",
          },
        },
        uk: {
          title: "FunWorld Hamburg",
          subtitle: "Критий мегапарк для флагманського сімейного центру.",
          projectType: "Критий мегапарк",
          description:
            "Флагманський критий сімейний простір, спроєктований для інтенсивного потоку відвідувачів, багаторівневої гри та виразного візуального образу, який добре працює і для дітей, і для операторів молу.",
          location: "Гамбург, Німеччина",
          clientName: "FunWorld Group",
          area: "1 800 м²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Kidsfera реалізувала складний критий парк з дуже чіткою координацією, якісними деталями та плавним запуском.",
            author: "Марта Ковальська",
            role: "Операційна директорка, FunWorld Group",
          },
        },
        ru: {
          title: "FunWorld Hamburg",
          subtitle: "Крытый мегапарк для флагманского семейного центра.",
          projectType: "Крытый мегапарк",
          description:
            "Флагманское крытое семейное пространство, спроектированное под высокий поток посетителей, многоуровневую игру и яркий визуальный образ, одинаково удобный для детей и операторов торгового центра.",
          location: "Гамбург, Германия",
          clientName: "FunWorld Group",
          area: "1 800 м²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Kidsfera реализовала сложный крытый парк с очень точной координацией, качественной проработкой и плавным запуском.",
            author: "Марта Ковальска",
            role: "Операционный директор, FunWorld Group",
          },
        },
        pl: {
          title: "FunWorld Hamburg",
          subtitle: "Kryty megapark dla flagowego centrum rodzinnego.",
          projectType: "Kryty megapark",
          description:
            "Flagowa rodzinna strefa indoor zaprojektowana pod duży ruch odwiedzających, wielopoziomową zabawę i wyrazisty charakter wizualny atrakcyjny zarówno dla dzieci, jak i operatora centrum.",
          location: "Hamburg, Niemcy",
          clientName: "FunWorld Group",
          area: "1 800 m²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Kidsfera zrealizowała złożony park kryty z bardzo dobrą koordynacją, mocnym detalem i sprawnym harmonogramem otwarcia.",
            author: "Marta Kowalska",
            role: "Dyrektor operacyjna, FunWorld Group",
          },
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "poznan-city-park",
      categorySlug: "outdoor-parks",
      sortOrder: 2,
      featured: true,
      themeColor: "#0055FF",
      countryFlag: "🇵🇱",
      usedProductSlugs: ["naturepark-classic", "ropenet-adventure"],
      imageUrl:
        "https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?w=700&h=500&fit=crop&auto=format",
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?w=900&h=700&fit=crop&auto=format",
          alt: "Outdoor playground in a city park",
        },
        {
          url: "https://images.unsplash.com/photo-1771169204750-3b1b20d98053?w=900&h=700&fit=crop&auto=format",
          alt: "Outdoor playground equipment",
        },
        {
          url: "https://images.unsplash.com/photo-1759776050712-2b7880af8cd4?w=900&h=700&fit=crop&auto=format",
          alt: "Play structure detail in an outdoor park",
        },
      ]),
      locales: {
        en: {
          title: "Poznań City Park",
          subtitle: "Owl-themed outdoor playground with natural materials.",
          projectType: "Outdoor Playground",
          description:
            "A civic outdoor playground scheme built around natural materials, rope movement, and a memorable owl-led theme that fits a public-park context without losing commercial-grade durability.",
          location: "Poznań, Poland",
          clientName: "City of Poznań",
          area: "950 m²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "The playground feels welcoming, durable, and instantly recognizable for local families. It became a natural anchor for the park.",
            author: "Anna Michalak",
            role: "Urban Projects Coordinator, City of Poznań",
          },
        },
        uk: {
          title: "Poznań City Park",
          subtitle: "Вуличний майданчик у тематиці сови з природними матеріалами.",
          projectType: "Вуличний майданчик",
          description:
            "Муніципальний вуличний майданчик, побудований навколо природних матеріалів, канатної активності та виразної тематики сови, яка добре працює в міському парку без втрати комерційної міцності.",
          location: "Познань, Польща",
          clientName: "Місто Познань",
          area: "950 м²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Майданчик вийшов гостинним, міцним і дуже впізнаваним для місцевих родин. Він став природним центром усього парку.",
            author: "Анна Міхалак",
            role: "Координаторка міських проєктів, місто Познань",
          },
        },
        ru: {
          title: "Poznań City Park",
          subtitle: "Уличная площадка в тематике совы с натуральными материалами.",
          projectType: "Уличная площадка",
          description:
            "Муниципальная уличная площадка, построенная вокруг натуральных материалов, канатной активности и яркой темы совы, которая хорошо работает в городском парке без потери коммерческой прочности.",
          location: "Познань, Польша",
          clientName: "Город Познань",
          area: "950 м²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Площадка получилась дружелюбной, прочной и очень узнаваемой для местных семей. Она стала естественным центром всего парка.",
            author: "Анна Михалак",
            role: "Координатор городских проектов, город Познань",
          },
        },
        pl: {
          title: "Poznań City Park",
          subtitle: "Plac zabaw w motywie sowy z naturalnymi materiałami.",
          projectType: "Plac zabaw",
          description:
            "Miejski plac zabaw oparty na naturalnych materiałach, ruchu linowym i wyrazistym motywie sowy, który dobrze wpisuje się w park publiczny bez utraty trwałości klasy komercyjnej.",
          location: "Poznań, Polska",
          clientName: "Miasto Poznań",
          area: "950 m²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Plac zabaw okazał się przyjazny, trwały i od razu rozpoznawalny dla lokalnych rodzin. Stał się naturalnym sercem całego parku.",
            author: "Anna Michalak",
            role: "Koordynatorka projektów miejskich, Miasto Poznań",
          },
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "kidspace-dubai",
      categorySlug: "shopping-centers",
      sortOrder: 3,
      featured: true,
      themeColor: "#141210",
      countryFlag: "🇦🇪",
      usedProductSlugs: ["megatower-5000", "splashpit-xl"],
      imageUrl:
        "https://images.unsplash.com/photo-1630139026564-4a2bf5670879?w=700&h=500&fit=crop&auto=format",
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1630139026564-4a2bf5670879?w=900&h=700&fit=crop&auto=format",
          alt: "Premium indoor playground zone",
        },
        {
          url: "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=900&h=700&fit=crop&auto=format",
          alt: "Indoor attraction tower with slides",
        },
        {
          url: "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          alt: "Dry pool and soft play area",
        },
      ]),
      locales: {
        en: {
          title: "KidSpace Dubai",
          subtitle: "Premium indoor attraction tailored to a hospitality venue.",
          projectType: "Premium Indoor",
          description:
            "A premium hospitality-oriented indoor concept balancing immersive soft play, polished finishes, and compact circulation logic for a venue that needed both wow-factor and operational clarity.",
          location: "Dubai, United Arab Emirates",
          clientName: "KidSpace Hospitality",
          area: "1,250 m²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "The final park feels premium, easy to supervise, and highly photogenic, which mattered a lot for our hospitality audience.",
            author: "Amal Nasser",
            role: "General Manager, KidSpace Hospitality",
          },
        },
        uk: {
          title: "KidSpace Dubai",
          subtitle: "Преміальний критий атракціон для готельно-розважальної локації.",
          projectType: "Преміальний indoor",
          description:
            "Преміальний критий концепт для hospitality-локації, який поєднує занурювальний soft play, акуратні оздоблення та компактну логіку руху для простору, де важливі і wow-ефект, і операційна зручність.",
          location: "Дубай, ОАЕ",
          clientName: "KidSpace Hospitality",
          area: "1 250 м²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Готовий парк виглядає преміально, його легко контролювати, і він дуже фотогенічний, що було важливо для нашої hospitality-аудиторії.",
            author: "Амал Нассер",
            role: "Генеральна менеджерка, KidSpace Hospitality",
          },
        },
        ru: {
          title: "KidSpace Dubai",
          subtitle: "Премиальный крытый аттракцион для гостинично-развлекательной площадки.",
          projectType: "Премиальный indoor",
          description:
            "Премиальный крытый концепт для hospitality-объекта, сочетающий immersive soft play, аккуратную отделку и компактную логику движения для площадки, где важны и wow-эффект, и операционная ясность.",
          location: "Дубай, ОАЭ",
          clientName: "KidSpace Hospitality",
          area: "1 250 м²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Готовый парк выглядит премиально, его легко контролировать, и он очень фотогеничен, что было важно для нашей hospitality-аудитории.",
            author: "Амал Нассер",
            role: "Генеральный менеджер, KidSpace Hospitality",
          },
        },
        pl: {
          title: "KidSpace Dubai",
          subtitle: "Premiumowa atrakcja kryta dla obiektu hospitality.",
          projectType: "Premium indoor",
          description:
            "Premiumowy koncept indoor dla obiektu hospitality, łączący immersyjną strefę soft play, dopracowane wykończenia i zwartą logikę ruchu w miejscu, gdzie liczył się zarówno efekt wow, jak i przejrzysta obsługa.",
          location: "Dubaj, ZEA",
          clientName: "KidSpace Hospitality",
          area: "1 250 m²",
          yearLabel: "2025",
          testimonial: {
            quote:
              "Końcowy park wygląda premium, jest łatwy do nadzoru i bardzo fotogeniczny, co było ważne dla naszej grupy gości.",
            author: "Amal Nasser",
            role: "General Manager, KidSpace Hospitality",
          },
        },
      } satisfies Localized<Record<string, unknown>>,
    },
    {
      slug: "leapfrog-stockholm",
      categorySlug: "soft-play",
      sortOrder: 4,
      featured: true,
      themeColor: "#FF1493",
      countryFlag: "🇸🇪",
      usedProductSlugs: ["splashpit-xl", "homehaven-mini"],
      imageUrl:
        "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=700&h=500&fit=crop&auto=format",
      gallery: sharedGallery([
        {
          url: "https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=900&h=700&fit=crop&auto=format",
          alt: "Soft play zone in Stockholm",
        },
        {
          url: "https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=900&h=700&fit=crop&auto=format",
          alt: "Dry pool and toddler soft play detail",
        },
        {
          url: "https://images.unsplash.com/photo-1764419613897-8d76d0c0c850?w=900&h=700&fit=crop&auto=format",
          alt: "Interactive play corridor for children",
        },
      ]),
      locales: {
        en: {
          title: "Leapfrog Stockholm",
          subtitle: "Soft play zone with color-led toddler programming.",
          projectType: "Soft Play Zone",
          description:
            "A soft-play environment planned for toddler programming, parent visibility, and a cheerful color-led atmosphere that keeps the space active through repeat family visits.",
          location: "Stockholm, Sweden",
          clientName: "Leapfrog Family Club",
          area: "620 m²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Parents immediately understood the space, children stayed engaged longer, and the zone now supports our daily programming beautifully.",
            author: "Elin Bergstrom",
            role: "Operations Lead, Leapfrog Family Club",
          },
        },
        uk: {
          title: "Leapfrog Stockholm",
          subtitle: "Soft-play зона з кольоровим програмуванням для малюків.",
          projectType: "Soft-play зона",
          description:
            "Soft-play простір, спланований для програм для малюків, хорошої видимості для батьків та яскравої кольорової атмосфери, яка підтримує регулярні сімейні візити.",
          location: "Стокгольм, Швеція",
          clientName: "Leapfrog Family Club",
          area: "620 м²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Батьки одразу зрозуміли простір, діти довше залишаються залученими, а зона тепер чудово підтримує наші щоденні програми.",
            author: "Елін Бергстрем",
            role: "Керівниця операцій, Leapfrog Family Club",
          },
        },
        ru: {
          title: "Leapfrog Stockholm",
          subtitle: "Soft-play зона с цветовым зонированием для малышей.",
          projectType: "Soft-play зона",
          description:
            "Soft-play пространство, спланированное для программ для малышей, хорошей видимости для родителей и яркой цветовой атмосферы, поддерживающей регулярные семейные визиты.",
          location: "Стокгольм, Швеция",
          clientName: "Leapfrog Family Club",
          area: "620 м²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Родители сразу поняли логику пространства, дети стали дольше вовлекаться, а зона теперь отлично поддерживает наши ежедневные программы.",
            author: "Элин Бергстром",
            role: "Руководитель операционной деятельности, Leapfrog Family Club",
          },
        },
        pl: {
          title: "Leapfrog Stockholm",
          subtitle: "Strefa soft play z kolorystycznym programem dla maluchów.",
          projectType: "Strefa soft play",
          description:
            "Przestrzeń soft play zaplanowana pod programy dla maluchów, dobrą widoczność dla rodziców i radosną kolorystyczną atmosferę, która zachęca rodziny do częstych powrotów.",
          location: "Sztokholm, Szwecja",
          clientName: "Leapfrog Family Club",
          area: "620 m²",
          yearLabel: "2024",
          testimonial: {
            quote:
              "Rodzice od razu zrozumieli układ przestrzeni, dzieci dłużej pozostają zaangażowane, a strefa świetnie wspiera nasz codzienny program.",
            author: "Elin Bergstrom",
            role: "Operations Lead, Leapfrog Family Club",
          },
        },
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
