exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Testando variável local"
    next() // <- NUNCA ESQUECER
}
