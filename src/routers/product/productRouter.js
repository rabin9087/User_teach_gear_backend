import express from 'express'
import { getAllProductByID, getAllProductController, updateProduct } from '../../controller/product/productController.js';

const router = express.Router()

router.get("/:slug?", getAllProductController)
router.get("/category/:_id", getAllProductByID)
router.patch("/", updateProduct)

export default router;