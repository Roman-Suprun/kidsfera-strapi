import type { Core } from '@strapi/strapi';

import { kidsferaSeed } from './seed/kidsfera';
import { createMediaCache, uploadImageFromUrl } from './utils/media-library';

const DEFAULT_LOCALE = 'en';
const PUBLISHED_STATUS = 'published';
const STORE_UIDS = [
  'api::site-setting.site-setting',
  'api::home-page.home-page',
  'api::about-page.about-page',
  'api::blog-page.blog-page',
  'api::delivery-payment-page.delivery-payment-page',
  'api::privacy-policy-page.privacy-policy-page',
  'api::gdpr-page.gdpr-page',
  'api::categories-page.categories-page',
  'api::catalog-page.catalog-page',
  'api::projects-page.projects-page',
  'api::product-page.product-page',
  'api::blog-category.blog-category',
  'api::blog-post.blog-post',
  'api::category.category',
  'api::product.product',
  'api::project.project',
  'api::testimonial.testimonial',
  'api::feedback.feedback',
] as const;
const PUBLIC_CREATE_UIDS = ['api::feedback.feedback'] as const;
const LEGAL_FOOTER_HREFS: Record<string, Record<string, string>> = {
  en: {
    'Privacy Policy': '/privacy-policy',
    GDPR: '/gdpr',
  },
  uk: {
    'Конфіденційність': '/privacy-policy',
    GDPR: '/gdpr',
  },
  ru: {
    'Конфиденциальность': '/privacy-policy',
    GDPR: '/gdpr',
  },
  pl: {
    'Polityka prywatności': '/privacy-policy',
    RODO: '/gdpr',
  },
};

type MediaCache = ReturnType<typeof createMediaCache>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getString(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0 ? value : null;
}

function addMissingLegalFooterLinks(locale: string, footerLinkGroups: unknown) {
  if (!Array.isArray(footerLinkGroups)) {
    return null;
  }

  const hrefsByLabel = LEGAL_FOOTER_HREFS[locale];

  if (!hrefsByLabel) {
    return null;
  }

  let hasChanges = false;

  const nextGroups = footerLinkGroups.map((group) => {
    if (!isRecord(group) || !Array.isArray(group.items)) {
      return group;
    }

    const nextItems = group.items.map((item) => {
      if (!isRecord(item) || getString(item.href)) {
        return item;
      }

      const label = getString(item.label);
      const href = label ? hrefsByLabel[label] : null;

      if (!href) {
        return item;
      }

      hasChanges = true;

      return {
        ...item,
        href,
      };
    });

    return {
      ...group,
      items: nextItems,
    };
  });

  return hasChanges ? nextGroups : null;
}

async function transformMediaFields(
  strapi: Core.Strapi,
  value: unknown,
  cache: MediaCache,
): Promise<unknown> {
  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => transformMediaFields(strapi, item, cache)));
  }

  if (!isRecord(value)) {
    return value;
  }

  const nextValue: Record<string, unknown> = {};

  for (const [key, nestedValue] of Object.entries(value)) {
    if (key === 'ogImageUrl') {
      const url = getString(nestedValue);
      const mediaId = url
        ? await uploadImageFromUrl(
            strapi,
            url,
            getString(value.metaTitle) ?? getString(value.ogTitle),
            cache,
          )
        : null;

      if (mediaId) {
        nextValue.ogImage = mediaId;
      }

      continue;
    }

    if (key.endsWith('ImageUrl')) {
      const url = getString(nestedValue);
      const targetKey = key === 'imageUrl' ? 'image' : key.replace(/Url$/, '');
      const alt =
        getString(value.imageAlt) ??
        getString(value.title) ??
        getString(value.name) ??
        getString(value.subtitle);
      const mediaId = url ? await uploadImageFromUrl(strapi, url, alt, cache) : null;

      if (mediaId) {
        nextValue[targetKey] = mediaId;
      }

      continue;
    }

    if (key === 'url' && getString(value.alt)) {
      const url = getString(nestedValue);
      const mediaId = url ? await uploadImageFromUrl(strapi, url, getString(value.alt), cache) : null;

      if (mediaId) {
        nextValue.image = mediaId;
      }

      continue;
    }

    nextValue[key] = await transformMediaFields(strapi, nestedValue, cache);
  }

  return nextValue;
}

