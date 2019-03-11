const AWS = require('aws-sdk');
const fs = require('fs');

const lambda = new AWS.Lambda({ region: 'us-west-2' });
lambda.updateFunctionCode(
  {
    FunctionName: process.argv[2],
    Publish: true,
    ZipFile: fs.readFileSync('lambda-dist.zip')
  },
  err => {
    if (err) {
      throw err;
    }
    process.exit();
  }
);
