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
    res.send(`
        <form action='/' method='POST'>
            Nome: <input type='text' name='nome'>
            <button>Enviar</button>
        </form> 
    `)
})

// Criação de método POST para receber o forms sem mensagem de erro
app.post('/', (req, res) => res.send("Recebi o formulário."))

app.get('/contato', (req, res) => res.send("Obrigado por entrar em contato com a gente."))

// estou notificando ao express para escutar tudo que acontece nessa porta, e para responder automaticamente quando chegar uma requisição
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
})
