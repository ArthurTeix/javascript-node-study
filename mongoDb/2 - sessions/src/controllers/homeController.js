exports.paginaInicial = (req, res) => {
    //  EXEMPLO DE SESSIONS
    // req.session.usuario = { nome: 'arthur', idade: 18 } <- esses dados ficarão salvos por 7 dias
    // console.log(req.session.usuario) e sempre serão exibidos no console após esse comando

    //  EXEMPLO DE FLASH <- mensagem a ser exibida apenas uma vez (não é armazenada)
    // req.flash('info', "informação")
    // req.flash('err', "Algo deu errado")
    // req.flash('sucess', "Sucesso!")
    // console.log(req.flash('info'), req.flash('err'), req.flash('sucess'))
    res.render('index')
    return
} 

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
