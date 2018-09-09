module.exports = {
  async get(ctx) {
    let content = 'Disclosure for ';
    let category = 'ubs-prospect';
    if (ctx.request.query.employee) {
      content += 'employee';
      category = 'ubs-employee';
    } else {
      content += 'client';
    }
    try {
      let output = await ctx.db.Disclosure.findOne({
        category: category
      });
      ctx.body = {
        content,
        output
      };
    } catch (error) {
      ctx.throw(500, error);
    }

  },

  async create(ctx) {
    try {
      let output = await ctx.db.Disclosure.create({
        category: ctx.request.body.category,
        description: JSON.stringify(ctx.request.body.description),
        added: ctx.request.body.added
      });
      ctx.body = {
        output
      };
    } catch (error) {
      ctx.throw(500, error)
    }
  },

  async update(ctx) {
    try {
      let output = await ctx.db.Disclosure.update({
        description: JSON.stringify(ctx.request.body.description),
      }, {
        where: {
          category: ctx.params.category
        }
      });
      ctx.body = {
        output
      };
    } catch (error) {
      ctx.throw(500, error)
    }
  },
}
