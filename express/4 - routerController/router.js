const express = require('express')
const route = express.Router()

// importando controller da home
const homeController = require('./controllers/homeController.js')

// importando controller da pág de contatos
const contatoController = require('./controllers/contatoController.js')

// organizando melhor o arquivo de rotas, removendo as funções usando elas importadas
// rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

// exportando a const route para usar no server.js
module.exports = route  
