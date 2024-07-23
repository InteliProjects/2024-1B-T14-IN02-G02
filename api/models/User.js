// Model User
// Modelo de dados para os usuários
// Atributos: name, email, password, passChangeHash, status, isAdmin
module.exports = {
  attributes: {
    // Atributo name do tipo string e não obrigatório
    name: {
      type: 'string',
      required: false,
      example: 'Mary',
      maxLength: 255,
    },
    // Atributo email do tipo string, obrigatório e único
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 255,
      example: 'mary.sue@example.com'
    },
    // Atributo password do tipo string e obrigatório
    password: {
      type: 'string',
      required: true,
      protect: true,
      maxLength: 255,
    },
    // Atributo passChangeHash do tipo string, não obrigatório e único
    passChangeHash: {
      type: 'string',
      required: false,
      maxLength: 255,
      unique: true
    },
    // Atributo status do tipo number e com valor padrão 1
    status: {
      type: 'number',
      defaultsTo: 1
    },
    // Atributo isAdmin do tipo boolean e com valor padrão false
    isAdmin: {
      type: 'boolean',
      defaultsTo: false
    },
  },
};

