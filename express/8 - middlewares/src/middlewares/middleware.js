// Exportando logo de cara para facilitar na hora de importar
// nunca esquecer do next pois a requisição não termina sem o next
module.exports = (req, res, next) => {
    if (req.body) {
        console.log()
        console.log(`Vi que você postou um nome: ${req.body.cliente}`)
        console.log()
    }

    next() // <- NUNCA ESQUECER
}