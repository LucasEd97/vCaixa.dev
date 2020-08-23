import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import WalletsRepository from '../repositories/WalletsRepository';
import CreateWalletService from '../services/CreateWalletServices';

// Retorna objeto com Saldo total da carteira e movimentações do dia
const walletRouter = Router();

walletRouter.get('/', async (request, response) => {
    const walletRepository = getCustomRepository(WalletsRepository);
    const wallets = await walletRepository.find();

    return response.json(wallets);
});

walletRouter.post('/', async (request, response) => {
    try {
        const { total } = request.body;

        const createWallet = new CreateWalletService();

        const wallet = await createWallet.execute({
            total,
        });

        return response.json(wallet);
    } catch (err) {
        return response.status(400).json({ erro: err.message });
    }
});

export default walletRouter;
