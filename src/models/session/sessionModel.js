import { Schema, model } from 'mongoose'
const SessionSchema = model('Session', {})

export const createSession = async ({ email, token }) => {
    return await SessionSchema({ associate: email, token }).save()
}

export const getSession = async (filter) => {
    return await SessionSchema.findOne(filter)
}

export const deleteSession = async (filter) => {
    return await SessionSchema.findOneAndDelete(filter)
}