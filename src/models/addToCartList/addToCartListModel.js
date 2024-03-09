import AddTocartListSchema from "./addTocartListSchema.js"

export const createCart = (obj) => {
  
    return AddTocartListSchema(obj).save()
}

export const fetchCartList = () => {
    return AddTocartListSchema.find()
}