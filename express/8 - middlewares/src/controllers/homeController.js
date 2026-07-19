// exportando função da pag inicial para usar no server
// o parâmetro next, é referente ao próximo middleware
exports.paginaInicial = (req, res, next) => {
    console.log('oiee')
    res.render('index')
    next()
} 

exports.trataPost = (req, res, next) => {
    res.send("ei, sou sua nova rota de POST")
}
