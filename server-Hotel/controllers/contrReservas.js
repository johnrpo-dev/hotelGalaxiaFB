
const { request, response } = require('express')

const { 
    realizarReserva,
    obtenerReserva,
    obtenerReservas,
    modificarReserva,
    borrarReserva } = require('../services/serviciosReserva')


 const crearReserva = async (peticion = request, respuesta = response) => {
     
    let datosPeticion = peticion.body
    try {
        await realizarReserva(datosPeticion)
        respuesta.status(200).json({
            msg: 'Reserva creada con exito',
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al crear reserva' + error,
            estado: false
        })
    }
 }

 const buscarReserva = async (peticion = request, respuesta = response) => {

     try {
        let id = peticion.params.id
        let reserva = await obtenerReserva(id)
        respuesta.status(200).json({
           msg: reserva,
           estado: true
        })
     } catch (error) {

        respuesta.status(400).json({
            msg: 'Error al buscar reserva' + error,
            estado: false
        })
     }
 }

 const buscarReservas = async (peticion = request, respuesta = response) => {

    try {
        let reservas = await obtenerReservas()
        respuesta.status(200).json({
            msg: reservas,
            estado: true
        })
    } catch (error) {

        respuesta.status(400).json({
            msg: 'Error al buscar reservas' + error,
            estado: false
        })
    }
 }

const actualizarReserva = async (peticion = request, respuesta = response) => {

    try {
        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            msg: 'Reserva modificada con exito',
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al modificar la reserva' + error,
            estado: false
        })
    }
}

 const eliminarReserva = async (peticion = request, respuesta = response) => {

    let id = peticion.params.id
    try {
        await borrarReserva(id)
        respuesta.status(200).json({
            msg: 'Reserva eliminada con exito',
            estado: true
        })
    } catch (error) {
        
        respuesta.status(400).json({
            msg: 'Error al eliminar la reserva' + error,
            estado: false
        })
    }
 }

 module.exports = {
    crearReserva,
    buscarReserva,
    buscarReservas,
    actualizarReserva,
    eliminarReserva
 }