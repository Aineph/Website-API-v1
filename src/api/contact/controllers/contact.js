'use strict';

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
  sendMail: async (ctx) => {
    console.log(ctx.request.body);
    ctx.response.status = 200;
  }
};
