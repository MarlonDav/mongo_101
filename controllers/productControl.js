import { productServi } from '../services/index.js'



export async function create(req, res) {
  try {
    const newProduct = await productServi.create(req.body)

    console.log(newProduct)

    if (!newProduct) {
        throw new Error('No se pudo crear el producto')
    }

    return res.status(200).json({ message: `producto creado creado con el id ${newProduct._id}` })


} catch (error) {
  console.log(error)
    return res.status(400).json({ error })
}


}
export async function getAllProducts(req, res) {
  try{
    const allproducts = await productServi.getAllProducts()
    return res.status(200).json({message: allproducts})
  }catch (error){
    console.log(error)
    return res.status(400).json({ error })
  }
}
export  async function getProductsById (req, res){

  const { id } = req.params

    try{
      const product = await productServi.getProductsById(id)
      return res.status(200).json({ message: product })
    }catch(error){
      return res.status(400).json({ error: error.message })
    }
  }
export async function getProductsByCat(req, res){

  const { category } = req.params

  try{
    const product = await productServi.getProductsByCat(category)
    return res.status(200).json({ message: product })
  }catch(error){
    return res.status(400).json({ error: error.message })
  }
}
const productControl = {
  create,
  getAllProducts,
  getProductsById,
  getProductsByCat
}

  export default productControl  
