const express = require('express')
const route = express.Router()

const homeController = require('./controllers/homeController.js')

route.get('/', homeController.paginaInicial)