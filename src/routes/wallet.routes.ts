/* eslint-disable camelcase */
import { Router } from 'express';
import CreateWalletService from '../services/CreateWalletServices';
import ListWalletService from '../services/ListWalletServices';

// Retorna objeto com Saldo total da carteira e movimentações do dia
const walletRouter = Router();

walletRouter.get('/', async (request, response) => {
    try {
        const { wallet_id } = request.headers;
        const { initial_date, final_date } = request.body;

        const listWallet = new ListWalletService();

        const wallet = await listWallet.execute({
            wallet_id,
            initial_date,
            final_date,
        });
        return response.json(wallet);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
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
