import express from 'express'
import { getAllProductController } from '../../controller/product/productController.js';

const router = express.Router()

router.get("/:slug?", getAllProductController)

export default router;