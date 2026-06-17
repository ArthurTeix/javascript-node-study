/*const { nome, sobrenome, falaNome } = require('./mod1')
console.log(nome, sobrenome, falaNome())
*/

const { nome, sobrenome, idade, Pessoa } = require('./mod1')

const p1 = new Pessoa('Ingrid')

console.log(p1, '-', nome, '-', sobrenome, '-', idade)
