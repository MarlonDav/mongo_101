const express = require ('express')
const router = express.Router()
const { noteControl } = require ('../controllers')
const { noteVal } = require('../validators')
const { getAllNotes } = require('../controllers/noteControl')

router.post('/notes', noteVal.create, noteControl.create)
  
router.get('/notes', noteControl.getAllNotes)
module.exports = router