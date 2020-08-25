import { getCustomRepository } from 'typeorm';

import Wallet from '../models/Wallet';
import WalletsRepository from '../repositories/WalletsRepository';

interface Request {
    total: number;
}

class CreateWalletService {
    public async execute({ total }: Request): Promise<Wallet> {
        const walletsRepository = getCustomRepository(WalletsRepository);

        if (total === Number(0) || total === undefined) {
            const wallet = walletsRepository.create({
                total: 0,
            });
            await walletsRepository.save(wallet);
            return wallet;
        }
        throw new Error('Initial total has to be zero!');
    }
}

export default CreateWalletService;
