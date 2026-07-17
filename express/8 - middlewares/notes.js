/*
    - O QUE SÃO MIDDLEWARES?

- Função que roda "no meio" do fluxo, entre a requisição e a resposta.
- Pode: ler/alterar a requisição, bloquear o fluxo, ou passar adiante (next()).
- Roda em cadeia: Req -> MW1 -> MW2 -> Handler -> Res
- Usos comuns: auth, log, CORS, parse de body, rate limit, tratamento de erro.

Ex (Express):
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

*/