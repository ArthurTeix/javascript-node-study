
// o parâmetro next, é referente ao próximo middleware
// exemplo middleware
// exports.paginaInicial = (req, res, next) => {
//     res.render('index')
//     next()
// } 
exports.paginaInicial = (req, res) => {
    res.render('index')
    return
} 

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
