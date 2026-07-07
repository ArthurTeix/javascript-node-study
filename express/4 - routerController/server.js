const express = require('express')

const app = express()

app.use(
    express.urlencoded(
        { extended: true }
    )
)

app.get('/', (req, res) => {
    res.send(`
        <form action='/' method='POST'>
            Brasil: <input type='text' name='nome'>
            <button>Enviar Formulário</button>
        </form> 
    `)
})

app.get('/testes{/:idUsuarios/:nomeUsuario}', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query ?? 'nenhum parametro foi passado')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`) // este .nome vem do atributo name do input
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
    console.log(`Acessar http://localhost:3000`)
})