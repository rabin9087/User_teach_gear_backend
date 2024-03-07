import Joi from 'joi'

export const SHORTSTR = Joi.string().max(100).allow(null, "")
export const SHORTSTRREQUIRED = SHORTSTR.required()
export const NUM = Joi.number().allow(null, "")
export const NUMREQUIRED = NUM.required()
export const LONGSTR = Joi.string().max(500).allow(null, "")
export const LONGSTRREQUIRED = LONGSTR.required()
export const EMAIL = Joi.string().email({ minDomainSegments: 2 }).max(100)
export const EMAILREQUIRED = EMAIL.required()

export const joiValidator = ({ schema, req, res, next }) => {
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
