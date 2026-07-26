const express = require('express')
const route = express.Router()

//       Exemplo de função middleware
// function meuMiddleware(req, res, next) {
//     console.log()
//     console.log('passei no seu middleware')
//     console.log()
//     next()
// }

// importando controller da home
const homeController = require('./src/controllers/homeController.js')

// importando controller da pág de contatos
const contatoController = require('./src/controllers/contatoController.js')

// // exemplo middleware
// route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
//     console.log('ainda estou aqui')
// })
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

// exportando a const route para usar no server.js
module.exports = route  
