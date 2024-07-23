// Controller Home
// Controller para a página inicial
// Parâmetros: nenhum
// Retorno: homepage

module.exports = {
  friendlyName: 'Home',
  description: 'Display "Home" page.',
  exits: {
    success: {
      viewTemplatePath: 'pages/home/homepage',
    },
  },
  // Função para exibir a página inicial
  fn: async function () {
    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};
  }
};
