import express from 'express';
import { addProduct, getProducts, getProductById, deleteProduct } from '../controller/productController.js';
import { authCheck, checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post('addproduct', authCheck, checkAdmin, addProduct);

router.route('/:id')
    .get(getProductById)
    .delete(authCheck, checkAdmin, deleteProduct);

export default router;
