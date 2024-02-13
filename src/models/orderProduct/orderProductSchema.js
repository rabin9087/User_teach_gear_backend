import mongoose, { Schema } from 'mongoose'

const addToCartSchema = new Schema({

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
}, {
    timestamps: true,
})

export default mongoose.model()