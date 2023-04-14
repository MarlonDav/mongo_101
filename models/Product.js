import mongoose from mongoose

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true 

    },
    especificaciones:  {
        type: String,
        required: true
    },
    
   
        

}, {
    timestamps: true
})

const Product = mongoose.model('Product', notaSchema)

export default  Product