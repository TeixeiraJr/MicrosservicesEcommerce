import * as dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config({ path: __dirname+'/../.env' })

import routes from './routes';

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Microsservice API running on port ${port}`));