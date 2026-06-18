// mesmo que o nome do arquivo seja 'module', a const multiplicacao recebe tudo de module
const multiplicacao = require("./modMult")
console.log(multiplicacao(2, 5))

const Cachorro = require("./modClass")
const c1 = new Cachorro("Lulu")
console.log(c1.latir())