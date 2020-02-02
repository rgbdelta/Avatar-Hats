import { attachControllers } from '@decorators/express';
import * as express from 'express';
import { HatsController } from './controllers/hatsController';
import morgan = require('morgan');

const app = express();
const port = process.env.PORT ?? 3000;

// Add you controllers here
const controllers = [HatsController];

controllers.forEach((c) => {
  attachControllers(app, [c]);
});

app.use(morgan('dev'));
app.listen(port);

// eslint-disable-next-line no-console
console.info(`Server started on port ${port}`);
