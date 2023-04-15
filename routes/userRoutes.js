import express from 'express'
import { userControl } from '../controllers/index.js'
import { userVal } from '../validators/index.js'

const router = express.Router()

router.post('/create/newuser', userVal.create, userControl.create)
router.post('/user/login', userVal.login, userControl.login )

export default router