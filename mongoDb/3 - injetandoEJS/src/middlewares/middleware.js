// Exportando logo de cara para facilitar na hora de importar
// nunca esquecer do next pois a requisição não termina sem o next
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Testando variável local"
    next() // <- NUNCA ESQUECER
}