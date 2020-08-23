// src/routes/index.ts
import { Router } from 'express';
import transactionRouter from './transaction.routes';
import walletRouter from './wallet.routes';

const routes = Router();

routes.use('/transaction', transactionRouter);
routes.use('/wallet', walletRouter);

export default routes;
