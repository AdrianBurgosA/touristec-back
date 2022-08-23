const moongose = require("mongoose")

const usuariosSchema = moongose.Schema({
    user:{
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    nombres:{
        type: 'string',
        required: true
    },
    apellidos:{
        type:'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true
    },
    tipoUsuario:{
        type: 'number', // 0 ---> admin    1 ---> user
        required: true
    }

})

module.exports = moongose.model('usuarios', usuariosSchema, 'Usuarios')