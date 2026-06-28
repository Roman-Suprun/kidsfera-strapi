"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kidsfera_1 = require("./seed/kidsfera");
const media_library_1 = require("./utils/media-library");
const DEFAULT_LOCALE = 'en';
const STORE_UIDS = [
    'api::site-setting.site-setting',
    'api::home-page.home-page',
    'api::categories-page.categories-page',
    'api::catalog-page.catalog-page',
    'api::product-page.product-page',
    'api::category.category',
    'api::product.product',
    'api::project.project',
    'api::testimonial.testimonial',
];
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
async function createLocalizedSingle(strapi, uid, dataByLocale) {
    const created = await strapi.documents(uid).create({
        locale: DEFAULT_LOCALE,
        data: dataByLocale[DEFAULT_LOCALE],
    });
    for (const locale of kidsfera_1.kidsferaSeed.languages) {
        if (locale === DEFAULT_LOCALE) {
            continue;
        }
        await strapi.documents(uid).update({
            documentId: created.documentId,
            locale,
            data: dataByLocale[locale],
        });
    }
}
async function seedCategories(strapi) {
    const categoryIds = new Map();
    for (const item of kidsfera_1.kidsferaSeed.categories) {
        const created = await strapi.documents('api::category.category').create({
            locale: DEFAULT_LOCALE,
            data: {
                slug: item.slug,
                themeColor: item.themeColor,
                emoji: item.emoji,
                imageUrl: item.imageUrl,
                sortOrder: item.sortOrder,
                featured: item.featured,
                ...item.locales[DEFAULT_LOCALE],
            },
        });
        categoryIds.set(item.slug, created.documentId);
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            await strapi.documents('api::category.category').update({
                documentId: created.documentId,
                locale,
                data: {
                    slug: item.slug,
                    ...item.locales[locale],
                },
            });
        }
    }
    return categoryIds;
}
async function seedProducts(strapi, categoryIds) {
    for (const item of kidsfera_1.kidsferaSeed.products) {
        const categoryDocumentId = categoryIds.get(item.categorySlug);
        if (!categoryDocumentId) {
            continue;
        }
        const created = await strapi.documents('api::product.product').create({
            locale: DEFAULT_LOCALE,
            data: {
                slug: item.slug,
                sortOrder: item.sortOrder,
                featured: item.featured,
                category: { documentId: categoryDocumentId },
                certifications: item.certifications[DEFAULT_LOCALE],
                gallery: item.gallery[DEFAULT_LOCALE],
                ...item.locales[DEFAULT_LOCALE],
            },
        });
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            await strapi.documents('api::product.product').update({
                documentId: created.documentId,
                locale,
                data: {
                    slug: item.slug,
                    certifications: item.certifications[locale],
                    gallery: item.gallery[locale],
                    ...item.locales[locale],
                },
            });
        }
    }
}
async function seedProjects(strapi) {
    for (const item of kidsfera_1.kidsferaSeed.projects) {
        const created = await strapi.documents('api::project.project').create({
            locale: DEFAULT_LOCALE,
            data: {
                slug: item.slug,
                sortOrder: item.sortOrder,
                featured: item.featured,
                imageUrl: item.imageUrl,
                ...item.locales[DEFAULT_LOCALE],
            },
        });
        for (const locale of kidsfera_1.kidsferaSeed.languages) {
            if (locale === DEFAULT_LOCALE) {
                continue;
            }
            await strapi.documents('api::project.project').update({
                documentId: created.documentId,
                locale,
                data: {
                    slug: item.slug,
                    ...item.locales[locale],
                },
            });
        }
    }
}
async function seedTestimonials(strapi) {
    for (const item of kidsfera_1.kidsferaSeed.testimonials) {
        const created = await strapi.documents('api::testimonial.testimonial').create({
            locale: DEFAULT_LOCALE,
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
        if (autoSeedEnabled && (await shouldSeed(strapi))) {
            await createLocalizedSingle(strapi, 'api::site-setting.site-setting', kidsfera_1.kidsferaSeed.siteSettings);
            await createLocalizedSingle(strapi, 'api::home-page.home-page', kidsfera_1.kidsferaSeed.homePage);
            await createLocalizedSingle(strapi, 'api::categories-page.categories-page', kidsfera_1.kidsferaSeed.categoriesPage);
            await createLocalizedSingle(strapi, 'api::catalog-page.catalog-page', kidsfera_1.kidsferaSeed.catalogPage);
            await createLocalizedSingle(strapi, 'api::product-page.product-page', kidsfera_1.kidsferaSeed.productPage);
            const categoryIds = await seedCategories(strapi);
            await seedProducts(strapi, categoryIds);
            await seedProjects(strapi);
            await seedTestimonials(strapi);
        }
        await (0, media_library_1.syncAllMediaFields)(strapi, kidsfera_1.kidsferaSeed.languages);
    },
};
