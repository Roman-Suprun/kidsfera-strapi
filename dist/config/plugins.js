"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasAwsS3Provider = () => {
    try {
        require.resolve('@strapi/provider-upload-aws-s3');
        return true;
    }
    catch {
        return false;
    }
};
const config = ({ env }) => {
    const bucket = env('S3_BUCKET');
    const region = env('S3_REGION');
    const accessKeyId = env('S3_ACCESS_KEY_ID');
    const secretAccessKey = env('S3_ACCESS_SECRET');
    const endpoint = env('S3_ENDPOINT');
    const rootPath = env('S3_ROOT_PATH', 'local');
    if (!bucket || !region || !accessKeyId || !secretAccessKey) {
        return {};
    }
    if (!hasAwsS3Provider()) {
        console.warn('S3 upload is configured via env vars, but @strapi/provider-upload-aws-s3 is not installed in the current runtime. Falling back to the local upload provider.');
        return {};
    }
    return {
        upload: {
            config: {
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
            },
        },
    };
};
exports.default = config;
