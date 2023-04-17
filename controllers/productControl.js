import { productServi } from '../services/index.js'


export async function create(req, res) {
  try {
    const newProduct = await productServi.create(req.body)

    console.log(newUser)

    if (!newProduct) {
        throw new Error('No se pudo crear el producto')
    }

    return res.status(200).json({ message: `producto creado creado con el id ` })


} catch (error) {
    return res.status(400).json({ error })
}
}
const productControl = {
  create,
}

  export default productControl  