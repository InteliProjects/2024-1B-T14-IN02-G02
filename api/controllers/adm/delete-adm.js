// Controller delete-adm
// Controller para a deleção de um administrador
// Parâmetros: id
// Retorno: usuarioNaoEncontrado ou success

module.exports = {
  friendlyName: "Deleting users",
  description: "Essa rota deleta usuários",
  exits: {
    // success - retornado quando a função é executada com sucesso  
    success: {
      description: "Usuário deletado com sucesso",
    },
    // usuarioNaoEncontrado - retornado quando o usuário não é encontrado
    usuarioNaoEncontrado: {
      description: "Usuário não foi encontrado na base de dados",
      statusCode: 404,
    },
  },
  inputs: {
    // id - tipo number - required
    id: {
      type: "number",
      required: true,
    },
  },
  fn: async function ({ id }) {
    const deletedUser = await User.destroyOne({ id: id });
    if (!deletedUser) throw "usuarioNaoEncontrado";
    return deletedUser;
    // Com base no id, se for encontrado um usuário, ele será apagado
  },
};
