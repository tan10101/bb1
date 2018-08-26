const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const logger = require('koa-logger');
const Boom = require('boom');

const env = process.env.NODE_ENV || 'development';

function api(opts) {
  opts = opts || {};
  const app = new Koa();
  const router = new Router();

  app.use(KoaBody({
    jsonLimit: '1kb'
  }));

  // routing
  app.use(router.routes());
  app.use(router.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed()
  }));

  // logging
  if ( 'test' != env) {
    console.log(`env is [${env}]`);
    app.use(logger());
  }

  return app;
}

module.exports = api;

