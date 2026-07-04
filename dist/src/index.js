"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kidsfera_1 = require("./seed/kidsfera");
const media_library_1 = require("./utils/media-library");
const DEFAULT_LOCALE = 'en';
const PUBLISHED_STATUS = 'published';
const STORE_UIDS = [
    'api::site-setting.site-setting',
    'api::home-page.home-page',
    'api::about-page.about-page',
    'api::categories-page.categories-page',
    'api::catalog-page.catalog-page',
    'api::product-page.product-page',
    'api::category.category',
    'api::product.product',
    'api::project.project',
    'api::testimonial.testimonial',
];
function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function getString(value) {
    return typeof value === 'string' && value.trim().length > 0 ? value : null;
}
async function transformMediaFields(strapi, value, cache) {
    var _a, _b, _c, _d;
    if (Array.isArray(value)) {
        return Promise.all(value.map((item) => transformMediaFields(strapi, item, cache)));
    }
    if (!isRecord(value)) {
        return value;
    }
    const nextValue = {};
    for (const [key, nestedValue] of Object.entries(value)) {
        if (key === 'ogImageUrl') {
            const url = getString(nestedValue);
            const mediaId = url
                ? await (0, media_library_1.uploadImageFromUrl)(strapi, url, (_a = getString(value.metaTitle)) !== null && _a !== void 0 ? _a : getString(value.ogTitle), cache)
                : null;
            if (mediaId) {
                nextValue.ogImage = mediaId;
            }
            continue;
        }
        if (key.endsWith('ImageUrl')) {
            const url = getString(nestedValue);
            const targetKey = key === 'imageUrl' ? 'image' : key.replace(/Url$/, '');
            const alt = (_d = (_c = (_b = getString(value.imageAlt)) !== null && _b !== void 0 ? _b : getString(value.title)) !== null && _c !== void 0 ? _c : getString(value.name)) !== null && _d !== void 0 ? _d : getString(value.subtitle);
            const mediaId = url ? await (0, media_library_1.uploadImageFromUrl)(strapi, url, alt, cache) : null;
            if (mediaId) {
                nextValue[targetKey] = mediaId;
            }
            continue;
        }
        if (key === 'url' && getString(value.alt)) {
            const url = getString(nestedValue);
            const mediaId = url ? await (0, media_library_1.uploadImageFromUrl)(strapi, url, getString(value.alt), cache) : null;
            if (mediaId) {
                nextValue.image = mediaId;
            }
            continue;
        }
        nextValue[key] = await transformMediaFields(strapi, nestedValue, cache);
    }
    return nextValue;
}
async function ensureLocales(strapi) {
    const localeService = strapi.plugin('i18n').service('locales');
    for (const locale of kidsfera_1.kidsferaSeed.locales) {
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
async function enablePublicPermissions(strapi) {
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
    await roleService.updateRole(publicRole.id, {
        ...role,
        permissions: nextPermissions,
    });
}
async function createLocalizedSingle(strapi, uid, dataByLocale, cache) {
    const defaultData = (await transformMediaFields(strapi, dataByLocale[DEFAULT_LOCALE], cache));
    const created = await strapi.documents(uid).create({
        locale: DEFAULT_LOCALE,
        status: PUBLISHED_STATUS,
        data: defaultData,
    });
    for (const locale of kidsfera_1.kidsferaSeed.languages) {
        if (locale === DEFAULT_LOCALE) {
            continue;
        }
        const localizedData = (await transformMediaFields(strapi, dataByLocale[locale], cache));
        await strapi.documents(uid).update({
            documentId: created.documentId,
            locale,
            status: PUBLISHED_STATUS,
            data: localizedData,
        });
    }
}
async function ensureLocalizedSingle(strapi, uid, dataByLocale, cache) {
    const existingDefault = await strapi.db.query(uid).findOne({
        where: { locale: DEFAULT_LOCALE },
    });
    if (!existingDefault) {
        await createLocalizedSingle(strapi, uid, dataByLocale, cache);
    }
}
async function ensureSiteSettingsFields(strapi) {
    for (const locale of kidsfera_1.kidsferaSeed.languages) {
        const existing = await strapi.db.query('api::site-setting.site-setting').findOne({
            where: { locale },
        });
        if (!(existing === null || existing === void 0 ? void 0 : existing.documentId) || existing.navAboutLabel) {
            continue;
        }
        await strapi.documents('api::site-setting.site-setting').update({
            documentId: existing.documentId,
            locale,
            status: PUBLISHED_STATUS,
            data: {
                navAboutLabel: kidsfera_1.kidsferaSeed.siteSettings[locale].navAboutLabel,
            },
        });
    }
}
async function seedCategories(strapi, cache) {
    const categoryIds = new Map();
    for (const item of kidsfera_1.kidsferaSeed.categories) {
        const defaultData = (await transformMediaFields(strapi, {
            slug: item.slug,
            themeColor: item.themeColor,
            emoji: item.emoji,
            imageUrl: item.imageUrl,
            sortOrder: item.sortOrder,
            featured: item.featured,
            ...item.locales[DEFAULT_LOCALE],
        }, cache));
        const created = await strapi.documents('api::category.category').create({
            locale: DEFAULT_LOCALE,
            status: PUBLISHED_STATUS,
            data: defaultData,
        });
        categoryIds.set(item.slug, created.documentId);
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            const localizedData = (await transformMediaFields(strapi, {
                slug: item.slug,
                themeColor: item.themeColor,
                emoji: item.emoji,
                sortOrder: item.sortOrder,
                featured: item.featured,
                ...item.locales[locale],
            }, cache));
            await strapi.documents('api::category.category').update({
                documentId: created.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: localizedData,
            });
        }
    }
    return categoryIds;
}
async function seedProducts(strapi, categoryIds, cache) {
    var _a;
    const productIds = new Map();
    for (const item of kidsfera_1.kidsferaSeed.products) {
        const categorySlugs = ((_a = ("categorySlugs" in item ? item.categorySlugs : undefined)) !== null && _a !== void 0 ? _a : [item.categorySlug]);
        const categoryRelations = categorySlugs
            .map((slug) => categoryIds.get(slug))
            .filter((documentId) => Boolean(documentId))
            .map((documentId) => ({ documentId }));
        if (!categoryRelations.length) {
            continue;
        }
        const defaultData = (await transformMediaFields(strapi, {
            slug: item.slug,
            sortOrder: item.sortOrder,
            featured: item.featured,
            category: categoryRelations,
            certifications: item.certifications[DEFAULT_LOCALE],
            gallery: item.gallery[DEFAULT_LOCALE],
            ...item.locales[DEFAULT_LOCALE],
        }, cache));
        const created = await strapi.documents('api::product.product').create({
            locale: DEFAULT_LOCALE,
            status: PUBLISHED_STATUS,
            data: defaultData,
        });
        productIds.set(item.slug, created.documentId);
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            const localizedData = (await transformMediaFields(strapi, {
                slug: item.slug,
                sortOrder: item.sortOrder,
                featured: item.featured,
                category: categoryRelations,
                certifications: item.certifications[locale],
                gallery: item.gallery[locale],
                ...item.locales[locale],
            }, cache));
            await strapi.documents('api::product.product').update({
                documentId: created.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: localizedData,
            });
        }
    }
    return productIds;
}
async function seedProjects(strapi, categoryIds, productIds, cache) {
    var _a;
    for (const item of kidsfera_1.kidsferaSeed.projects) {
        const categorySlugs = ((_a = ("categorySlugs" in item ? item.categorySlugs : undefined)) !== null && _a !== void 0 ? _a : [item.categorySlug]);
        const categoryRelations = categorySlugs
            .map((slug) => categoryIds.get(slug))
            .filter((documentId) => Boolean(documentId))
            .map((documentId) => ({ documentId }));
        const usedProducts = item.usedProductSlugs
            .map((slug) => productIds.get(slug))
            .filter((documentId) => Boolean(documentId))
            .map((documentId) => ({ documentId }));
        const { projectType: _defaultProjectType, ...defaultLocaleFields } = item.locales[DEFAULT_LOCALE];
        const defaultData = (await transformMediaFields(strapi, {
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
        }, cache));
        const created = await strapi.documents('api::project.project').create({
            locale: DEFAULT_LOCALE,
            status: PUBLISHED_STATUS,
            data: defaultData,
        });
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            const { projectType: _localizedProjectType, ...localizedFields } = item.locales[locale];
            const localizedData = (await transformMediaFields(strapi, {
                slug: item.slug,
                sortOrder: item.sortOrder,
                featured: item.featured,
                themeColor: item.themeColor,
                countryFlag: item.countryFlag,
                gallery: item.gallery[locale],
                ...(categoryRelations.length ? { projectType: categoryRelations } : {}),
                usedProducts,
                ...localizedFields,
            }, cache));
            await strapi.documents('api::project.project').update({
                documentId: created.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: localizedData,
            });
        }
    }
}
async function seedTestimonials(strapi) {
    for (const item of kidsfera_1.kidsferaSeed.testimonials) {
        const created = await strapi.documents('api::testimonial.testimonial').create({
            locale: DEFAULT_LOCALE,
            status: PUBLISHED_STATUS,
            data: {
                sortOrder: item.sortOrder,
                featured: item.featured,
                rating: item.rating,
                ...item.locales[DEFAULT_LOCALE],
            },
        });
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            await strapi.documents('api::testimonial.testimonial').update({
                documentId: created.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: item.locales[locale],
            });
        }
    }
}
async function shouldSeed(strapi) {
    const existingSettings = await strapi.db.query('api::site-setting.site-setting').findOne({
        where: { locale: DEFAULT_LOCALE },
    });
    return !existingSettings;
}
exports.default = {
    register() { },
    async bootstrap({ strapi }) {
        await ensureLocales(strapi);
        await enablePublicPermissions(strapi);
        const autoSeedEnabled = process.env.STRAPI_SEED_DEMO_CONTENT !== 'false';
        const mediaCache = (0, media_library_1.createMediaCache)();
        if (autoSeedEnabled && (await shouldSeed(strapi))) {
            await createLocalizedSingle(strapi, 'api::site-setting.site-setting', kidsfera_1.kidsferaSeed.siteSettings, mediaCache);
            await createLocalizedSingle(strapi, 'api::home-page.home-page', kidsfera_1.kidsferaSeed.homePage, mediaCache);
            await createLocalizedSingle(strapi, 'api::about-page.about-page', kidsfera_1.kidsferaSeed.aboutPage, mediaCache);
            await createLocalizedSingle(strapi, 'api::categories-page.categories-page', kidsfera_1.kidsferaSeed.categoriesPage, mediaCache);
            await createLocalizedSingle(strapi, 'api::catalog-page.catalog-page', kidsfera_1.kidsferaSeed.catalogPage, mediaCache);
            await createLocalizedSingle(strapi, 'api::product-page.product-page', kidsfera_1.kidsferaSeed.productPage, mediaCache);
            const categoryIds = await seedCategories(strapi, mediaCache);
            const productIds = await seedProducts(strapi, categoryIds, mediaCache);
            await seedProjects(strapi, categoryIds, productIds, mediaCache);
            await seedTestimonials(strapi);
        }
        if (autoSeedEnabled) {
            await ensureLocalizedSingle(strapi, 'api::about-page.about-page', kidsfera_1.kidsferaSeed.aboutPage, mediaCache);
            await ensureSiteSettingsFields(strapi);
        }
    },
};
