import { Product } from '../models/index.js'

export async function create(payload) {
  const { name, marca, detalles, category, price, image } = payload
  const product = new Product({
    name,
    marca,
    detalles,
    category,
    price,
    image,
  })
  const newProduct = await product.save()

  if (!newProduct) {
    throw new Error('No se pudo crear el producto')

  } return newProduct



}

export async function getAllProducts() {
  try{
    const allproducts = await Product.find({  })
    return allproducts

  }catch(error){
    throw new Error(error)

  }
}
const productServi = {
    create,
    getAllProducts,
}

export default productServi