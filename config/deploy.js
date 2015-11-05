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
  return ENV;
};
