module.exports = {
  async get(ctx) {
    let content = 'Disclaimer for ';
    if (ctx.request.query.employee) {
      content += 'employee';
    } else {
      content += 'client or partner';
    }
    ctx.body = content;
  },

  async create(ctx) {
  },

  async update(ctx) {
  },
}
