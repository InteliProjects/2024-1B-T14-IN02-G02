// Controller view-login
// Controller para a visualização da página de login
// Parâmetros: Nenhum
// Retorno: success

module.exports = {
  friendlyName: 'View login',
  description: 'Display "Login" page.',
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      viewTemplatePath: 'pages/auth/login'
    }
  },
  // Função para visualizar a página de login
  fn: async function () {
    return {
      syncing: false,
      formErrors: {},
      cloudError: {},
      formData: {},
      formRules: {
        emailAddress: { required: true, isEmail: true },
        password: { required: true }
      }
    };
  }
};
