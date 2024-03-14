import { getACategoriesBySlug } from "../../models/category/categoryModel.js"
import { getAProduct, getAllProducts, getAllProductByCatId, getAProdctById, updateProductQty, getAProductBySlug, getACatIdOfProductBySlug } from "../../models/product/productModel.js"

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

export const getAllProductBySlugController = async (req, res, next) => {
    try {
        const { slug } = req.params
        console.log("this is slug: ", slug)
        const cat = await getACategoriesBySlug(slug)
        console.log("Cat", cat)
        if (cat?._id) {
            const products = await getAllProductByCatId(cat._id)
            res.status(200).json({
                status: "success",
                message: "Here is all Products",
                products
            })
        } else {
            res.status(200).json({
                status: "error",
                message: `No Products available for ${cat?.name} slug`,

            })
        }

    } catch (error) {
        next(error)
    }
}

export const getAllProductByForProductsSlugController = async (req, res, next) => {
    try {
        const { slug } = req.params
        console.log("this is slug: ", slug)
        const aProduct = await getACatIdOfProductBySlug(slug)
        if (aProduct?._id) {
            const products = await getAllProductByCatId(aProduct.parentCatId)
            res.status(200).json({
                status: "success",
                message: "Here is all Products",
                products
            })


        } else {
            res.status(200).json({
                status: "error",
                message: `No Products available for ${cat?.name} slug`,

            })
        }

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
    console.log("kkhkvjvj", req.body)
    try {

        const updatingProductPromises = req.body?.items?.map(async ({ _id, orderQty }) => {
            const product = await getAProdctById(_id)
            if (product?._id) {
                const updatedQty = product?._doc?.qty - orderQty;
                const update = await updateProductQty(_id, { qty: updatedQty });
                console.log("update:", update)
            }


        });
        await Promise.all(updatingProductPromises);
        return res.json({ status: "success" });


    } catch (error) {
        next(error)
    }

}