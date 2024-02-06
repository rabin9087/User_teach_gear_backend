import Joi from 'joi'

const SHORTSTR = Joi.string().max(100).allow(null, "")
const SHORTSTRREQUIRED = SHORTSTR.required()
const NUM = Joi.number().allow(null, "")
const NUMREQUIRED = NUM.required()
const LONGSTR = Joi.string().max(500).allow(null, "")
const LONGSTRREQUIRED = LONGSTR.required()
const EMAIL = Joi.string().email({ minDomainSegments: 2 }).max(100)
const EMAILREQUIRED = EMAIL.required()

const joiValidator = ({ schema, req, res, next }) => {
    try {
        const { error } = schema.validate(req.body)
        if (error) {
            return responder.ERROR({ res, message: error.message })
        }
        next()
    } catch (error) {
        next(error)
    }
}

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

export const resetPasswordValidate = (req, res, next) => {
    const schema = Joi.object({
        email: EMAILREQUIRED,
        otp: SHORTSTRREQUIRED,
        password: SHORTSTRREQUIRED,
    })
    joiValidator({ schema, req, res, next })
}