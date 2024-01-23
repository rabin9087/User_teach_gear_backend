import express from 'express'
import userRouter from '../userRouter/userRouter.js';
const router = express.Router()

// user router
router.use("/users", userRouter)

export default router;