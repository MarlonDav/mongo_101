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
export async function getProductsById(id) {
  try {
    const product = await Product.findById(id)
    if(!product){
      throw new Error('no existe el Producto')
    }
    return product
  } catch (error){
    console.log(error)
    throw new Error(error.message)
  }
}
const productServi = {
    create,
    getAllProducts,
    getProductsById
}

export default productServi