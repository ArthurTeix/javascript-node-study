const express = require('express')

const app = express()

app.get('/', (req, res) => { 
    res.send(`
        <form action='/' method='POST'>
            Nomenclatura: <input type='text' name='nome'>
            <button>Enviar Formulário</button>
        </form> 
    `)
})

// Para receber parâmetros na requisição, uso /:nomeDoParâ <- uso obrigatorio de parâm
// Para receber parâmetros na requisição, uso {/:nomeDoParâ} <- uso opcional de parâm

app.get('/testes{/:idUsuarios/:nomeUsuario}', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params ?? 'nenhum parametro foi passado')
})

app.post('/', (req, res) => res.send("Recebi o formulário."))

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
})
