const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const Logger = require('koa-pino-logger');
const Boom = require('boom');

const env = process.env.NODE_ENV || 'development';

function api(opts) {
  opts = opts || {};
  const app = new Koa();
  const router = new Router();

  // logging
  if ( 'test' != env) {
    // console.log(`env is [${env}]`);
    const logger = new Logger();
    app.use(logger);
  }

  app.use(KoaBody({
    jsonLimit: '1kb'
  }));

  // routing
  const routeHome = require('./routes/home')(app, router);
  const routeDisclaimer = require('./routes/disclaimer')(app, router);
  const routeDisclosure = require('./routes/disclosure')(app, router);
  const routeAuth = require('./routes/auth')(app, router);

  app.use(router.routes());
  app.use(router.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed()
  }));

  return app;
}

module.exports = api;

