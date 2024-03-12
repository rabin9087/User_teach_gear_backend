import { getAProduct, getAllProducts, getAllProductByCatId, getAProdctById, updateProductQty } from "../../models/product/productModel.js"

export const getAllProductController = async (req, res, next) => {
    try {
        const { slug } = req.params
        const products = slug ? await getAProduct(slug) : await getAllProducts()
        res.status(200).json({
            status: "success",
            message: "Here is all Products",
            products
        })
    } catch (error) {
        next(error)
    }
}

export const getAllProductByID = async (req, res, next) => {
    try {
        const { _id } = req.params

        const products = await getAllProductByCatId(_id)

        res.status(200).json({
            status: "success",
            message: "Here is all Products",
            products
        })
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {

    try {
        console.log("jncsknfvk dfskv k", req.body)

        const updatingProductPromises = await req.body?.items?.map(async ({ _id, orderQty }) => {
            const product = await getAProdctById(_id);
            if (product?._id) {
                console.log("Actual Product:==", product);
                const updatedQty = product?._doc?.qty - orderQty;
                const update = await updateProductQty({ _id: product._id, qty: updatedQty });
                console.log("This is update product", update);
                return res.json({ status: "success" });
            }
            return res.json({ status: "error" });;
        });

        await Promise.all(updatingProductPromises);


    } catch (error) {
        next(error)
    }

}