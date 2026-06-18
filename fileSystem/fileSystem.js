// File System é um pacote nativo do npm que serve para trabalhar a recursão mútua do meu projeto, administrando meus arquivos locais
const fs = require('fs').promises
const path = require('path')

/*
//dessa forma ele vai ler desde a pasta fonte, e não apenas os arquivos da pasta atual
fs.readdir('./')

// Por isso usamos o Path, para passar o caminho absoluto
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)

    const files = await fs.readdir(rootDir)
    walk(files)
}

function walk(files) {
    for (let file of files) {
        console.log(file)
    }
}

readdir()