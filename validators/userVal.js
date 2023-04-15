import { celebrate, Joi, Segments } from 'celebrate'

export const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required()
    })
})
export const login = celebrate({
    [Segments.BODY]: Joi.object().keys({
        password: Joi.string().required(),
        email: Joi.string().email().required()
    })
}) 

const userVal = {
    create,
    login
}

export default userVal