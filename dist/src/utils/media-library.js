"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncAllMediaFields = void 0;
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
function buildUploadName(url) {
    const digest = node_crypto_1.default.createHash("sha1").update(url).digest("hex").slice(0, 16);
    return `kidsfera-${digest}`;
}
async function findFirstDocument(strapi, uid, locale) {
    const entries = await strapi.documents(uid).findMany({
        locale,
        status: "draft",
        populate: "*",
    });
    return (Array.isArray(entries) ? entries[0] : entries);
}
async function findManyDocuments(strapi, uid, locale) {
    const entries = await strapi.documents(uid).findMany({
        locale,
        status: "draft",
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
        const inputFile = await fileService.fetchUrlToInputFile(url, tmpDir);
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
                data: {
                    [field]: nextSeo.value,
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
            nextData.featuredProducts = nextFeaturedProducts;
        }
        if (!changed) {
            continue;
        }
        await strapi.documents("api::home-page.home-page").update({
            documentId: entry.documentId,
            locale,
            data: nextData,
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
                nextData.seo = nextSeo.value;
                changed = true;
            }
            if (!changed) {
                continue;
            }
            await strapi.documents("api::category.category").update({
                documentId: entry.documentId,
                locale,
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
                nextData.gallery = nextGallery;
            }
            const nextSeo = await syncSeoComponent(strapi, entry.seo, cache);
            if (nextSeo.changed) {
                nextData.seo = nextSeo.value;
                changed = true;
            }
            if (!changed) {
                continue;
            }
            await strapi.documents("api::product.product").update({
                documentId: entry.documentId,
                locale,
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
                data: {
                    image: mediaId,
                },
            });
        }
    }
}
async function syncAllMediaFields(strapi, locales) {
    const cache = new Map();
    await syncSingleTypeSeoFields(strapi, locales, cache);
    await syncHomePageMedia(strapi, locales, cache);
    await syncCategoryMedia(strapi, locales, cache);
    await syncProductMedia(strapi, locales, cache);
    await syncProjectMedia(strapi, locales, cache);
}
exports.syncAllMediaFields = syncAllMediaFields;
