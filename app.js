import './config/configs.js';

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import router from './routers/index.js';

export default function bootstrap() {
  const app = express();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.json());
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('view engine', 'ejs');

  app.use(router);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({ message: 'Something went wrong!' });
  });

  return app;
}
