const express = require('express')
const app = express()
const path = require('path')

// importando rotas
const routes = require('./router')

app.use(express.urlencoded({ extended: true }))

// aqui carrego meus conteúdos estáticos
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