const express = require ('express')
const router = express.Router()
const { userControl } = require('../controllers')
const { userVal } = require('../validators')

router.post('/create/newuser', userVal.create, userControl.create)

module.exports = router