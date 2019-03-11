import awsServerlessExpress from 'aws-serverless-express';
import * as lambda from 'aws-lambda';
import app from './lib/app';

const server = awsServerlessExpress.createServer(app);

// Proxy all lambda calls to the express app
export default function(event: any, context: lambda.Context) {
  awsServerlessExpress.proxy(server, event, context);
}
