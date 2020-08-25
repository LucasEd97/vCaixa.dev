/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionServices';

const transacationRouter = Router();

transacationRouter.get('/', async (request, response) => {
    try {
        const transactionsRepository = getCustomRepository(
            TransactionsRepository,
        );
        const transactions = await transactionsRepository.find();

        return response.json(transactions);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

transacationRouter.post('/', async (request, response) => {
    try {
        const { wallet_id } = request.headers;

        const { date, type, value, description, category_id } = request.body;

        const createTransaction = new CreateTransactionService();

        const transaction = await createTransaction.execute({
            date,
            type,
            value,
            description,
            category_id,
            wallet_id,
        });

        return response.json(transaction);
    } catch (err) {
        return response.status(400).json({ erro: err.message });
    }
});

export default transacationRouter;
