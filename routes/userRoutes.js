import { Router } from 'express'
const router = Router()
import { userControl } from '../controllers/userControl.js'
import { userVal } from '../validators/userVal.js'

router.post('/create/newuser', userVal.create, userControl.create)

router.post('/user/login', userVal.login, userControl.login )

export default router