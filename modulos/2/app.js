// mesmo que o nome do arquivo seja 'module', a const multiplicacao recebe tudo de module
const multiplicacao = require("./modMult")
console.log(multiplicacao(2, 5))

// Exportei a classe cachorro, mas com nome diferente e mesmo assim funciona normalmente
const aaa = require("./modClass")
const c1 = new aaa("Lulu")
console.log(c1.latir())