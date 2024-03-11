import { Schema, model } from 'mongoose'

const ProductSchema = model('Product', {})

export const getAllProducts = async () => {
    const condition = {
        slug: { $regex: '', $options: "i" }, status: "active"
    }
    const products = await ProductSchema.find(condition).limit(10).skip(0)
    const count = await ProductSchema.countDocuments(condition)
    return {
        products, count
    }
}

export const getAProdctById = (_id) => {
    return ProductSchema.findById({ _id })
}

export const getAProduct = async (slug) => {
    return ProductSchema.findOne({ slug })
}

export const updateProductQty = (update) => {
    console.log("this iskxjbscjbsdjc b", update)
    return ProductSchema.findByIdAndUpdate(update)
}

export const getAllProductByCatId = async (_id) => {
    return ProductSchema.find({ parentCatId: _id })
}