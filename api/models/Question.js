// Model Question
// Modelo de dados para as questões
// Atributos: idForm, question, typeQuestion, isRequired, label, placeholder, order, defaultValue, status
module.exports = {
  attributes: {
    // Atributo idForm do tipo number e obrigatório
    idForm: {
      model: 'form',
      required: true,
    },
    // Atributo question do tipo string e obrigatório
    question: {
      type: 'string',
      required: true,
    },
    // Atributo typeQuestion do tipo string e obrigatório
    typeQuestion: {
      type: 'string',
      required: true,
    },
    // Atributo isRequired do tipo boolean
    isRequired: {
      type: 'boolean',
    },
    // Atributo label do tipo string e não obrigatório
    label: {
      type: 'string',
      required: false,
    },
    // Atributo placeholder do tipo string e não obrigatório    
    placeholder: {
      type: 'string',
      required: false,
    },
    // Atributo order do tipo number e obrigatório
    order: {
      type: 'number',
      required: true,
    },
    // Atributo defaultValue do tipo string e não obrigatório
    defaultValue: {
      type: 'string',
      required: false,
    },
    // Atributo condition do tipo jsonb e não obrigatório
    condition: {
      type: 'json',
      columnType: 'jsonb',
      required: false,
    },
    // Atributo status do tipo number e com valor padrão 1
    status: {
      type: 'number',
      defaultsTo: 1
    },
    // Relacionamento com a model OptionQuestion
    options: {
      collection: 'optionquestion',
      via: 'idQuestion'
    }
  }
};
