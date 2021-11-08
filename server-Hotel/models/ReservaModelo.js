
const { model, Schema } = require('mongoose')

const ReservaSchema = new Schema({
    nomHabitacion: {
        type: String,
        required: true
    },
    fotoHabitacion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    adultoXnoche: {
        type: Number,
        required: true
    },
    ninoXnoche: {
        type: Number,
        required: true
    },
    
})

module.exports = model('Reserva', ReservaSchema)