import jwt from 'jsonwebtoken'
import { createSession } from '../models/session/sessionModel.js'

export const createAccessJWTTokne = async (email) => {
    const token = jwt.sign({ email }, process.env.ACCESSJWT_SECRET, { expiresIn: '1d' })
    await createSession({ email, token })

    return token
}

export const createRefreshJWTTokne = async (email) => {
    const token = jwt.sign({ email }, process.env.REFRESHJWT_SECRET, { expiresIn: "30d" })
    return token
}

export const verifyAccessJWTTokne = (accessJWT) => {
    return jwt.verify(accessJWT, process.env.ACCESSJWT_SECRET)
}

export const verifyRefreshJWTTokne = (refreshJWT) => {
    return jwt.verify(refreshJWT, process.env.REFRESHJWT_SECRET)
}

export const getJwts = async (email) => {
    return {
        accessJWT: await createAccessJWTTokne(email),
        refreshJWT: await createRefreshJWTTokne(email)
    }
}