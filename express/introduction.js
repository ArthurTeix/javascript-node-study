// Normalmente o nome do arquivo é 'server.js', mas como ainda estou aprendendo, vou separar por partes

// pelo express já está dentro do node_module, não preciso de caminho
const express = require('express')

// é comum se criar uma variável inicializando o express
const app = express()

// A função do express é auxiliar no sistema de rotas do site
// https://meusite.com <- GET -> Entrega página
// O express é responsável por saber qual é a rota correta e me entregar

// Operações com express:
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT   DELETE