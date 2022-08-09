module.exports = {
  routes: [
    {
      method: "POST",
      path: "/contact",
      handler: "contact.sendMail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
