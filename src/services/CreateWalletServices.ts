import { getCustomRepository } from 'typeorm';

import Wallet from '../models/Wallet';
import WalletsRepository from '../repositories/WalletsRepository';

interface Request {
    total: number;
}

class CreateWalletService {
    public async execute({ total }: Request): Promise<Wallet> {
        const walletsRepository = getCustomRepository(WalletsRepository);
        const wallet = walletsRepository.create({
            total,
        });

        await walletsRepository.save(wallet);

        return wallet;
    }
}

export default CreateWalletService;
