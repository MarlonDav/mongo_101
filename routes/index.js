import express from 'express'
import useRoutes from './userRoutes.js'

const router = express.Router()


router.use('/user', useRoutes)


export default router