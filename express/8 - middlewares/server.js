const app = express()
const path = require('path')

// importando rotas
const routes = require('./router')

// importando middlewares
const meuMiddleware = require('./src/middlewares/middleware.js')


app.use(express.urlencoded({ extended: true }))

// aqui carrego meus conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))

// usando middleware em todas as requisições do site (global) -> "Passei no middleware global"
app.use(meuMiddleware)

// caminho absoluto para a pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'))

app.set('view engine', 'ejs')

// usando rotas
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
    console.log(`Acessar http://localhost:3000`)
})