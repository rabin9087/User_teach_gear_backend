import express from 'express'
import { createCart, fetchCartList } from '../../models/addToCartList/addToCartListModel.js'
import mongoose from 'mongoose'
const router = express.Router()


router.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
        req.body.user = new mongoose.Types.ObjectId(req.body.user)
        const cartItems = await createCart(req.body)
        if (cartItems?._id) {
            return res.json({ status: "success", cartItems })
        }
        return res.json({ status: "error", cartItems })
    } catch (error) {
        next(error)
    }
})

router.get("/", async (req, res, next) => {
    console.log(req.body)
    try {
        const cartItems = await fetchCartList()
        if (cartItems?.length > 0) {
            return res.json({ status: "success", cartItems })
        }
        return res.json({ status: "error", cartItems })
    } catch (error) {
        next(error)
    }
})

export default router;