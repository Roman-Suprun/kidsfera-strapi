"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncAllMediaFields = exports.uploadImageFromUrl = exports.createMediaCache = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
const promises_1 = __importDefault(require("node:fs/promises"));
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const SINGLE_TYPE_SEO_FIELDS = [
    { uid: "api::site-setting.site-setting", field: "defaultSeo" },
    { uid: "api::home-page.home-page", field: "seo" },
    { uid: "api::categories-page.categories-page", field: "seo" },
    { uid: "api::catalog-page.catalog-page", field: "seo" },
];
const PUBLISHED_STATUS = "published";
function createMediaCache() {
    return new Map();
}
exports.createMediaCache = createMediaCache;
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function hasMedia(value) {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return isRecord(value) && (typeof value.id === "number" || typeof value.url === "string");
}
function getUrl(value) {
    return typeof value === "string" && value.trim().length > 0 ? value : null;
}
function sanitizeRelation(value) {
    if (!isRecord(value) || typeof value.documentId !== "string") {
        return undefined;
    }
    return { documentId: value.documentId };
}
function sanitizeFeaturedProductComponent(value) {
    if (!isRecord(value)) {
        return value;
    }
    return {
        title: value.title,
        tagline: value.tagline,
        description: value.description,
        badge: value.badge,
        ctaLabel: value.ctaLabel,
        imageUrl: value.imageUrl,
        image: value.image,
        imageAlt: value.imageAlt,
        theme: value.theme,
        linkedCategory: sanitizeRelation(value.linkedCategory),
    };
}
function sanitizeImageLinkComponent(value) {
    if (!isRecord(value)) {
        return value;
    }
    return {
        url: value.url,
        image: value.image,
        alt: value.alt,
    };
}
function sanitizeSeoComponent(value) {
    if (!isRecord(value)) {
        return value;
    }
    return {
        metaTitle: value.metaTitle,
        metaDescription: value.metaDescription,
        ogTitle: value.ogTitle,
        ogDescription: value.ogDescription,
        canonicalPath: value.canonicalPath,
        ogImageUrl: value.ogImageUrl,
        ogImage: value.ogImage,
        noIndex: value.noIndex,
    };
}
function isMediaRecord(value) {
    return (typeof value.mime === "string" ||
        typeof value.provider === "string" ||
        ("formats" in value && typeof value.url === "string"));
}
function sanitizeDocumentInput(value, asRelation = true) {
    if (Array.isArray(value)) {
        return value.map((item) => sanitizeDocumentInput(item));
    }
    if (!isRecord(value)) {
        return value;
    }
    if (isMediaRecord(value)) {
        return typeof value.id === "number" ? value.id : undefined;
    }
    if (asRelation && typeof value.documentId === "string") {
        return { documentId: value.documentId };
    }
    return Object.fromEntries(Object.entries(value)
        .filter(([key]) => ![
        "id",
        "documentId",
        "createdAt",
        "updatedAt",
        "publishedAt",
        "locale",
        "localizations",
        "createdBy",
        "updatedBy",
    ].includes(key))
        .map(([key, nestedValue]) => [key, sanitizeDocumentInput(nestedValue)])
        .filter(([, nestedValue]) => nestedValue !== undefined));
}
function buildDocumentData(value) {
    return sanitizeDocumentInput(value, false);
}
function buildUploadName(url) {
    const digest = node_crypto_1.default.createHash("sha1").update(url).digest("hex").slice(0, 16);
    return `kidsfera-${digest}`;
}
async function findFirstDocument(strapi, uid, locale) {
    const entries = await strapi.documents(uid).findMany({
        locale,
        status: PUBLISHED_STATUS,
        populate: "*",
    });
    return (Array.isArray(entries) ? entries[0] : entries);
}
async function findManyDocuments(strapi, uid, locale) {
    const entries = await strapi.documents(uid).findMany({
        locale,
        status: PUBLISHED_STATUS,
        populate: "*",
    });
    return (Array.isArray(entries) ? entries : []);
}
async function uploadImageFromUrl(strapi, url, alt, cache) {
    const cached = cache.get(url);
    if (cached) {
        return cached;
    }
    const uploadName = buildUploadName(url);
    const existingFile = await strapi.db.query("plugin::upload.file").findOne({
        where: { name: uploadName },
    });
    if (existingFile === null || existingFile === void 0 ? void 0 : existingFile.id) {
        cache.set(url, existingFile.id);
        return existingFile.id;
    }
    const tmpDir = await promises_1.default.mkdtemp(node_path_1.default.join(node_os_1.default.tmpdir(), "kidsfera-media-"));
    try {
        const fileService = strapi.plugin("upload").service("file");
        const uploadService = strapi.plugin("upload").service("upload");
        const fetchedInput = await fileService.fetchUrlToInputFile(url, tmpDir);
        const inputFile = fetchedInput.file;
        const fileName = node_path_1.default.basename(new URL(url).pathname) || `${uploadName}.jpg`;
        if (!inputFile.originalFilename) {
            inputFile.originalFilename = fileName;
        }
        if (!inputFile.name) {
            inputFile.name = fileName;
        }
        const [uploadedFile] = await uploadService.upload({
            data: {
                fileInfo: {
                    name: uploadName,
                    alternativeText: alt !== null && alt !== void 0 ? alt : undefined,
                    caption: alt !== null && alt !== void 0 ? alt : undefined,
                },
            },
            files: [inputFile],
        });
        if (!(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.id)) {
            return null;
        }
        cache.set(url, uploadedFile.id);
        return uploadedFile.id;
    }
    catch (error) {
        strapi.log.warn(`Kidsfera media sync failed for ${url}: ${String(error)}`);
        return null;
    }
    finally {
        await promises_1.default.rm(tmpDir, { recursive: true, force: true });
    }
}
exports.uploadImageFromUrl = uploadImageFromUrl;
async function syncSeoComponent(strapi, seo, cache) {
    if (!isRecord(seo)) {
        return { changed: false, value: seo };
    }
    if (hasMedia(seo.ogImage) || !getUrl(seo.ogImageUrl)) {
        return { changed: false, value: seo };
    }
    const mediaUrl = getUrl(seo.ogImageUrl);
    if (!mediaUrl) {
        return { changed: false, value: seo };
    }
    const mediaId = await uploadImageFromUrl(strapi, mediaUrl, seo.metaTitle, cache);
    if (!mediaId) {
        return { changed: false, value: seo };
    }
    return {
        changed: true,
        value: {
            ...seo,
            ogImage: mediaId,
        },
    };
}
async function syncSingleTypeSeoFields(strapi, locales, cache) {
    for (const { uid, field } of SINGLE_TYPE_SEO_FIELDS) {
        for (const locale of locales) {
            const entry = await findFirstDocument(strapi, uid, locale);
            if (!(entry === null || entry === void 0 ? void 0 : entry.documentId)) {
                continue;
            }
            const currentSeo = entry[field];
            const nextSeo = await syncSeoComponent(strapi, currentSeo, cache);
            if (!nextSeo.changed) {
                continue;
            }
            await strapi.documents(uid).update({
                documentId: entry.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: {
                    ...buildDocumentData(entry),
                    [field]: sanitizeSeoComponent(nextSeo.value),
                },
            });
        }
    }
}
async function syncHomePageMedia(strapi, locales, cache) {
    for (const locale of locales) {
        const entry = await findFirstDocument(strapi, "api::home-page.home-page", locale);
        if (!(entry === null || entry === void 0 ? void 0 : entry.documentId)) {
            continue;
        }
        let changed = false;
        const nextData = {};
        if (!hasMedia(entry.heroImage) && getUrl(entry.heroImageUrl)) {
            const mediaId = await uploadImageFromUrl(strapi, entry.heroImageUrl, null, cache);
            if (mediaId) {
                nextData.heroImage = mediaId;
                changed = true;
            }
        }
        const featuredProducts = Array.isArray(entry.featuredProducts) ? entry.featuredProducts : [];
        const nextFeaturedProducts = await Promise.all(featuredProducts.map(async (item) => {
            var _a;
            if (!isRecord(item) || hasMedia(item.image) || !getUrl(item.imageUrl)) {
                return item;
            }
            const mediaId = await uploadImageFromUrl(strapi, item.imageUrl, (_a = item.imageAlt) !== null && _a !== void 0 ? _a : null, cache);
            if (!mediaId) {
                return item;
            }
            changed = true;
            return {
                ...item,
                image: mediaId,
            };
        }));
        if (changed) {
            nextData.featuredProducts = nextFeaturedProducts.map((item) => sanitizeFeaturedProductComponent(item));
        }
        if (!changed) {
            continue;
        }
        await strapi.documents("api::home-page.home-page").update({
            documentId: entry.documentId,
            locale,
            status: PUBLISHED_STATUS,
            data: {
                ...buildDocumentData(entry),
                ...nextData,
            },
        });
    }
}
async function syncCategoryMedia(strapi, locales, cache) {
    var _a;
    for (const locale of locales) {
        const entries = await findManyDocuments(strapi, "api::category.category", locale);
        for (const entry of entries) {
            if (!entry.documentId) {
                continue;
            }
            let changed = false;
            const nextData = {};
            if (!hasMedia(entry.image) && getUrl(entry.imageUrl)) {
                const mediaId = await uploadImageFromUrl(strapi, entry.imageUrl, (_a = entry.name) !== null && _a !== void 0 ? _a : null, cache);
                if (mediaId) {
                    nextData.image = mediaId;
                    changed = true;
                }
            }
            const nextSeo = await syncSeoComponent(strapi, entry.seo, cache);
            if (nextSeo.changed) {
                nextData.seo = sanitizeSeoComponent(nextSeo.value);
                changed = true;
            }
            if (!changed) {
                continue;
            }
            await strapi.documents("api::category.category").update({
                documentId: entry.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: nextData,
            });
        }
    }
}
async function syncProductMedia(strapi, locales, cache) {
    for (const locale of locales) {
        const entries = await findManyDocuments(strapi, "api::product.product", locale);
        for (const entry of entries) {
            if (!entry.documentId) {
                continue;
            }
            let changed = false;
            const nextData = {};
            const gallery = Array.isArray(entry.gallery) ? entry.gallery : [];
            const nextGallery = await Promise.all(gallery.map(async (item) => {
                var _a;
                if (!isRecord(item) || hasMedia(item.image) || !getUrl(item.url)) {
                    return item;
                }
                const mediaId = await uploadImageFromUrl(strapi, item.url, (_a = item.alt) !== null && _a !== void 0 ? _a : null, cache);
                if (!mediaId) {
                    return item;
                }
                changed = true;
                return {
                    ...item,
                    image: mediaId,
                };
            }));
            if (changed) {
                nextData.gallery = nextGallery.map((item) => sanitizeImageLinkComponent(item));
            }
            const nextSeo = await syncSeoComponent(strapi, entry.seo, cache);
            if (nextSeo.changed) {
                nextData.seo = sanitizeSeoComponent(nextSeo.value);
                changed = true;
            }
            if (!changed) {
                continue;
            }
            await strapi.documents("api::product.product").update({
                documentId: entry.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: nextData,
            });
        }
    }
}
async function syncProjectMedia(strapi, locales, cache) {
    var _a;
    for (const locale of locales) {
        const entries = await findManyDocuments(strapi, "api::project.project", locale);
        for (const entry of entries) {
            if (!entry.documentId || hasMedia(entry.image) || !getUrl(entry.imageUrl)) {
                continue;
            }
            const mediaId = await uploadImageFromUrl(strapi, entry.imageUrl, (_a = entry.title) !== null && _a !== void 0 ? _a : null, cache);
            if (!mediaId) {
                continue;
            }
            await strapi.documents("api::project.project").update({
                documentId: entry.documentId,
                locale,
                status: PUBLISHED_STATUS,
                data: {
                    image: mediaId,
                },
            });
        }
    }
}
async function syncAllMediaFields(strapi, locales) {
    const cache = createMediaCache();
    await syncSingleTypeSeoFields(strapi, locales, cache);
    await syncHomePageMedia(strapi, locales, cache);
    await syncCategoryMedia(strapi, locales, cache);
    await syncProductMedia(strapi, locales, cache);
    await syncProjectMedia(strapi, locales, cache);
}
exports.syncAllMediaFields = syncAllMediaFields;
