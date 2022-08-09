"use strict";

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
  sendMail: async (ctx) => {
    try {
      await strapi.plugins["email"].services.email.send({
        to: process.env.CONTACT_EMAIL_RECEIVER,
        from: process.env.CONTACT_EMAIL_SENDER,
        subject: ctx.request.body.object,
        text: `You have a new message from ${ctx.request.body.name} <${ctx.request.body.email}>:

${ctx.request.body.message}`,
      });
    } catch {
      ctx.response.status = 500;
    }
    ctx.response.status = 200;
  },
};
