// netlify/functions/server.ts
import serverless from 'serverless-http';
import { createApp } from '../../server/index';

// Initialize the app once and reuse it across invocations
const appPromise = createApp().then(({ app }) => serverless(app));

export const handler = async (event, context) => {
  const serverlessHandler = await appPromise;
  return serverlessHandler(event, context);
};