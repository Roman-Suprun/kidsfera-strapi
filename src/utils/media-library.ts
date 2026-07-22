import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import type { Core } from "@strapi/strapi";

const SINGLE_TYPE_SEO_FIELDS = [
  { uid: "api::site-setting.site-setting", field: "defaultSeo" },
  { uid: "api::home-page.home-page", field: "seo" },
  { uid: "api::categories-page.categories-page", field: "seo" },
  { uid: "api::catalog-page.catalog-page", field: "seo" },
] as const;
const PUBLISHED_STATUS = "published";

type EntryWithDocument = {
  documentId?: string;
  locale?: string;
  [key: string]: unknown;
};

type SeoComponent = {
  ogImage?: unknown;
  ogImageUrl?: string | null;
  [key: string]: unknown;
};

type MediaCache = Map<string, number>;

export function createMediaCache(): MediaCache {
  return new Map();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasMedia(value: unknown) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return isRecord(value) && (typeof value.id === "number" || typeof value.url === "string");
}

function getUrl(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function sanitizeRelation(value: unknown) {
  if (!isRecord(value) || typeof value.documentId !== "string") {
    return undefined;
  }

  return { documentId: value.documentId };
}

function sanitizeFeaturedProductComponent(value: unknown) {
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

function sanitizeImageLinkComponent(value: unknown) {
  if (!isRecord(value)) {
    return value;
  }

  return {
    url: value.url,
    image: value.image,
    alt: value.alt,
  };
}

function sanitizeSeoComponent(value: unknown) {
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

function isMediaRecord(value: Record<string, unknown>) {
  return (
    typeof value.mime === "string" ||
    typeof value.provider === "string" ||
    ("formats" in value && typeof value.url === "string")
  );
}

function sanitizeDocumentInput(value: unknown, asRelation = true): unknown {
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

  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key]) =>
          ![
            "id",
            "documentId",
            "createdAt",
            "updatedAt",
            "publishedAt",
            "locale",
            "localizations",
            "createdBy",
            "updatedBy",
          ].includes(key),
      )
      .map(([key, nestedValue]) => [key, sanitizeDocumentInput(nestedValue)])
      .filter(([, nestedValue]) => nestedValue !== undefined),
  );
}

function buildDocumentData(value: Record<string, unknown>) {
  return sanitizeDocumentInput(value, false) as Record<string, unknown>;
}

function buildUploadName(url: string) {
  const digest = crypto.createHash("sha1").update(url).digest("hex").slice(0, 16);
  return `kidsfera-${digest}`;
}

async function findFirstDocument(strapi: Core.Strapi, uid: string, locale: string) {
  const entries = await strapi.documents(uid as any).findMany({
    locale,
    status: PUBLISHED_STATUS,
    populate: "*",
  } as any);

  return (Array.isArray(entries) ? entries[0] : entries) as EntryWithDocument | null;
}

async function findManyDocuments(strapi: Core.Strapi, uid: string, locale: string) {
  const entries = await strapi.documents(uid as any).findMany({
    locale,
    status: PUBLISHED_STATUS,
    populate: "*",
  } as any);

  return (Array.isArray(entries) ? entries : []) as EntryWithDocument[];
}

export async function uploadImageFromUrl(
  strapi: Core.Strapi,
  url: string,
  alt: string | null | undefined,
  cache: MediaCache,
) {
  const cached = cache.get(url);

  if (cached) {
    return cached;
  }

  const uploadName = buildUploadName(url);
  const existingFile = await strapi.db.query("plugin::upload.file").findOne({
    where: { name: uploadName },
  });

  if (existingFile?.id) {
    cache.set(url, existingFile.id);
    return existingFile.id as number;
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "kidsfera-media-"));

  try {
    const fileService = strapi.plugin("upload").service("file");
    const uploadService = strapi.plugin("upload").service("upload");
    const fetchedInput = await fileService.fetchUrlToInputFile(url, tmpDir);
    const inputFile = fetchedInput.file;

    const fileName = path.basename(new URL(url).pathname) || `${uploadName}.jpg`;

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
          alternativeText: alt ?? undefined,
          caption: alt ?? undefined,
        },
      },
      files: [inputFile],
    });

    if (!uploadedFile?.id) {
      return null;
    }

    cache.set(url, uploadedFile.id);
    return uploadedFile.id as number;
  } catch (error) {
    strapi.log.warn(`Kidsfera media sync failed for ${url}: ${String(error)}`);
    return null;
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
}

async function syncSeoComponent(
  strapi: Core.Strapi,
  seo: unknown,
  cache: MediaCache,
) {
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

  const mediaId = await uploadImageFromUrl(strapi, mediaUrl, seo.metaTitle as string, cache);

  if (!mediaId) {
    return { changed: false, value: seo };
  }

  return {
    changed: true,
    value: {
      ...seo,
      ogImage: mediaId,
    } satisfies SeoComponent,
  };
}

