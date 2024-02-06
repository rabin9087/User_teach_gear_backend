import { getAllCategories } from "../../models/category/categoryModel.js";


export const getAllCategoriesController = async (req, res, next) => {
    try {

        const categories = await getAllCategories()
        if (categories?.length) {
            res.status(200).json({
                status: "success",
                message: "Here is all categories",
                categories
            })
        }

    } catch (error) {
        next(error)
    }
}
