const nome = 'Arthur'
const sobrenome = 'Teixeira'

function falaNome() {
    return `${nome} ${sobrenome}`
}

// exportar apenas oq quero
module.exports = { nome, sobrenome, falaNome }
