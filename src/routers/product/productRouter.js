import express from 'express'
import { getAProductByIDController, getAllProductByForProductsSlugController, getAllProductByIDController, getAllProductBySlugController, getAllProductController, updateProduct } from '../../controller/product/productController.js';

const router = express.Router()

router.get("/:slug?", getAllProductController)
router.get("/slug/:slug", getAllProductBySlugController)
router.get("/you-may-like/:slug", getAllProductByForProductsSlugController)
router.get("/category/:_id", getAllProductByIDController)
router.get("/product/:_id", getAProductByIDController)

router.patch("/", updateProduct)

export default router;