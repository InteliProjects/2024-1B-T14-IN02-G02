// Controller contact
// Controller para a página de contato
// Parâmetros: nenhum
// Retorno: success

module.exports = {
  friendlyName: 'Contato',
  description: 'Display "contato" page.',
  exits: {
    success: {
      viewTemplatePath: 'pages/home/contact',
    },
  },
  // Retorna a view de contato
  fn: async function () {
    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};
  }
};