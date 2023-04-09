const express = require ('express')
const router = express.Router()
const { User } = require('../models')

router.post('/create/newuser', (req, res) => {

    const {name, email, password } = req.body

    const newUser = new User ({
        name,
        email,
        password,
    })
    
newUser.save()
.then(result => {
    res.status(200).json(result)
})
.catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router