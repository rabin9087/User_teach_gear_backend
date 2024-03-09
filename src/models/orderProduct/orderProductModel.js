import OrderProductSchema from "./orderProductSchema.js"


export const getOrders = async () => {
    const orders = await OrderProductSchema.find().populate('items._id')

    return orders
}

export const getAOrder = (filter) => {
    return OrderProductSchema.findOne(filter)
}

export const postNewOrders = (orders) => {
    return OrderProductSchema(orders).save()
}