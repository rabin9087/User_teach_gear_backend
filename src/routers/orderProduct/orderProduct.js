import express from 'express'
import { postNewOrders } from '../../models/orderProduct/orderProductModel.js';
const router = express.Router()

router.post("/", async (req, res, next) => {
    try {

        const orders = await postNewOrders(req.body)

        if (orders?._id) {
            
            return res.status(200).json({
                status: "success",
                message: "The items has been successfully ordered",
                orders
            })
        }
        return res.json({
            status: "error",
            message: "Unable to order your items"
        })



    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router;