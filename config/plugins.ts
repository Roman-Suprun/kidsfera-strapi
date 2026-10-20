import type { Core } from '@strapi/strapi';

import { responsiveImageBreakpoints, s3AssetCacheControl } from '../src/utils/media-formats';

const hasAwsS3Provider = () => {
  try {
    require.resolve('@strapi/provider-upload-aws-s3');
    return true;
  } catch {
    return false;
  }
};

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const bucket = env('S3_BUCKET');
  const region = env('S3_REGION');
  const accessKeyId = env('S3_ACCESS_KEY_ID');
  const secretAccessKey = env('S3_ACCESS_SECRET');
  const endpoint = env('S3_ENDPOINT');
  const rootPath = env('S3_ROOT_PATH', 'local');
  const awsS3ProviderAvailable = hasAwsS3Provider();

  const uploadConfig = {
    breakpoints: responsiveImageBreakpoints,
  };

  if (!bucket || !region || !accessKeyId || !secretAccessKey || !awsS3ProviderAvailable) {
    if (bucket && region && accessKeyId && secretAccessKey && !awsS3ProviderAvailable) {
      console.warn(
        'S3 upload is configured via env vars, but @strapi/provider-upload-aws-s3 is not installed in the current runtime. Falling back to the local upload provider.',
      );
    }

    return {
      upload: {
        config: uploadConfig,
      },
    };
  }

  return {
    upload: {
      config: {
        ...uploadConfig,
        provider: 'aws-s3',
        providerOptions: {
          ...(endpoint ? { baseUrl: endpoint } : {}),
          rootPath,
          s3Options: {
            credentials: {
              accessKeyId,
              secretAccessKey,
            },
            region,
            params: {
              Bucket: bucket,
              ACL: undefined,
            },
            ...(endpoint
              ? {
                  endpoint,
                  forcePathStyle: false,
                }
              : {}),
          },
        },
        actionOptions: {
          upload: {
            CacheControl: s3AssetCacheControl,
          },
          uploadStream: {
            CacheControl: s3AssetCacheControl,
          },
          delete: {},
        },
      },
    },
  };
};

export default config;
