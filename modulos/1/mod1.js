/*const nome = 'Arthur'
const sobrenome = 'Teixeira'

function falaNome() {
    return `${nome} ${sobrenome}`
}

// exportar apenas oq quero
module.exports = { nome, sobrenome, falaNome }
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome    
    }
}

const nome = 'Arthur'
const sobrenome = 'Teixeira'

module.exports = { nome, sobrenome, Pessoa }
module.exports.idade = 18