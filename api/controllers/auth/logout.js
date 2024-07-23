// Controller logout
// Controller para deslogar um usuário
// Parâmetros: Nenhum
// Retorno: success

module.exports = {
  friendlyName: "Logout user",
  description: "Essa rota permite ao usuário deslogar",

  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: "Login bem-sucedido",
      statusCode: 200,
    },
  },

  // Função para deslogar um usuário
  fn: async function () {
    delete this.req.session.userId;
    return this.res.redirect("/login");
  },
};
