
const express = require('express')
const cors = require ('cors')

const api = express()
const PORT = process.env.PORT  || 4000  ;


api.use(cors())
api.use(express.urlencoded({ extended: true}))
api.use(express.json({ extended: true }))

api.get('/',(req, res) => res.send('Hola mundo'))
api.use('/api/v1', require('../routes'))

module.exports = { api, PORT }



