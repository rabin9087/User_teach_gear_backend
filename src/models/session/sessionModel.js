import SessionSchema from "./sessionSchema.js"


export const createSession = async (obj) => {
    return await SessionSchema(obj).save()
}

export const getSession = async (filter) => {
    return await SessionSchema.findOne(filter)
}

export const deleteSession = async (filter) => {
    return await SessionSchema.findOneAndDelete(filter)
}