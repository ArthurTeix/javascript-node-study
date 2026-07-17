// exportando função da pag inicial para usar no server
exports.paginaInicial = (req, res) => {
    res.render('index')
} 

exports.trataPost = (req, res) => {
    res.send("ei, sou sua nova rota de POST")
}
