import OrderProductSchema from "./orderProductSchema.js"


export const getOrders = () => {
    return OrderProductSchema.find().populate('items._id')
}

export const getAOrder = (filter) => {
    return OrderProductSchema.findOne(filter)
}

export const postNewOrders = (orders) => {
    return OrderProductSchema(orders).save()
}