async function ensureLocales(strapi: Core.Strapi) {
  const localeService = strapi.plugin('i18n').service('locales');

  for (const locale of kidsferaSeed.locales) {
    const existingLocale = await localeService.findByCode(locale.code);

    if (!existingLocale) {
      await localeService.create(locale);
    }
  }

  const currentDefault = await localeService.getDefaultLocale();

  if (currentDefault !== DEFAULT_LOCALE) {
    await localeService.setDefaultLocale({ code: DEFAULT_LOCALE });
  }
}

async function enablePublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    return;
  }

  const roleService = strapi.plugin('users-permissions').service('role');
  const role = await roleService.findOne(publicRole.id);
  const nextPermissions = JSON.parse(JSON.stringify(role.permissions));

  for (const uid of STORE_UIDS) {
    const model = strapi.contentType(uid);

    if (!model) {
      continue;
    }

    const controllerName = model.info.singularName;
    const apiName = uid.split('.')[0];

    if (!apiName) {
      continue;
    }

    if (!nextPermissions[apiName]) {
      nextPermissions[apiName] = { controllers: {} };
    }

    if (!nextPermissions[apiName].controllers[controllerName]) {
      nextPermissions[apiName].controllers[controllerName] = {};
    }

    nextPermissions[apiName].controllers[controllerName].find = { enabled: true };
    nextPermissions[apiName].controllers[controllerName].findOne = { enabled: true };
  }

  for (const uid of PUBLIC_CREATE_UIDS) {
    const model = strapi.contentType(uid);

    if (!model) {
      continue;
    }

    const controllerName = model.info.singularName;
    const apiName = uid.split('.')[0];

    if (!apiName) {
      continue;
    }

    if (!nextPermissions[apiName]) {
      nextPermissions[apiName] = { controllers: {} };
    }

    if (!nextPermissions[apiName].controllers[controllerName]) {
      nextPermissions[apiName].controllers[controllerName] = {};
    }

    nextPermissions[apiName].controllers[controllerName].create = { enabled: true };
  }

  await roleService.updateRole(publicRole.id, {
    ...role,
    permissions: nextPermissions,
  });
}

async function createLocalizedSingle(
  strapi: Core.Strapi,
  uid: string,
  dataByLocale: Record<string, Record<string, unknown>>,
  cache: MediaCache,
) {
  const defaultData = (await transformMediaFields(
    strapi,
    dataByLocale[DEFAULT_LOCALE],
    cache,
  )) as Record<string, unknown>;
  const created = await strapi.documents(uid as any).create({
    locale: DEFAULT_LOCALE,
    status: PUBLISHED_STATUS,
    data: defaultData as any,
  });

  for (const locale of kidsferaSeed.languages) {
    if (locale === DEFAULT_LOCALE) {
      continue;
    }

    const localizedData = (await transformMediaFields(
      strapi,
      dataByLocale[locale],
      cache,
    )) as Record<string, unknown>;

    await strapi.documents(uid as any).update({
      documentId: created.documentId,
      locale,
      status: PUBLISHED_STATUS,
      data: localizedData as any,
    });
  }
}

async function ensureLocalizedSingle(
  strapi: Core.Strapi,
  uid: string,
  dataByLocale: Record<string, Record<string, unknown>>,
  cache: MediaCache,
) {
  const existingDefault = await strapi.db.query(uid).findOne({
    where: { locale: DEFAULT_LOCALE },
  });

  if (!existingDefault) {
    await createLocalizedSingle(strapi, uid, dataByLocale, cache);
  }
}

async function ensureSiteSettingsFields(strapi: Core.Strapi) {
  for (const locale of kidsferaSeed.languages) {
    const existing = await strapi.db.query('api::site-setting.site-setting').findOne({
      where: { locale },
    });

    if (!existing?.documentId) {
      continue;
    }

    const nextData: Record<string, unknown> = {};

    if (!existing.navAboutLabel) {
      nextData.navAboutLabel = kidsferaSeed.siteSettings[locale].navAboutLabel;
    }

    if (!existing.navBlogLabel) {
      nextData.navBlogLabel = kidsferaSeed.siteSettings[locale].navBlogLabel;
    }

    if (!Array.isArray(existing.footerLinkGroups) || existing.footerLinkGroups.length === 0) {
      nextData.footerLinkGroups = kidsferaSeed.siteSettings[locale].footerLinkGroups;
    }
    else {
      const nextFooterGroups = addMissingLegalFooterLinks(locale, existing.footerLinkGroups);

      if (nextFooterGroups) {
        nextData.footerLinkGroups = nextFooterGroups;
      }
    }

    if (!Array.isArray(existing.footerBadges) || existing.footerBadges.length === 0) {
      nextData.footerBadges = kidsferaSeed.siteSettings[locale].footerBadges;
    }

    if (!Object.keys(nextData).length) {
      continue;
    }

    await strapi.documents('api::site-setting.site-setting').update({
      documentId: existing.documentId,
      locale,
      status: PUBLISHED_STATUS,
      data: nextData as any,
    });
  }
}

