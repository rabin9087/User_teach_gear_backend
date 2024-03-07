import { createUser, getUserByEmail } from "../../models/user/userModel.js";
import { comparePassword, hashPassword } from "../../util/bcrypt.js";
import { createAccessJWTTokne, getJwts } from "../../util/jwts.js";

export const newUserController = async (req, res, next) => {
    try {
        console.log(req.body)
        const { email, password } = req.body
        req.body.password = hashPassword(password)

        const result = await getUserByEmail(email)

        if (result?._id) {
            return res.json({ status: "error", message: "User already exist!" })
        }
        const user = await createUser(req.body)
        if (user?._id) {
            return res.json({ status: "success", message: "New User has been created" })
        } else {
            return res.json({ status: "error", message: "Unable to create user please try again or contact administration" })
        }


    } catch (error) {
        next(error)
    }
}


export const logInUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await getUserByEmail(email)
        if (user?._id) {
            const isPasswordMatch = comparePassword(password, user.password)
            if (isPasswordMatch) {
                const jwts = await getJwts(email)
                user.password = undefined
                return res.json({ status: "success", message: "You have been successfully logged In", user, jwts })
            }
            return res.json({ status: "error", message: "Unable to Login this time, please try again" })
        }
        else {
            return res.json({ status: "error", message: "User does not exist!" })
        }


    } catch (error) {
        next(error)
    }
}