import './config/configs.js';

import serverless from 'serverless-http';

import bootstrap from './app.js';
import { configs } from './config/configs.js';

const app = bootstrap();

if (configs.env !== 'production') {
  const PORT = configs.port;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export const handler = serverless(app);
