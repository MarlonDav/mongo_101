import { connect } from 'mongoose'

import { MONGO_URI } from '../config'


connect(MONGO_URI)
.then(()=> {
    console.log(`Conectado a la base de datos`)
})
.catch((error) => console.log (error))