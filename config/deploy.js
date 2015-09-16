require('dotenv').load();
var key = process.env['AWS_KEY_ID'];
var secret = process.env['AWS_SECRET_KEY'];
module.exports = {
  development: {
    store: {
      type: "S3",
      accessKeyId: key,
      secretAccessKey: secret,
      bucket: "app.bounc.io"
    },
    assets: {
      type: "s3",
      accessKeyId: key,
      secretAccessKey: secret,
      bucket: "app.bounc.io"
    }
  }
}