async function seedCategories(strapi: Core.Strapi, cache: MediaCache) {
  const categoryIds = new Map<string, string>();

  for (const item of kidsferaSeed.categories) {
    const defaultData = (await transformMediaFields(
      strapi,
      {
        slug: item.slug,
        themeColor: item.themeColor,
        emoji: item.emoji,
        imageUrl: item.imageUrl,
        sortOrder: item.sortOrder,
        featured: item.featured,
        ...item.locales[DEFAULT_LOCALE],
      },
      cache,
    )) as Record<string, unknown>;

    const created = await strapi.documents('api::category.category').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: defaultData as any,
    });

    categoryIds.set(item.slug, created.documentId);

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      const localizedData = (await transformMediaFields(
        strapi,
        {
          slug: item.slug,
          themeColor: item.themeColor,
          emoji: item.emoji,
          sortOrder: item.sortOrder,
          featured: item.featured,
          ...item.locales[locale],
        },
        cache,
      )) as Record<string, unknown>;

      await strapi.documents('api::category.category').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: localizedData as any,
      });
    }
  }

  return categoryIds;
}

async function ensureCategories(strapi: Core.Strapi, cache: MediaCache) {
  for (const item of kidsferaSeed.categories) {
    const existing = await strapi.db.query('api::category.category').findOne({
      where: { slug: item.slug, locale: DEFAULT_LOCALE },
    });

    if (existing) {
      continue;
    }

    const defaultData = (await transformMediaFields(
      strapi,
      {
        slug: item.slug,
        themeColor: item.themeColor,
        emoji: item.emoji,
        imageUrl: item.imageUrl,
        sortOrder: item.sortOrder,
        featured: item.featured,
        ...item.locales[DEFAULT_LOCALE],
      },
      cache,
    )) as Record<string, unknown>;

    const created = await strapi.documents('api::category.category').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: defaultData as any,
    });

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      const localizedData = (await transformMediaFields(
        strapi,
        {
          slug: item.slug,
          themeColor: item.themeColor,
          emoji: item.emoji,
          sortOrder: item.sortOrder,
          featured: item.featured,
          ...item.locales[locale],
        },
        cache,
      )) as Record<string, unknown>;

      await strapi.documents('api::category.category').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: localizedData as any,
      });
    }
  }
}

async function seedBlogCategories(strapi: Core.Strapi) {
  const categoryIds = new Map<string, string>();

  for (const item of kidsferaSeed.blogCategories) {
    const created = await strapi.documents('api::blog-category.blog-category').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: {
        slug: item.slug,
        color: item.color,
        sortOrder: item.sortOrder,
        ...item.locales[DEFAULT_LOCALE],
      } as any,
    });

    categoryIds.set(item.slug, created.documentId);

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      await strapi.documents('api::blog-category.blog-category').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: {
          slug: item.slug,
          color: item.color,
          sortOrder: item.sortOrder,
          ...item.locales[locale],
        } as any,
      });
    }
  }

  return categoryIds;
}

async function seedProducts(
  strapi: Core.Strapi,
  categoryIds: Map<string, string>,
  cache: MediaCache,
) {
  const productIds = new Map<string, string>();

  for (const item of kidsferaSeed.products) {
    const categorySlugs = (
      ("categorySlugs" in item ? item.categorySlugs : undefined) ?? [item.categorySlug]
    ) as string[];
    const categoryRelations = categorySlugs
      .map((slug) => categoryIds.get(slug))
      .filter((documentId): documentId is string => Boolean(documentId))
      .map((documentId) => ({ documentId }));

    if (!categoryRelations.length) {
      continue;
    }

    const defaultData = (await transformMediaFields(
      strapi,
      {
        slug: item.slug,
        sortOrder: item.sortOrder,
        featured: item.featured,
        category: categoryRelations,
        certifications: item.certifications[DEFAULT_LOCALE],
        gallery: item.gallery[DEFAULT_LOCALE],
        ...item.locales[DEFAULT_LOCALE],
      },
      cache,
    )) as Record<string, unknown>;

    const created = await strapi.documents('api::product.product').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: defaultData as any,
    });

    productIds.set(item.slug, created.documentId);

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      const localizedData = (await transformMediaFields(
        strapi,
        {
          slug: item.slug,
          sortOrder: item.sortOrder,
          featured: item.featured,
          category: categoryRelations,
          certifications: item.certifications[locale],
          gallery: item.gallery[locale],
          ...item.locales[locale],
        },
        cache,
      )) as Record<string, unknown>;

      await strapi.documents('api::product.product').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: localizedData as any,
      });
    }
  }

  return productIds;
}

