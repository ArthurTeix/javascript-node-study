exports.paginaInicial = (req, res) => {
    res.render('index', { // posso injetar dados na minha página ejs direto na sua renderização
        titulo: "Aqui fica o <span style='color: red'>título</span> da minha página",
        mensagem: "Mensagem para exibir de teste"
    })
    return
} 

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
