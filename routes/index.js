import express from 'express'
import userRoutes from './userRoutes.js'
import productRoutes from './productRoutes.js'

const router = express.Router()

router.use('/product', productRoutes)
router.use('/user', userRoutes)


export default router