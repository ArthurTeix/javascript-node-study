// LINHA QUE DIZ AO NODE QUAIS DNS USAR (SEMPRE UTILIZAR ATE CORREÇÃO DE BUG DO PROPRIO NODE)
// SEMPRE DEIXAR NO TOPO DO ARQUIVO SERVER
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express')
const app = express()

// iniciando conexão ao mongo
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://arthurteixeiracl:ar110308@cursojs01.3fk1ta5.mongodb.net/'

mongoose.connect(connectionString) // agora vou garantir que antes do site iniciar, deve-se conectar primeiro ao banco de dados
    .then(() => {
        console.log("Conectei ao Banco de Dados")
        app.emit('Pronto para conexão') // <- emitindo alerta nno sistema para quando o bd estiver conectado (vou receber no 'app.on' ao fim do código)
    })

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

app.on('Pronto para conexão', () => { // agora só será ativado o app.listen após o banco de dados estiver conectado e emitir a mensagem
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000')
        console.log(`Acessar http://localhost:3000`)
    })
})
