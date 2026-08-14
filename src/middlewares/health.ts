import type { Core } from '@strapi/strapi';

/**
 * A liveness probe intentionally placed before Strapi's normal middleware
 * pipeline. It does not call `next`, so no route, auth, or database work is
 * performed for this endpoint.
 */
const health: Core.MiddlewareFactory = () => {
  return async (ctx, next) => {
    if (ctx.path === '/healthz' && (ctx.method === 'GET' || ctx.method === 'HEAD')) {
      ctx.status = 204;
      return;
    }

    await next();
  };
};

export default health;
