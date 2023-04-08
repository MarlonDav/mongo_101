const mongoose = require('mongoose')

const notaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido:  {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', notaSchema)

module.exports = Note