const fs = require('fs').promises
const path = require('path')

// aqui estou direcionando onde será criado o meu arquivo de texto chamado teste (uma pasta antes, na raiz)
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

// aqui estou enviando o que deve ser escrito no meu arquivo ('frase 1')
// a flag serve para apagar tudo que está escrito no meu arquivo caso ele já exista
fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' })
