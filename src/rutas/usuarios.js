const express = require("express")
const router = express.Router()
const usuariosSchema = require("../modelos/usuarios")

//login 
router.post("/login",(req,res) => {
    const {username, pass} = req.body
    usuariosSchema.findOne({user: username, password: pass})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//leer usuarios (READ)
router.get("/usuarios", (req, res) => {
    usuariosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Buscar un usuario (FIND)
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params
    usuariosSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Agregar usuario (POST)
router.post("/usuarios", (req, res) => {
    const usuario = usuariosSchema(req.body)
    usuario
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

//Actualizar usuario (UPDATE)
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params
    const {nombres, apellidos, email, tipoUsuario} = req.body
    usuariosSchema.updateOne({_id: id},{$set: {nombres, apellidos, email, tipoUsuario}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Borrar usuario (DELETE)
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params
    usuariosSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router