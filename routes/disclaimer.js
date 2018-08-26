function route(app, router, opts) {
  router.get('/disclaimer', async (ctx) => {
    let content = 'Disclaimer for ';
    if (ctx.request.query.employee) {
      content += 'employee';
    } else {
      content += 'client or partner';
    }
    ctx.body = content;
  });
}

module.exports = route;

