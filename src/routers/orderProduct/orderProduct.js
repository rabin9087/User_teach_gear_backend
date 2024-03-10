import express from 'express'
import { postNewOrders } from '../../models/orderProduct/orderProductModel.js';
import { getAProdctById, updateProductQty } from '../../models/product/productModel.js';
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
        const orders = await postNewOrders({ ...req.body, deliveryStatus: 'Not delivered yet' })

        if (orders?._id) {
            console.log(req.body.items)
            req.body.items.map(async ({ _id, orderQty }) => {
                const prodcuct = await getAProdctById(_id)
                console.log("This is actual product", prodcuct)
                if (prodcuct?._id) {
                    const updatedQty = prodcuct?._doc?.qty - orderQty
                    const update = await updateProductQty(_id, { qty: updatedQty })
                    console.log("This is update product", update)
                    return update
                }
                return null
            })

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
        next(error)
    }
})

export default router;