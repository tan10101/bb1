const axios = require('axios');

const url = 'http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo'

function route(app, router, opts) {
  router.get('/auth', async (ctx) => {
    const employeeId = ctx.request.query.employeeid
    if (!employeeId) ctx.throw(400, 'employee id is missing');
    ctx.log.info('employeeId', employeeId);
    try {
      const response = await axios.get(url);
      const data = await response.data;
      ctx.body = {
        employeeId: employeeId,
        token: 'some-session-token-from-employer',
        data: data
      };
    } catch (error) {
      ctx.log(error);
    }
  });
}

module.exports = route;