async function seedProjects(
  strapi: Core.Strapi,
  categoryIds: Map<string, string>,
  productIds: Map<string, string>,
  cache: MediaCache,
) {
  for (const item of kidsferaSeed.projects) {
    const categorySlugs = (
      ("categorySlugs" in item ? item.categorySlugs : undefined) ?? [item.categorySlug]
    ) as string[];
    const categoryRelations = categorySlugs
      .map((slug) => categoryIds.get(slug))
      .filter((documentId): documentId is string => Boolean(documentId))
      .map((documentId) => ({ documentId }));
    const usedProducts = item.usedProductSlugs
      .map((slug) => productIds.get(slug))
      .filter((documentId): documentId is string => Boolean(documentId))
      .map((documentId) => ({ documentId }));
    const { projectType: _defaultProjectType, ...defaultLocaleFields } = item.locales[DEFAULT_LOCALE];

    const defaultData = (await transformMediaFields(
      strapi,
      {
        slug: item.slug,
        sortOrder: item.sortOrder,
        featured: item.featured,
        themeColor: item.themeColor,
        countryFlag: item.countryFlag,
        imageUrl: item.imageUrl,
        gallery: item.gallery[DEFAULT_LOCALE],
        ...(categoryRelations.length ? { projectType: categoryRelations } : {}),
        usedProducts,
        ...defaultLocaleFields,
      },
      cache,
    )) as Record<string, unknown>;

    const created = await strapi.documents('api::project.project').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: defaultData as any,
    });

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }
      const { projectType: _localizedProjectType, ...localizedFields } = item.locales[locale];

      const localizedData = (await transformMediaFields(
        strapi,
        {
          slug: item.slug,
          sortOrder: item.sortOrder,
          featured: item.featured,
          themeColor: item.themeColor,
          countryFlag: item.countryFlag,
          gallery: item.gallery[locale],
          ...(categoryRelations.length ? { projectType: categoryRelations } : {}),
          usedProducts,
          ...localizedFields,
        },
        cache,
      )) as Record<string, unknown>;

      await strapi.documents('api::project.project').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: localizedData as any,
      });
    }
  }
}

async function seedTestimonials(strapi: Core.Strapi) {
  for (const item of kidsferaSeed.testimonials) {
    const created = await strapi.documents('api::testimonial.testimonial').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: {
        sortOrder: item.sortOrder,
        featured: item.featured,
        rating: item.rating,
        ...item.locales[DEFAULT_LOCALE],
      } as any,
    });

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      await strapi.documents('api::testimonial.testimonial').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: item.locales[locale] as any,
      });
    }
  }
}

async function seedBlogPosts(
  strapi: Core.Strapi,
  blogCategoryIds: Map<string, string>,
  cache: MediaCache,
) {
  for (const item of kidsferaSeed.blogPosts) {
    const categoryDocumentId = blogCategoryIds.get(item.categorySlug);

    if (!categoryDocumentId) {
      continue;
    }

    const defaultData = (await transformMediaFields(
      strapi,
      {
        slug: item.slug,
        publishDate: item.publishDate,
        readTimeMinutes: item.readTimeMinutes,
        sortOrder: item.sortOrder,
        featured: item.featured,
        category: { documentId: categoryDocumentId },
        ...item.locales[DEFAULT_LOCALE],
      },
      cache,
    )) as Record<string, unknown>;

    const created = await strapi.documents('api::blog-post.blog-post').create({
      locale: DEFAULT_LOCALE,
      status: PUBLISHED_STATUS,
      data: defaultData as any,
    });

    for (const locale of kidsferaSeed.languages) {
      if (locale === DEFAULT_LOCALE) {
        continue;
      }

      const localizedData = (await transformMediaFields(
        strapi,
        {
          slug: item.slug,
          publishDate: item.publishDate,
          readTimeMinutes: item.readTimeMinutes,
          sortOrder: item.sortOrder,
          featured: item.featured,
          category: { documentId: categoryDocumentId },
          ...item.locales[locale],
        },
        cache,
      )) as Record<string, unknown>;

      await strapi.documents('api::blog-post.blog-post').update({
        documentId: created.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: localizedData as any,
      });
    }
  }
}

