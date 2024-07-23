// Controller update-adm
// Controller para a atualização de um administrador
// Parâmetros: id, newEmailAddress
// Retorno: success ou usuarioNaoEncontrado

module.exports = {
  friendlyName: 'Update users',
  description: 'Essa rota atualiza nossos usuarios',
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'The requesting user agent has been successfully updated.'
    },
    // usuarioNaoEncontrado - retornado quando o usuário não é encontrado
    usuarioNaoEncontrado: {
      description: 'O usuário não foi encontrado',
      statusCode: 404
    }
  }, 
  inputs:{
    // id - tipo number - required
    id: {
      type: "number",
      required: true
    },
    // newEmailAddress - tipo string - required
    newEmailAddress: {
      type: "string",
      required: true
    }
  },
  // Função para atualizar o email de um usuário 
  fn: async function ({ id, newEmailAddress }) {
    return await User.update({ id: id })
    .set({
      emailAddress: newEmailAddress
    })
    // Atualiza o email de um usuário a partir do novo email e o seu id
  }  
};
  