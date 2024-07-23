// Model Form
// Modelo de dados para o Formulário
// Atributos: title, description, status
module.exports = {
  attributes: {
    // Atributo title do tipo string e obrigatório
    title: {
      type: 'string',
      required: true,
    },
    // Atributo description do tipo string e não obrigatório
    description: {
      type: 'string',
      required: false,
    },
    // Atributo status do tipo number e com valor padrão 1
    status: {
      type: 'number',
      defaultsTo: 1
    }
  }
};
