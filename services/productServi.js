import { ProductModel } from '../models/index.js'

export async function create(payload) {
  const { name, marca, detalles } = payload
  const product = new ProductModel({
    name,
    marca,
    detalles,
  })
  const newProduct = await product.save()

  if (!newProduct) {
    throw new Error('No se pudo crear el producto')
  } return newProduct

}
const productServi = {
    create,
}

export default productServi