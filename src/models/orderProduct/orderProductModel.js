import OrderProductSchema from "./orderProductSchema.js"


export const getOrders = () => {
    return OrderProductSchema.find()
}

export const getAOrder = (filter) => {
    return OrderProductSchema.findOne(filter)
}

export const postNewOrders = (orders) => {
    return OrderProductSchema(orders).save()
}