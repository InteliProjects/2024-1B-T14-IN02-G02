module.exports = {
  friendlyName: 'Página de Contato',
  description: 'Exibe a página de contato',
  exits: {
    success: {
      viewTemplatePath: 'pages/home/contact'
    }
  },
  fn: async function() {
    if (this.req.me) {
      return { redirect: '/' };
    }

    return {};
  }
}