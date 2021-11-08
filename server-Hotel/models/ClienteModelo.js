
const { model, Schema } = require('mongoose')

const ClienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    fechaInicioReserva: {
        type: Date,
        required: true
    },
    fechaFinReserva: {
        type: Date,
        required: true
    },
    numPersonas: {
        type: Number,
        required: true
    }
})

module.exports = model('Cliente', ClienteSchema)