
const ReservaSchema = require('../models/ReservaModelo')

const realizarReserva = async (datos) => {

   let reservaNueva = new ReservaSchema(datos)
   return await reservaNueva.save() 
}

const obtenerReserva = async (id) => {

    let verReserva = await ReservaSchema.findById(id)
    return verReserva
}

const obtenerReservas = async () => {

    let verReservas = await ReservaSchema.find()
    return verReservas
}

const modificarReserva = async (id, datos) => {

    return await ReservaSchema.findByIdAndUpdate(id, datos)
}

const borrarReserva = async (id) => {

    return await ReservaSchema.findByIdAndDelete(id)
}

module.exports = {
    realizarReserva,
    obtenerReserva,
    obtenerReservas,
    modificarReserva,
    borrarReserva
}




