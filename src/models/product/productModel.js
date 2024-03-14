import mongoose, { Schema, model } from 'mongoose'
const productSchema = new mongoose.Schema({
    status: {
        type: String,
        default: "inactive",
    },
    name: {
        type: String,
        required: true,
    },
    parentCatId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        index: 1,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    salesPrice: {
        type: Number,
    },
    qty: {
        type: Number,
        required: true,
    },
    sizes: [
        {
            type: String,
        },
    ],
    salesStartDate: {
        type: Date,
    },
    salesEndDate: {
        type: Date,
    },
    sku: {
        type: String,
        unique: true,
        index: 1,
        required: true
    },

    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },

    images: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true,
})
const ProductSchema = mongoose.model("Product", productSchema)

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

export const updateProductQty = async (update, filter) => {
    console.log("model:", update, filter)
    return await ProductSchema.findByIdAndUpdate({ _id: update }, filter)
}

export const getAllProductByCatId = async (_id) => {
    return ProductSchema.find({ parentCatId: _id })
}

export const getAProductBySlug = async (carousel) => {
    return ProductSchema.findOne({ name: carousel })
}

export const getACatIdOfProductBySlug = async (slug) => {
    return ProductSchema.findOne({ slug })
}