// Controller view-change-password
// Controller para a visualização da página de alteração de senha
// Parâmetros: hash
// Retorno: success

module.exports = {
  friendlyName: 'View change password',
  description: 'Display "change Password" page.',
  inputs: {
    // hash - tipo string - required
    hash: {
      type: 'string',
      required: true,
    }
  },
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      viewTemplatePath: 'pages/auth/change-password'
    }

  },
  fn: async function (inputs, outputs) {
    // Verifica se o hash é válido
    const validateHash = await User.findOne({ passChangeHash: inputs.hash });
    if(validateHash === undefined) {
      this.res.redirect('/login')
    }

    if (this.req.me) {
      throw {redirect: '/dashboard'};
    }

    // Retorna os dados para a página
    return {
      syncing: false,
      formErrors: {},
      cloudError: {},
      formData: {
        resetToken: inputs.hash
      },
      formRules: {
        password: { required: true },
        passwordConfirmation: { required: true },
        resetToken: { required: true }
      }
    };

  }
};
