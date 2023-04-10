const express = require ('express')
const router = express.Router()
const { Note } = require('../models')
const { noteVal } = require('../validators')

router.post('/notes', noteVal.create, (req, res) => {
    const {titulo, contenido, fecha, user } = req.body 

    const note = new Note({
        titulo,
        contenido,
        fecha,
        user,
    })
note.save()
.then(result => {
    res.status(200).json(result)
})
.catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router