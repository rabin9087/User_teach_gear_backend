import mongoose, { Schema } from 'mongoose'

const stringType = {
    type: String,
    required: true,
}
const addToCartListSchema = new Schema({
    user: {
        _id: { type: Schema.Types.ObjectId, ref: "Product" },
    },
    items: [
        {
            _id: { type: Schema.Types.ObjectId, ref: "Product" },
            orderQty: { type: Number, required: true },
            size: { type: String, required: true },
            
        }
    ],
    cartStatus: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('AddToCartList', addToCartListSchema)