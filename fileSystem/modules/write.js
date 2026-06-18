const fs = require('fs').promises

// aqui estou direcionando onde será criado o meu arquivo de texto chamado teste (uma pasta antes, na raiz)
// -> const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

// aqui estou enviando o que deve ser escrito no meu arquivo ('frase 1')
// a flag 'w' serve para apagar tudo que está escrito no meu arquivo caso ele já exista
// caso eu queira um comportamento de append no arquivo (ir sempre adicionando, basta alterar a flg para 'a')
// -> fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' })

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
}