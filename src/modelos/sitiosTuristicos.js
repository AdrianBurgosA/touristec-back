const moongose = require("mongoose")

const sitiosTuristicosSchema = moongose.Schema({

    nombre:{
        type: 'string',
        required: true
    },
    descripcion:{
        type:'string',
        required: true,
    },
    ciudad:{
        type: 'ObjectId',
        required: true
    },
    imagen:{
        type: 'string',
        required: true
    }

})

module.exports = moongose.model('sitiosTuristicos', sitiosTuristicosSchema, 'SitiosTuristicos')