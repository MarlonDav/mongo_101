import express from 'express'
import { productControl } from '../controllers/index.js'
import { productVal } from '../validators/index.js'

const router = express.Router()

router.get('/products',productControl.getAllProducts)

router.post('/create/newproduct', productVal.create, productControl.create)

export default router