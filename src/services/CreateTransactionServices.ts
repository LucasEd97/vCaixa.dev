/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CategoriesRepository from '../repositories/CategoriesRepository';
import WalletRepository from '../repositories/WalletsRepository';
import Consts from '../settings/const';

const consts = new Consts();

interface Request {
    date: Date;
    type: string;
    value: number;
    description: string;
    wallet_id: string | string[] | undefined;
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

        const walletRepository = getCustomRepository(WalletRepository);
        const categoriesRepository = getCustomRepository(CategoriesRepository);

        const walletId = String(wallet_id);

        const existsWallet = await walletRepository.findOne({
            where: { id: walletId },
        });
        if (!existsWallet) {
            throw new Error('Wallet does not exist');
        }

        const existsCategory = await categoriesRepository.findOne({
            where: { id: category_id },
        });
        if (!existsCategory) {
            throw new Error(`Unexistent Category to save transaction`);
        }

        if (value < 0) {
            throw new Error('Value of Transaction cannot be negative');
        }
        if (type !== consts.TYPE_ENTRY && type !== consts.TYPE_OUTPUT) {
            throw new Error(
                `Transactions type must be '${consts.TYPE_ENTRY}' for Earns or '${consts.TYPE_OUTPUT}' for Losses`,
            );
        }

        const transaction = transactionsRepository.create({
            date,
            type,
            value,
            description,
            category_id,
            wallet_id: walletId,
        });

        await transactionsRepository.save(transaction);

        return transaction;
    }
}

export default CreateTransactionService;
