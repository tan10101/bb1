const Router = require('koa-router');
const {
  HomeController,
  UserController,
  DisclaimerController,
  DisclosureController,
} = require('../controllers');

function createRouter(app, opts) {
  const router = new Router();
  // const routeHome = require('./home')(app, router);
  // const routeDisclaimer = require('./disclaimer')(app, router);
  // const routeDisclosure = require('./disclosure')(app, router);
  // const routeAuth = require('./auth')(app, router);
  // const routeDownloader = require('./downloader')(app, router);

  router.get('/', HomeController.get);
  router.get('/disclaimer', DisclaimerController.get);
  router.get('/disclosure', DisclosureController.get);
  router.post('/disclosure', DisclosureController.create);
  router.put('/disclosure/:category', DisclosureController.update);

  return router
}

module.exports = createRouter;
