// Model OptionQuestion
// Modelo de dados para as opções de uma questão
// Atributos: idQuestion, option
module.exports = {
  attributes: {
    // Atributo idQuestion do tipo number e obrigatório
    idQuestion: {
      model: 'question',
      required: true,
    },
    // Atributo option do tipo string e obrigatório
    option: {
      type: 'string',
      required: true,
    }
  },
};
