const mongoose = require('mongoose')

const { MONGO_URI } = require('../config')


mongoose.connect(MONGO_URI)
.then(()=> {
    console.log(`Conectado a la base de datos`)
})
.catch((error) => console.log (error))