const express = require("express")
const router = express.Router()
const ciudadesSchema = require("../modelos/ciudades")

//leer ciudades por region (READ)
router.get("/ciudades/:region", (req, res) => {
    const {region} = req.params
    ciudadesSchema.find({region: region})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//leer todas las ciudades (READ)
router.get("/ciudades", (req, res) => {
    ciudadesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//Buscar una ciudad (FIND)
router.get("/ciudades/:id", (req, res) => {
    const { id } = req.params
    ciudadesSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Agregar ciudad (POST)
router.post("/ciudades", (req, res) => {
    const ciudad = ciudadesSchema(req.body)
    ciudad
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

//Actualizar ciudad (UPDATE)
router.put("/ciudades/:id", (req, res) => {
    const { id } = req.params
    const {nombre, provincia, region} = req.body
    ciudadesSchema.updateOne({_id: id},{$set: {nombre, provincia, region}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Borrar ciudad (DELETE)
router.delete("/ciudades/:id", (req, res) => {
    const { id } = req.params
    ciudadesSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router