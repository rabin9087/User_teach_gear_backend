import { getAProductBySlug, getAllProductByCatId } from "../../models/product/productModel.js"

export const fetchAllCarouselController = async (req, res, next) => {
    try {

        const result = await getAProductBySlug('homeCarousel')
        if (result?._id) {
            const { images, ...rest } = result

            return res.json({ status: "success", message: "Here are all carosel for Home Page successfully", carousel: images })
        }
        return res.json({ status: "error" })
    } catch (error) {
        next(error)
    }
}