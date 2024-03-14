import express from 'express'
import userRouter from '../userRouter/userRouter.js';
import categoryRouter from '../category/categoryRouter.js';
import productRouter from '../product/productRouter.js';
import addToCartRouter from '../addToCart/addToCartRouter.js';
import paymentRouter from '../payment/payment.js';
import orderRouter from '../orderProduct/orderProduct.js';
import homeRouter from '../home/homeRouter.js';

const router = express.Router()

//moongose connection


// user router
router.use("/api/v1/users", userRouter)
router.use("/api/v1/categories", categoryRouter)
router.use("/api/v1/products", productRouter)
router.use("/api/v1/addToCart", addToCartRouter)
router.use("/api/v1/payment", paymentRouter)
router.use("/api/v1/orders", orderRouter)
router.use("/api/v1/home", homeRouter)

export default router;