async function syncSingleTypeSeoFields(
  strapi: Core.Strapi,
  locales: readonly string[],
  cache: MediaCache,
) {
  for (const { uid, field } of SINGLE_TYPE_SEO_FIELDS) {
    for (const locale of locales) {
      const entry = await findFirstDocument(strapi, uid, locale);

      if (!entry?.documentId) {
        continue;
      }

      const currentSeo = entry[field];
      const nextSeo = await syncSeoComponent(strapi, currentSeo, cache);

      if (!nextSeo.changed) {
        continue;
      }

      await strapi.documents(uid as any).update({
        documentId: entry.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: {
          ...buildDocumentData(entry),
          [field]: sanitizeSeoComponent(nextSeo.value),
        } as any,
      });
    }
  }
}

async function syncHomePageMedia(
  strapi: Core.Strapi,
  locales: readonly string[],
  cache: MediaCache,
) {
  for (const locale of locales) {
    const entry = await findFirstDocument(strapi, "api::home-page.home-page", locale);

    if (!entry?.documentId) {
      continue;
    }

    let changed = false;
    const nextData: Record<string, unknown> = {};

    if (!hasMedia(entry.heroImage) && getUrl(entry.heroImageUrl)) {
      const mediaId = await uploadImageFromUrl(strapi, entry.heroImageUrl as string, null, cache);

      if (mediaId) {
        nextData.heroImage = mediaId;
        changed = true;
      }
    }

    const featuredProducts = Array.isArray(entry.featuredProducts) ? entry.featuredProducts : [];
    const nextFeaturedProducts = await Promise.all(
      featuredProducts.map(async (item) => {
        if (!isRecord(item) || hasMedia(item.image) || !getUrl(item.imageUrl)) {
          return item;
        }

        const mediaId = await uploadImageFromUrl(
          strapi,
          item.imageUrl as string,
          (item.imageAlt as string | null | undefined) ?? null,
          cache,
        );

        if (!mediaId) {
          return item;
        }

        changed = true;

        return {
          ...item,
          image: mediaId,
        };
      }),
    );

    if (changed) {
      nextData.featuredProducts = nextFeaturedProducts.map((item) =>
        sanitizeFeaturedProductComponent(item),
      );
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
      } as any,
    });
  }
}

async function syncCategoryMedia(
  strapi: Core.Strapi,
  locales: readonly string[],
  cache: MediaCache,
) {
  for (const locale of locales) {
    const entries = await findManyDocuments(strapi, "api::category.category", locale);

    for (const entry of entries) {
      if (!entry.documentId) {
        continue;
      }

      let changed = false;
      const nextData: Record<string, unknown> = {};

      if (!hasMedia(entry.image) && getUrl(entry.imageUrl)) {
        const mediaId = await uploadImageFromUrl(
          strapi,
          entry.imageUrl as string,
          (entry.name as string | null | undefined) ?? null,
          cache,
        );

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
        data: nextData as any,
      });
    }
  }
}

async function syncProductMedia(
  strapi: Core.Strapi,
  locales: readonly string[],
  cache: MediaCache,
) {
  for (const locale of locales) {
    const entries = await findManyDocuments(strapi, "api::product.product", locale);

    for (const entry of entries) {
      if (!entry.documentId) {
        continue;
      }

      let changed = false;
      const nextData: Record<string, unknown> = {};
      const gallery = Array.isArray(entry.gallery) ? entry.gallery : [];
      const nextGallery = await Promise.all(
        gallery.map(async (item) => {
          if (!isRecord(item) || hasMedia(item.image) || !getUrl(item.url)) {
            return item;
          }

          const mediaId = await uploadImageFromUrl(
            strapi,
            item.url as string,
            (item.alt as string | null | undefined) ?? null,
            cache,
          );

          if (!mediaId) {
            return item;
          }

          changed = true;

          return {
            ...item,
            image: mediaId,
          };
        }),
      );

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
        data: nextData as any,
      });
    }
  }
}

async function syncProjectMedia(
  strapi: Core.Strapi,
  locales: readonly string[],
  cache: MediaCache,
) {
  for (const locale of locales) {
    const entries = await findManyDocuments(strapi, "api::project.project", locale);

    for (const entry of entries) {
      if (!entry.documentId || hasMedia(entry.image) || !getUrl(entry.imageUrl)) {
        continue;
      }

      const mediaId = await uploadImageFromUrl(
        strapi,
        entry.imageUrl as string,
        (entry.title as string | null | undefined) ?? null,
        cache,
      );

      if (!mediaId) {
        continue;
      }

      await strapi.documents("api::project.project").update({
        documentId: entry.documentId,
        locale,
        status: PUBLISHED_STATUS,
        data: {
          image: mediaId,
        } as any,
      });
    }
  }
}

export async function syncAllMediaFields(
  strapi: Core.Strapi,
  locales: readonly string[],
) {
  const cache = createMediaCache();

  await syncSingleTypeSeoFields(strapi, locales, cache);
  await syncHomePageMedia(strapi, locales, cache);
  await syncCategoryMedia(strapi, locales, cache);
  await syncProductMedia(strapi, locales, cache);
  await syncProjectMedia(strapi, locales, cache);
}
