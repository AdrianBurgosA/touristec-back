const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const Usuarios = require("./rutas/usuarios")
const SitiosTuristicos = require("./rutas/sitiosTuristicos")
const Ciudades = require("./rutas/ciudades")

const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(Usuarios)
app.use(SitiosTuristicos)
app.use(Ciudades)

app.get('/', (req,res) =>{
    res.send("Welcome to my API");
});

//Conexion con MongoDB Atlas
mongoose
    .connect("mongodb+srv://Elkin:12345@cluster0.y2irc.mongodb.net/TouristEC?retryWrites=true&w=majority")
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log("server is listening on port", port))