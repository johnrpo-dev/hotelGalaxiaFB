
const ClienteSchema = require('../models/ClienteModelo')

const insertarCliente = async (datos) => {

    let clienteNuevo = new ClienteSchema(datos)
    return await clienteNuevo.save()
}

const obtenerCliente = async (id) => {

    let verCliente = await ClienteSchema.findById(id)
    return verCliente
}

const obtenerClientes = async () => {

    let verClientes = await ClienteSchema.find()
    return verClientes
}

const modificarCliente = async (id, datos) => { 

    return await ClienteSchema.findByIdAndUpdate(id, datos)
}

const borrarCliente = async (id) => {
    
    return await ClienteSchema.findByIdAndDelete(id)
}

module.exports = {
    insertarCliente,
    obtenerCliente,
    obtenerClientes,
    modificarCliente,
    borrarCliente
}