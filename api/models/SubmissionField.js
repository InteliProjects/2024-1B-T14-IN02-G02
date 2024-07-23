// Model SubmissionField
// Modelo de dados para a submissão de um campo de um formulário
// Atributos: idQuestion, idSubmission, value
module.exports = {
  attributes: {
    // Atributo idQuestion do tipo number e obrigatório
    idQuestion: {
      model: 'question',
      required: true,
    },
    // Atributo idSubmission do tipo number e obrigatório
    idSubmission: {
      model: 'submission',
      required: true,
    },
    // Atributo value do tipo json e obrigatório
    value: {
      type: 'json',
      columnType: 'jsonb',
      required: true,
    },
  }
};
