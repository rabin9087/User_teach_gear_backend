import { getAllProducts } from "../../models/product/productModel.js"

export const getAllProductController = async (req, res, next) => {
    try {
        const products = await getAllProducts()
        res.status(200).json({
            status: "success",
            message: "Here is all Products",
            products
        })
    } catch (error) {
        next(error)
    }
}