const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const Logger = require('koa-pino-logger');
const Boom = require('boom');

const env = process.env.NODE_ENV || 'development';

function api(opts) {
  opts = opts || {};
  const app = new Koa();
  const router = require('./routes')(app);

  // logging
  if ( 'test' != env) {
    console.log(`env is [${env}]`);
    app.use(Logger());
    // app.use((ctx) => {
    //   app.log = Logger();
    // });
  }

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

  return app;
}

module.exports = api;
