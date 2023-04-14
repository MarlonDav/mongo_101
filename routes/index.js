import express from 'express'

const router = express.Router()


router.use(import ('./userRoutes.js'))

export default router