function route(app, router, opts) {
  router.get('/', async (ctx) => {
    ctx.body = 'hello world from big brother!';
  });
}

module.exports = route;

