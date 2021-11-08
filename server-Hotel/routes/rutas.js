
const { Router } = require('express')

const rutas = Router()

const {
    crearCliente,
    buscarCliente,
    buscarClientes,
    actualizarCliente,
    eliminarCliente } = require('../controllers/contrClientes')

const {
    crearReserva,
    buscarReserva,
    buscarReservas,
    actualizarReserva,
    eliminarReserva } = require('../controllers/contrReservas')



rutas.get('/hotel/clientes', buscarClientes)
rutas.get('/hotel/clientes/:id', buscarCliente)
rutas.post('/hotel/clientes', crearCliente)
rutas.put('/hotel/clientes/:id', actualizarCliente)
rutas.delete('/hotel/clientes/:id', eliminarCliente)

rutas.get('/hotel/reservas', buscarReservas)
rutas.get('/hotel/reservas/:id', buscarReserva)
rutas.post('/hotel/reservas', actualizarReserva)
rutas.put('/hotel/reservas/:id', crearReserva)
rutas.delete('/hotel/reservas/:id', eliminarReserva)



module.exports = rutas