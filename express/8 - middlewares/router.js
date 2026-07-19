const express = require('express')
const route = express.Router()

function meuMiddleware(req, res, next) {
    console.log()
    console.log('passei no seu middleware')
    console.log()
    next()
}

// importando controller da home
const homeController = require('./src/controllers/homeController.js')

// importando controller da pág de contatos
const contatoController = require('./src/controllers/contatoController.js')

// organizando melhor o arquivo de rotas, removendo as funções usando elas importadas
// rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
    console.log()
    console.log('ainda estou aqui')
    console.log()
})
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

// exportando a const route para usar no server.js
module.exports = route  
