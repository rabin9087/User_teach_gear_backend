import { Schema, model } from 'mongoose'

const ProductSchema = model('Product', {})

export const getAllProducts = async () => {
    const condition = {
        slug: { $regex: '', $options: "i" },
    }
    const products = await ProductSchema.find(condition).limit(10).skip(0)
    const count = await ProductSchema.countDocuments(condition)
    return {
        products, count
    }
}

export const getAProduct = async (slug) => {
    return ProductSchema.findOne({slug})
}