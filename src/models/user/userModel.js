import { Schema, model } from 'mongoose'

const UserSchema = model("User", {})

export const createUser = async (obj) => {
    return await UserSchema(obj).save()
}

export const updateUSer = async (filter, update) => {
    return await UserSchema.findOneAndUpdate(filter, update, { new: true })
}

export const getUserByEmail = (email) => {
    return UserSchema.findOne({ email })
}

export const getAUser = (filter) => {
    return UserSchema.findOne(filter)
}