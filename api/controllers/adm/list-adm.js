// Controller list-adm
// Controller para a listagem de administradores
// Parâmetros: id
// Retorno: usuarioNaoEncontrado ou success

module.exports = {
  friendlyName: 'Consult users',  
  description: 'Essa rota consulta nossos usuarios',
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'The requesting user agent has been successfully logged out.'
    },
    // usuarioNaoEncontrado - retornado quando o usuário não é encontrado
    usuarioNaoEncontrado: {
      description: "Usuário não encontrado",
      statusCode: 404
    }
  },
  inputs: {
    // id - tipo number
    id: {
      type: "number"
    }
  },
  fn: async function ({ id }) {
    if(id) {
      const user = await User.findOne({ id })
      if(!user) throw 'usuarioNaoEncontrado'
      return user
    }
    // Caso seja fornecido um id, será exibido o registro correspondente, se houver 
    return await User.find()
    // Sem fornecer o id, todos os registros são exibidos
  }
};
  