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

// O método get precisa de dois parâmetros, um é a rota e o outro é uma função que recebe a requisição e a resposta
app.get('/', (req, res) => { 
    res.send("Hello World")
})

// estou notificando ao express para escutar tudo que acontece nessa porta, e para responder automaticamente quando chegar uma requisição
app.listen(3000)