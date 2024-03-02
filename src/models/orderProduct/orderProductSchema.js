import mongoose, { Schema } from 'mongoose'

const orderProductSchema = new Schema({
    address: {
        type: Object,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    pay: {
        type: Object,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('order', orderProductSchema)