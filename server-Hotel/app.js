
require ('dotenv').config()

const ServidorModelo = require('./models/ServidorModelo')

const servidorHotel = new ServidorModelo()

servidorHotel.encenderServidor()