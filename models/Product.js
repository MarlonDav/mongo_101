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

    url:{
        type: String,
        required: true,
    }
    
   
        

}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', productSchema)

export  default { ProductModel } 