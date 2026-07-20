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

O exemplo usado na página inicial funciona assim: 
1º chamo o middleware "passei no seu middleware" e depois chamo a página para ser exibida
2º após iniciar a página, vou chamar outra function middleware "ainda estou aqui" que invoquei no control da páginaInicial 

->  Middlewares são importantes e muito fortes pois podem intervir durante a interação do cliente com o site, proporcionando correções e alterações dinâmicas.
*/
