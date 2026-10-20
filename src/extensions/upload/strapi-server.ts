import { createReadStream, promises as fs } from "node:fs";
import { join } from "node:path";

import { file as fileUtils } from "@strapi/utils";
import sharp from "sharp";

import { responsiveImageBreakpoints } from "../../utils/media-formats";

type UploadableFile = {
  name: string;
  hash: string;
  ext?: string;
  mime?: string;
  width?: number | null;
  height?: number | null;
  filepath?: string;
  path?: string | null;
  tmpWorkingDirectory?: string;
  getStream: () => NodeJS.ReadableStream;
};

type ResponsiveFormat = {
  key: string;
  file: UploadableFile & {
    size: number;
    sizeInBytes: number;
  };
};

type ImageManipulationService = {
  getDimensions: (file: UploadableFile) => Promise<{
    width: number | null;
    height: number | null;
  }>;
  generateResponsiveFormats: (file: UploadableFile) => Promise<ResponsiveFormat[]>;
  [key: string]: unknown;
};

type UploadPlugin = {
  services: Record<string, ImageManipulationService>;
};

const WEBP_SOURCE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/webp",
]);

async function getSource(file: UploadableFile) {
  if (file.filepath) {
    return file.filepath;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of file.getStream()) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

async function createWebpFormat(
  file: UploadableFile,
  key: string,
  breakpoint: number,
): Promise<ResponsiveFormat> {
  const hash = `${key}_${file.hash}`;
  const directory = file.tmpWorkingDirectory ?? process.cwd();
  const filepath = join(directory, `${hash}.webp`);
  const source = await getSource(file);
  const { data, info } = await sharp(source, { animated: true })
    .resize({
      width: breakpoint,
      height: breakpoint,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 4 })
    .toBuffer({ resolveWithObject: true });

  await fs.writeFile(filepath, data);

  return {
    key,
    file: {
      name: `${key}_${file.name.replace(/\.[^.]+$/, "")}.webp`,
      hash,
      ext: ".webp",
      mime: "image/webp",
      filepath,
      path: file.path ?? null,
      getStream: () => createReadStream(filepath),
      width: info.width,
      height: info.height,
      size: fileUtils.bytesToKbytes(info.size),
      sizeInBytes: info.size,
    },
  };
}

export default (plugin: UploadPlugin) => {
  const imageManipulation = plugin.services["image-manipulation"];

  if (!imageManipulation) {
    return plugin;
  }

  plugin.services["image-manipulation"] = {
    ...imageManipulation,
    async generateResponsiveFormats(file: UploadableFile): Promise<ResponsiveFormat[]> {
      // Keep formats that need special browser behavior (for example GIF
      // animation) on Strapi's native implementation. WebP supports alpha,
      // so PNG photos and graphics use the much smaller responsive WebP files.
      if (!file.mime || !WEBP_SOURCE_MIME_TYPES.has(file.mime)) {
        return imageManipulation.generateResponsiveFormats(file);
      }

      const dimensions =
        file.width && file.height
          ? { width: file.width, height: file.height }
          : await imageManipulation.getDimensions(file);
      const largestDimension = Math.max(dimensions.width ?? 0, dimensions.height ?? 0);
      const formats: ResponsiveFormat[] = [];

      for (const [key, breakpoint] of Object.entries(responsiveImageBreakpoints)) {
        if (breakpoint < largestDimension) {
          formats.push(await createWebpFormat(file, key, breakpoint));
        }
      }

      return formats;
    },
  };

  return plugin;
};
