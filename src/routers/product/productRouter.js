import express from 'express'
import { getAllProductByID, getAllProductController } from '../../controller/product/productController.js';

const router = express.Router()

router.get("/:slug?", getAllProductController)
router.get("/category/:_id", getAllProductByID)

export default router;