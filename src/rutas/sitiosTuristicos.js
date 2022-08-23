const express = require("express")
const router = express.Router()
const sitiosTuristicosSchema = require("../modelos/sitiosTuristicos")

//leer sitios turisticos (READ)
router.get("/sitiosTuristicos/:ciudad", (req, res) => {
    const {ciudad} = req.params
    sitiosTuristicosSchema.find({ciudad: ciudad})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Buscar un sitio turistico (FIND)
router.get("/sitiosTuristico/:id", (req, res) => {
    const { id } = req.params
    sitiosTuristicosSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Agregar sitio turistico (POST)
router.post("/sitiosTuristicos", (req, res) => {
    const sitioTuristico = sitiosTuristicosSchema(req.body)
    sitioTuristico
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

//Actualizar sitio turistico (UPDATE)
router.put("/sitiosTuristicos/:id", (req, res) => {
    const { id } = req.params
    const {nombre, descripcion, ciudad, imagen} = req.body
    sitiosTuristicosSchema.updateOne({_id: id},{$set: {nombre, descripcion, ciudad, imagen}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Borrar sitio turistico (DELETE)
router.delete("/sitiosTuristicos/:id", (req, res) => {
    const { id } = req.params
    sitiosTuristicosSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router