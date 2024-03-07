import Joi from "joi"
import { EMAILREQUIRED, SHORTSTR, SHORTSTRREQUIRED, joiValidator } from "../joiValidation.js"

export const newUserValidate = (req, res, next) => {
    const schema = Joi.object({
        fName: SHORTSTRREQUIRED,
        lName: SHORTSTRREQUIRED,
        email: EMAILREQUIRED,
        phone: SHORTSTR,
        address: SHORTSTR,
        password: SHORTSTRREQUIRED,
    })
    joiValidator({ schema, req, res, next })
}

export const logInValidate = (req, res, next) => {
    const schema = Joi.object({
        email: EMAILREQUIRED,
        password: SHORTSTRREQUIRED,
    })
    joiValidator({ schema, req, res, next })
}

export const resetPasswordValidate = (req, res, next) => {
    const schema = Joi.object({
        email: EMAILREQUIRED,
        otp: SHORTSTRREQUIRED,
        password: SHORTSTRREQUIRED,
    })
    joiValidator({ schema, req, res, next })
}