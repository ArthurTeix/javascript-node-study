// O nome do arquivo começa com letras maiúsculas pois modelos são classes

const mongoose = require('mongoose')

// vou criar o esquema da minha home, passando atributos e tipos de dados que desejo
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String
})

const HomeModel = mongoose.model("Home", HomeSchema)

module.exports = HomeModel
