/* eslint-disable camelcase */
import { Router } from 'express';
import CreateCategoryService from '../services/CreateCategoryServices';
import ListCategoryService from '../services/ListCategoryServices';

const categoryRouter = Router();

categoryRouter.post('/', async (request, response) => {
    try {
        const { wallet_id } = request.headers;
        const { name } = request.body;
        const createCategory = new CreateCategoryService();

        const category = await createCategory.execute({
            name,
            wallet_id,
        });
        return response.json(category);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

categoryRouter.get('/', async (request, response) => {
    try {
        const { wallet_id } = request.headers;

        const listCategory = new ListCategoryService();

        const category = await listCategory.execute({
            wallet_id,
        });
        return response.json(category);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default categoryRouter;
