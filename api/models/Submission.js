// Model Submission
// Modelo de dados para a submissão de um formulário
// Atributos: idForm, fields, status
module.exports = {
  attributes: {
    // Atributo idForm do tipo number e obrigatório
    idForm: {
      model: 'form',
      required: true,
    },
    // Relacionamento com a model SubmissionField
    fields: {
      collection: 'submissionfield',
      via: 'idSubmission'
    },
    // Atributo status do tipo string e com valor padrão 'started'
    // Valores possíveis: 'started', 'finished'
    status: {
      type: 'string',
      isIn: ['started', 'finished'],
      defaultsTo: 'started'
    }
  }
};
