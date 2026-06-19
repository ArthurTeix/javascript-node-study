const path = require('path')

const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/write')
const ler = require('./modules/read')

// const pessoas = [
//     {nome: 'Arthur'},
//     {nome: 'Ingrid'},
//     {nome: 'Miguel'},
//     {nome: 'Lucas'}
// ]

// converte meu obj em um arquivo de texto json

// APÓS ESCREVER O ARQUIVO, POSSO COMENTAR E APENAS LER AGORA 
// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    return dados
}

const dadosArquivo = lerArquivo(caminhoArquivo)
    .then(dados => console.log(dados))
