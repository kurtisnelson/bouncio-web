module.exports = function(environment){
  var ENV = {};

  ENV.s3 = {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    bucket: 'app.bounc.io'
  }

  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    bucket: 'app.bounc.io'
  }
  ENV.pipeline = {
    activateOnDeploy: true
  }

  ENV.sentry = {
    publicUrl: 'https://app.bounc.io',
    sentryUrl: 'https://app.getsentry.com',
    sentryOrganizationSlug: 'bouncio',
    sentryProjectSlug: 'bouncio-web',
    sentryApiKey: process.env.SENTRY_KEY
  }
  return ENV;
};
