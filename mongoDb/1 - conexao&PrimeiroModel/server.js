const express = require('express')
const app = express()


const path = require('path')

const routes = require('./router')

const meuMiddleware = require('./src/middlewares/middleware.js')


app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

// caminho absoluto para a pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// usando rotas
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
    console.log(`Acessar http://localhost:3000`)
})