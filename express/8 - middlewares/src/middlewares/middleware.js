// Exportando logo de cara para facilitar na hora de importar
// nunca esquecer do next pois a requisição não termina sem o next
module.exports = (req, res, next) => {
    console.log()
    console.log('passei no middleware global')
    console.log()

    next() // <- NUNCA ESQUECER
}