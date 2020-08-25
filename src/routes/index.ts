// src/routes/index.ts
import { Router } from 'express';
import transactionRouter from './transaction.routes';
import walletRouter from './wallet.routes';
import categoryRouter from './category.routes';

const routes = Router();

routes.use('/transaction', transactionRouter);
routes.use('/wallet', walletRouter);
routes.use('/category', categoryRouter);

export default routes;
