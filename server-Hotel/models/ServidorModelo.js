
const express = require('express')
const { conectarBD } = require('../databases/conexion')
const rutas = require('../routes/rutas')


class ServidorModelo {

    constructor () {
        this.app = express()
        this.despertarBD()
        this.enrutarPeticiones()

    }
    encenderServidor() {
        this.app.listen(process.env.PUERTO, () => {
            console.log(`Servidor online ${process.env.PUERTO}`);
        })
    }
    enrutarPeticiones() {
        this.app.use('/', rutas)
    }
    despertarBD() {
        conectarBD()
    }
    llamarAuxliares() {
        this.app.use(express.json())
    }


}
module.exports = ServidorModelo