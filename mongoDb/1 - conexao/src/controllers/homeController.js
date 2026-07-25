const HomeModel = require('../models/HomeModel.js')

// isso retorna uma promisse
HomeModel.create({
    titulo: "Teste",
    descricao: 'estou apenas testando!'
})
    .then(dados => console.log(dados))
    .catch(err => console.log(err))

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
} 

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
