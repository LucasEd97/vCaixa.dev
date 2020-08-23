/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionServices';

const transacationRouter = Router();

// lista todas as transactions
transacationRouter.get('/', async (request, response) => {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactions = await transactionsRepository.find();

    return response.json(transactions);
});

transacationRouter.post('/', async (request, response) => {
    try {
        const {
            date,
            type,
            value,
            description,
            wallet_id,
            category_id,
        } = request.body;

        const createTransaction = new CreateTransactionService();

        const transaction = await createTransaction.execute({
            date,
            type,
            value,
            description,
            wallet_id,
            category_id,
        });

        return response.json(transaction);
    } catch (err) {
        return response.status(400).json({ erro: err.message });
    }
});

export default transacationRouter;
