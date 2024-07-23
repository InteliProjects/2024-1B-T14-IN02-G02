// Controller validar-email
// Controller para validar se um email é válido
// Parâmetros: email
// Retorno: success ou invalid

module.exports = {
  // Nome do helper 
  friendlyName: 'email valido',
  // Descrição do que o helper faz
  description: 'validar se o email em string é valido ou não.',

  // Input dos dados
  inputs: {
    // email - tipo string - required
    email: {
      type: 'string',
      example: 'examplo@examplo.com',
      description: 'Validar o endereço de email.',
      required: true
    }
  },

  // Possíveis retornos
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'O email enviado está valido.'
    },
    // invalid - retornado quando o email é inválido
    invalid: {
      description: 'O email enviado está invalido.'
    }
  },

  fn: async function(inputs, exits) {
    // Valida se uma string corresponde ao formato de um endereço de e-mail básico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(inputs.email)) {
      return exits.success();
    } else {  
    
      return exits.invalid('Endereço de email inválido.');
    }
  }
};