import mongoose from 'mongoose'
import { URL } from '../config/index.js'

mongoose.connect(URL.MONGO_URI)
.then(()=> {
    console.log(`Conectado a la base de datos`)
})
.catch((error) => console.log (error))