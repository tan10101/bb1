const xmljs = require('xml-js');
const axios = require('axios');
let lastdownloaded = 0;
const url = 'https://api.github.com/users/hadley/repos';
// https://cran.r-project.org/web/packages/jsonlite/vignettes/json-apis.html
//
function route(app, router, opts) {
  router.get('/download/allchats', async (ctx) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;

      const convertOpts = {compact: true, ignoreComment: true, spaces: 4};
      const xmldata = xmljs.json2xml(data, convertOpts);
      lastdownloaded = new Date();
      let status = 'started';
      ctx.body = {
        lastdownloaded,
        msecLastdownloaded: Math.floor(lastdownloaded),
        status,
        data,
        xmldata
      };
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = route;

