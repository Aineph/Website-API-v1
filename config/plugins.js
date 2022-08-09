module.exports = ({ env }) => ({
  ckeditor: true,
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_SES_KEY"),
        secret: env("AWS_SES_SECRET"),
        amazon: "https://email.eu-west-3.amazonaws.com",
      },
      settings: {
        defaultFrom: env("CONTACT_EMAIL_SENDER"),
      },
    },
  },
});
