/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { getCustomRepository, Between } from 'typeorm';
import Wallet from '../models/Wallet';
import WalletsRepository from '../repositories/WalletsRepository';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Consts from '../settings/const';

const consts = new Consts();

interface Request {
    wallet_id: string | string[] | undefined;
    initial_date: Date;
    final_date: Date;
}

class ListWalletService {
    public async execute({
        wallet_id,
        initial_date,
        final_date,
    }: Request): Promise<Wallet | undefined | unknown> {
        const walletsRepository = getCustomRepository(WalletsRepository);
        const transactionsRepository = getCustomRepository(
            TransactionsRepository,
        );

        const wallet = await walletsRepository.findOne({
            where: { id: wallet_id },

            relations: ['transactions', 'transactions.category'],
        });
        if (!wallet) {
            throw new Error('WALLET DOES NOT EXIST');
        }

        const transactions = await transactionsRepository.find({
            where: {
                wallet_id,
                date: Between(initial_date, final_date),
            },
            relations: ['category'],
        });

        const transactionEntries = transactions.reduce(function getEntries(
            entries,
            entry,
        ) {
            if (entry.type === consts.TYPE_ENTRY) {
                return entries + entry.value;
            }
            return entries + 0;
        },
        0);

        const transactionOutputs = transactions.reduce(function getOutputs(
            entries,
            entry,
        ) {
            if (entry.type === consts.TYPE_OUTPUT) {
                return entries + entry.value;
            }
            return entries + 0;
        },
        0);

        if (wallet !== undefined && wallet) {
            wallet.total = transactionEntries - transactionOutputs;
        }
        return wallet;
    }
}

export default ListWalletService;
