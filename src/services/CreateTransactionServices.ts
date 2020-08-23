/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
    date: Date;
    type: string;
    value: number;
    description: string;
    wallet_id: string;
    category_id: string;
}

class CreateTransactionService {
    public async execute({
        date,
        type,
        value,
        description,
        wallet_id,
        category_id,
    }: Request): Promise<Transaction> {
        const transactionsRepository = getCustomRepository(
            TransactionsRepository,
        );
        const transaction = transactionsRepository.create({
            date,
            type,
            value,
            description,
            wallet_id,
            category_id,
        });

        await transactionsRepository.save(transaction);

        return transaction;
    }
}

export default CreateTransactionService;
