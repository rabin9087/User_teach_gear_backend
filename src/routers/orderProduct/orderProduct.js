import express from 'express'
import { postNewOrders } from '../../models/orderProduct/orderProductModel.js';
const router = express.Router()

router.post("/", async (req, res, next) => {
    try {

        req.body.items = req.body.items.map((item) => {
            return {
                _id: item._id,
                orderQty: item.orderQty,
                size: item.size,
                deliveryStatus: 'Not yet delivered'

            }
        })
        console.log('items', req.body.items)
        const orders = await postNewOrders({ ...req.body, deliveryStatus: 'Not delivered yet' })

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