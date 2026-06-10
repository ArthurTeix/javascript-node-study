const nome = 'Arthur'
const sobrenome = 'Teixeira'
const falaNome = () => nome + ' ' + sobrenome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome

// Objeto que diz tudo que está sendo exportado
console.log(module.exports)