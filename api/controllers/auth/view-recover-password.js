// Controller view-recover-password
// Controller para a visualização da página de recuperação de senha
// Parâmetros: Nenhum
// Retorno: success

module.exports = {
  friendlyName: 'View recover password',
  description: 'Display "Recover password" page.',
  exits: {
    // success - retornado quando a função é executada com sucesso  
    success: {
      viewTemplatePath: 'pages/auth/recover-password'
    }
  },
  fn: async function () {
    // Respond with view.
    return {
      syncing: false,
      formErrors: {},
      cloudError: {}, 
      formData: {},
      formRules: {
        emailAddress: { required: true, isEmail: true }
      }
    };
  }
};
