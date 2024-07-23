// Controller change-password
// Controller para a troca de senha
// Parâmetros: password, passwordConfirmation, resetToken
// Retorno: success, notEqualPassword, notFound

module.exports = {
  inputs: {
    // password - tipo string - required
    password: {
      type: 'string',
      description: 'Nova senha do usuário',
      required: true
    },
    // passwordConfirmation - tipo string - required
    passwordConfirmation: {
      type: 'string',
      description: 'Confirmação da nova senha do usuário',
      required: true
    },
    // resetToken - tipo string - required
    resetToken: {
      type: 'string',
      description: 'Token de reset enviado via e-mail',
      required: true
    }
  },
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'Sua senha foi alterada com sucesso.',
      statusCode: 204
    },
    // notEqualPassword - retornado quando as senhas não coincidem
    notEqualPassword: {
      description: 'As duas senhas não coincidem.',
      statusCode: 400
    },
    // notFound - retornado quando o token não é encontrado
    notFound: {
      description: 'Token inválido.',
      statusCode: 404
    }
  },
  // Função para alterar a senha do usuário
  fn: async function({ password, passwordConfirmation, resetToken }, exits) {
    // Procura o usuário pelo token
    var user = await User.findOne({ passChangeHash: resetToken });
    // Se não encontrar o usuário, retorna um erro
    if (!user) {
      return {
        notFound: {
          message: "Token inválido."
        }
      };
    }

    // Verifica se as senhas são iguais
    if (password !== passwordConfirmation) {
      return {
        notEqualPassword: {
          message: "As duas senhas não coincidem."
        }
      };
    }

    // Atualiza a senha do usuário
    await User.updateOne({ 
      id: user.id
    }).set({ 
      password: await sails.helpers.passwords.hashPassword(password) 
    });
    
    return this.res.json({
      success: {
        message: "Senha alterada com sucesso."
      }
    });
  }
};
