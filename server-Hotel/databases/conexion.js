

const mongoose = require('mongoose')

async function conectarBD() {

    try {

        await mongoose.connect(process.env.BASEDATOS)
        console.log("Exito conectandose con mongoBD")

    } catch (error) {

        console.log(error)
    }

}

module.exports = { conectarBD }