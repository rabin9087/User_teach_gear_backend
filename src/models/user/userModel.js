import UserSchema from "./userSchema.js"

export const createUser = async (obj) => {
    return await UserSchema(obj).save()
}

export const updateUser = async (filter, update) => {
    return await UserSchema.findOneAndUpdate(filter, update, { new: true })
}

export const getUserByEmail = (email) => {
    return UserSchema.findOne({ email })
}

export const getAUser = (filter) => {
    return UserSchema.findOne(filter)
}