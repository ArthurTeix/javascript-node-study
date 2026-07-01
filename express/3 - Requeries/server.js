const express = require('express')

const app = express()

app.use( // para o express usar uma função
    express.urlencoded(
        { extended: true } // para o express tratar o que vem no corpo da requisição e me retornar
    )
)

app.get('/', (req, res) => { 
    res.send(`
        <form action='/' method='POST'>
            Nome do cliente: <input type='text' name='nome'>
            <button>Enviar Formulário</button>
        </form> 
    `)
})

// Para receber parâmetros na requisição, uso /:nomeDoParâ <- uso obrigatorio de parâm
// Para receber parâmetros na requisição, uso {/:nomeDoParâ} <- uso opcional de parâm

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
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
})
