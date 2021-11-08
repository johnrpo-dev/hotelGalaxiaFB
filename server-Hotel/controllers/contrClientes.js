
const { request, response } = require('express')

const { 
    insertarCliente,
    obtenerCliente,
    obtenerClientes,
    modificarCliente,
    borrarCliente } = require('../services/serviciosCliente')

 
const crearCliente = async (peticion = request, respuesta = response) => {

   let datosPeticion = peticion.body
   try {
       await insertarCliente(datosPeticion)
       respuesta.status(200).json({
            msg: 'Cliente creado correctamente',
            estado: true
        })
   } catch (error) {
      respuesta.status(400).json({
            msg: 'Error al crear el cliente' + error,
            estado: false
        })
   }
}

const buscarCliente = async (peticion = request, respuesta = response) => {

    try {
        let id = peticion.params.id
        let cliente = await obtenerCliente(id)
        respuesta.status(200).json({
            msg: cliente,
            estado: true
        })
    } catch (error) {

        respuesta.status(400).json({
            msg: 'Error al buscar el cliente' + error,
            estado: false
        })
    }
}

const buscarClientes = async (peticion = request, respuesta = response) => {

    try {
        let clientes = await obtenerClientes()
        respuesta.status(200).json({
            msg: clientes,
            estado: true
        })
    } catch (error) {

        respuesta.status(400).json({
            msg: 'Error al buscar los clientes' + error,
            estado: false
        })        
    }
}

const actualizarCliente = async (peticion = request, respuesta = response) => {

    try {
        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarCliente(id, datosPeticion)

        respuesta.status(200).json({
            msg: 'Cliente actualizado correctamente',
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al actualizar el cliente' + error,
            estado: false
        })
    }
}

const eliminarCliente = async (peticion = request, respuesta = response) => {

    let id = peticion.params.id
    try {
        await borrarCliente(id)
        respuesta.status(200).json({
            msg: 'Cliente eliminado correctamente',
            estado: true
        })
    } catch (error) {
        
        respuesta.status(400).json({
            msg: 'Error al eliminar el cliente' + error,
            estado: false
        })
    }
}

module.exports = {
    crearCliente,
    buscarCliente,
    buscarClientes,
    actualizarCliente,
    eliminarCliente
}  