async function shouldSeed(strapi: Core.Strapi) {
  const existingSettings = await strapi.db.query('api::site-setting.site-setting').findOne({
    where: { locale: DEFAULT_LOCALE },
  });

  return !existingSettings;
}

async function isCollectionEmpty(strapi: Core.Strapi, uid: string) {
  const existingEntry = await strapi.db.query(uid).findOne({
    where: { locale: DEFAULT_LOCALE },
  });

  return !existingEntry;
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensureLocales(strapi);
    await enablePublicPermissions(strapi);

    const autoSeedEnabled = process.env.STRAPI_SEED_DEMO_CONTENT !== 'false';
    const mediaCache = createMediaCache();

    if (autoSeedEnabled && (await shouldSeed(strapi))) {
      await createLocalizedSingle(strapi, 'api::site-setting.site-setting', kidsferaSeed.siteSettings, mediaCache);
      await createLocalizedSingle(strapi, 'api::home-page.home-page', kidsferaSeed.homePage, mediaCache);
      await createLocalizedSingle(strapi, 'api::about-page.about-page', kidsferaSeed.aboutPage, mediaCache);
      await createLocalizedSingle(strapi, 'api::blog-page.blog-page', kidsferaSeed.blogPage, mediaCache);
      await createLocalizedSingle(
        strapi,
        'api::delivery-payment-page.delivery-payment-page',
        kidsferaSeed.deliveryPaymentPage,
        mediaCache,
      );
      await createLocalizedSingle(
        strapi,
        'api::privacy-policy-page.privacy-policy-page',
        kidsferaSeed.privacyPolicyPage,
        mediaCache,
      );
      await createLocalizedSingle(
        strapi,
        'api::gdpr-page.gdpr-page',
        kidsferaSeed.gdprPage,
        mediaCache,
      );
      await createLocalizedSingle(strapi, 'api::categories-page.categories-page', kidsferaSeed.categoriesPage, mediaCache);
      await createLocalizedSingle(strapi, 'api::catalog-page.catalog-page', kidsferaSeed.catalogPage, mediaCache);
      await createLocalizedSingle(strapi, 'api::projects-page.projects-page', kidsferaSeed.projectsPage, mediaCache);
      await createLocalizedSingle(strapi, 'api::product-page.product-page', kidsferaSeed.productPage, mediaCache);

      const categoryIds = await seedCategories(strapi, mediaCache);
      const blogCategoryIds = await seedBlogCategories(strapi);

      const productIds = await seedProducts(strapi, categoryIds, mediaCache);
      await seedProjects(strapi, categoryIds, productIds, mediaCache);
      await seedTestimonials(strapi);
      await seedBlogPosts(strapi, blogCategoryIds, mediaCache);
    }

    if (autoSeedEnabled) {
      await ensureLocalizedSingle(
        strapi,
        'api::about-page.about-page',
        kidsferaSeed.aboutPage,
        mediaCache,
      );
      await ensureLocalizedSingle(
        strapi,
        'api::blog-page.blog-page',
        kidsferaSeed.blogPage,
        mediaCache,
      );
      await ensureLocalizedSingle(
        strapi,
        'api::delivery-payment-page.delivery-payment-page',
        kidsferaSeed.deliveryPaymentPage,
        mediaCache,
      );
      await ensureLocalizedSingle(
        strapi,
        'api::privacy-policy-page.privacy-policy-page',
        kidsferaSeed.privacyPolicyPage,
        mediaCache,
      );
      await ensureLocalizedSingle(
        strapi,
        'api::gdpr-page.gdpr-page',
        kidsferaSeed.gdprPage,
        mediaCache,
      );
      await ensureLocalizedSingle(
        strapi,
        'api::projects-page.projects-page',
        kidsferaSeed.projectsPage,
        mediaCache,
      );
      await ensureSiteSettingsFields(strapi);
      await ensureCategories(strapi, mediaCache);

      if (await isCollectionEmpty(strapi, 'api::blog-category.blog-category')) {
        await seedBlogCategories(strapi);
      }

      if (await isCollectionEmpty(strapi, 'api::blog-post.blog-post')) {
        const categories = await strapi.documents('api::blog-category.blog-category').findMany({
          locale: DEFAULT_LOCALE,
          status: PUBLISHED_STATUS,
        });
        const categoryIds = new Map(
          (Array.isArray(categories) ? categories : []).map((category) => [category.slug, category.documentId]),
        );

        await seedBlogPosts(strapi, categoryIds, mediaCache);
      }
    }

  },
};
