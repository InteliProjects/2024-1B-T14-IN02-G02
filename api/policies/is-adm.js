// Essa política verifica se o usuário está logado, caso não esteja, redireciona para a página de login
module.exports = async function (req, res, proceed) {
    if(req.session.userId) {
        return proceed();
    }
    return res.redirect('/login');
}