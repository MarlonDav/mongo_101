import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true 

    },
    detalles:  {
        type: String,
        required: true
    },
     category:{
        type: String,
        enum: ['audifonos', 'diademas', 'Aros', 'cargador', 'disco'],
        required: true
     },

    price:{
        type: Number,
        required: true,
    },

    image:{
        type: String,
        required: true,
    }
    
   
        

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export  default  Product  
