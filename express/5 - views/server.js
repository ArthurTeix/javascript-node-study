const express = require('express')
const app = express()

// importando rotas
const routes = require('./router')

app.use(express.urlencoded({ extended: true }))

// usando rotas
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
    console.log(`Acessar http://localhost:3000`)
})