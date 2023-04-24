
import { celebrate, Joi, Segments } from 'celebrate'

export const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        marca: Joi.string().required(),
        detalles: Joi.string().required(),
        category: Joi.string().required(),
        price: Joi.string().required(),
        image: Joi.string().required()
    })
})

const productVal = {
    create
}
 export default productVal