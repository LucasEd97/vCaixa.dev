/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('SERVIDOR INICIADO NA PORTA 3333');
});
