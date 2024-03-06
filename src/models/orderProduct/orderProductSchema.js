import mongoose, { Schema } from 'mongoose'

const stringType = {
    type: String,
    required: true,
}
const orderProductSchema = new Schema({
    address: {
        email: stringType,
        name: stringType,
        phone: stringType,
        address: {
            line1: stringType,
            line2: { type: String, default: null },
            city: stringType,
            country: stringType,
            postal_code: stringType,
            state: stringType
        }
    },
    items: [
        {
            _id: { type: Schema.Types.ObjectId, ref: "Product" },
            orderQty: { type: Number, required: true },
            size: { type: String, required: true },
            deliveryStatus: stringType,
        }
    ],

    pay: {
        type: Object,
        required: true,
    },
    deliveryStatus: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('order', orderProductSchema)
