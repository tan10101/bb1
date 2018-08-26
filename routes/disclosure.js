function route(app, router, opts) {
  router.get('/disclosure', async (ctx) => {
    let content = 'Disclosure for ';
    if (ctx.request.query.employee) {
      content += 'employee';
    } else {
      content += 'client';
    }
    ctx.body = content;
  });
}

module.exports = route;

