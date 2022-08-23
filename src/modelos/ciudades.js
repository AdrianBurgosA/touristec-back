const moongose = require("mongoose")

const ciudadesSchema = moongose.Schema({

    nombre:{
        type: 'string',
        required: true
    },
    provincia:{
        type: 'string',
        required: true
    },
    region:{
        type:'string',
        required: true,
    }

})

module.exports = moongose.model('ciudades', ciudadesSchema, 'Ciudades')