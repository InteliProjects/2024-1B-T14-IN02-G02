// Controller create-adm
// Controller para a criação de um novo administrador
// Parâmetros: name, emailAddress, password
// Retorno: success

module.exports = {
  friendlyName: 'Create users',
  description: 'Essa rota cria nossos usuarios',
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'The requesting user agent has been successfully logged out.'
    },
  }, 
  inputs:{
    // name - tipo string - required
    name: {
      type: "string",
      required: true
    },
    // emailAddress - tipo string - required
    emailAddress: {
      type: "string",
      required: true
    },
    // password - tipo string - required
    password: {
      type: "string",
      required: true
    }
  },
  fn: async function ({ user, emailAddress, password }) {
    // Cria um novo usuário e retorna ele
    return await User.create({ 
      user, 
      email: emailAddress, 
      password: await sails.helpers.passwords.hashPassword(password)
    })
  }
};
  