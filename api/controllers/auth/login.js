// Controller login
// Controller para logar um usuário
// Parâmetros: emailAddress, password
// Retorno: success, entradasInsuficientes, usuarioNaoEncontrado, senhaIncorreta

module.exports = {
  friendlyName: 'Login user',
  description: 'Essa rota permite ao usuário logar',
  exits: { //possiveis retornos da rota 
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'Login bem-sucedido', //retorno de uma rota 
      statusCode: 200 //requisição hhtp
    },
    // entradasInsuficientes - retornado quando os parâmetros não são suficientes
    entradasInsuficientes: {
      description: 'Email ou Senha incorretos',
      statusCode: 400
    },
    // usuarioNaoEncontrado - retornado quando o usuário não é encontrado
    usuarioNaoEncontrado: {
      description: 'O usuário não encontrado',
      statusCode: 404
    },
    // senhaIncorreta - retornado quando a senha está incorreta
    senhaIncorreta: {
      description: 'Senha incorreta',
      statusCode: 401
    }
  },
  inputs: {
    // emailAddress - tipo string - required
    emailAddress: {
      type:  'string',
      required: true
    },
    // password - tipo string - required
    password: {
      type: 'string',
      required: true
    }
  },
  fn: async function({ emailAddress, password }, outputs) {
    if (!emailAddress || !password) { //ocorro em segundo plano 
      return outputs.entradasInsuficientes({
        message: "Email e senha são obrigatórios!"
      });
    }
    var user = await User.findOne({ email: emailAddress }); //procurar no banco de dados se o emial está certo 
    
    if(!user) { //caso não seja encontrado 
      return this.res.status(404).json({
        message: "Usuário não encontrado!"
      });
    }
    //verificar se a senha está correta
    await sails.helpers.passwords.checkPassword(password, user.password) //verificar no helper
        .intercept('incorrect', () => {
          return {
            senhaIncorreta: {
              message: 'Senha incorreta! Tente novamente!'
            }
          };
        });
    this.req.session.userId = user.id;
    return 'success';
  }
};
