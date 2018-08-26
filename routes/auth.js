function route(app, router, opts) {
  router.get('/auth', async (ctx) => {
    const employeeId = ctx.request.query.employeeid
    if (!employeeId) ctx.throw(400, 'employee id is missing');
    ctx.log.info('employeeId', employeeId);

    ctx.body = {
      employeeId: employeeId,
      token: 'some-session-token-from-employer'
    };
  });
}

module.exports = route;

