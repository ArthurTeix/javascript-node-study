const express = require('express')
const route = express.Router()

// importando controller da pag inicial
const homeController = require('./controllers/homeController.js')

// organizando melhor o arquivo de rotas, removendo as funções usando elas importadas
route.get('/', homeController.paginaInicial)

// exportando a const route para usar no server.js
module.exports = route  