import { getAUser } from "../../models/user/userModel.js"
import { createAccessJWTTokne, verifyRefreshJWTTokne } from "../../util/jwts.js"

export const refreshAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const decoded = verifyRefreshJWTTokne(authorization)
        if (decoded?.email) {
            const user = await getAUser({ email: decoded.email }, { refreshJWT: authorization })
            if (user?._id && user.status === "active") {
                user.password = undefined
                const accessJWT = await createAccessJWTTokne(decoded.email)
                return res.json({ status: "success", accessJWT, user })
            }
        }
    } catch (error) {
        if (error.message.includes("jwt must be provided")) {
            return res.json({ status: "error", message: "jwt expired" })
        }
        next(error)
    }
}