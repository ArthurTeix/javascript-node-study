// exportando função da pag inicial para usar no server
exports.paginaInicial = (req, res) => {
    res.send(`
        <form action='/' method='POST'>
            Nome: <input type='text' name='nome'>
            <button>Enviar Formulário</button>
        </form> 
    `)
} 
