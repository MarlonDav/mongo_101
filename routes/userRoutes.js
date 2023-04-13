const express = require ('express')
const router = express.Router()
const { userControl } = require('../controllers')
const { userVal } = require('../validators')

router.post('/create/newuser', userVal.create, userControl.create)

router.post('/user/login', userVal.login, userControl.login )

module.exports = router