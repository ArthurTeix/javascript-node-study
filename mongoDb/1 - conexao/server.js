// LINHA QUE DIZ AO NODE QUAIS DNS USAR (SEMPRE UTILIZAR ATE CORREÇÃO DE BUG DO PROPRIO NODE)
// SEMPRE DEIXAR NO TOPO DO ARQUIVO SERVER
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

// biblioteca dotenv, para proteger informações privadas
require('dotenv').config()

const express = require('express')
const app = express()

// iniciando conexão ao mongo
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)  
    .then(() => { // agora vou garantir que antes do site iniciar, deve-se conectar primeiro ao banco de dados
        app.emit('Pronto para conexão') // <- emitindo alerta nno sistema para quando o bd estiver conectado (vou receber no 'app.on' ao fim do código)
    })
    .catch(e => console.log(e))

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
