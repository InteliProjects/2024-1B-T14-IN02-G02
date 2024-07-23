// Controller Forms
// Controller para os formulários
// Parâmetros: title

const Joi = require('joi');

module.exports = {
  outputs: {
    // invalidInputs - retornado quando as entradas são inválidas
    invalidInputs: {
      description: 'Invalid inputs',
      statusCode: 400
    },
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'Form created successfully',
      statusCode: 200
    }
  },

  // Função para criar um formulário
  create: async function (req, res) {
    const { title, description } = req.allParams();
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().optional()
    });

    const { error, value } = schema.validate({ title });

    // Verifica se os dados são válidos
    if (error) return res.status(400).json({
      message: 'invalidInputs',
      description: 'Entradas inválidas',
      detailedDescription: [
        error
      ],
      timestamp: new Date(),
      data: [
        req.allParams()
      ]
    });

    // Cria um novo formulário
    const newForm = await Form.create({ ...value }).fetch();

    // Retorna o formulário criado
    return res.status(201).json({
      message: 'success',
      description: 'O formulário foi criado com sucesso',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: newForm
    });
  },

  // Função para buscar todos os formulários
  find: async function (req, res) {
    let forms = await Form.find();

    const questions = await Question.find({ status: 1 })

    const filteredQuestions = questions.reduce((acc, question) => {
      acc[question.idForm] = acc[question.idForm] || [];
      acc[question.idForm].push(question);
      return acc;
    }, []);

    // Busca todos os formulários
    forms = forms.map(form => {
      form.questions = filteredQuestions[form.id] || [];
      return form;
    });

    // Retorna os formulários encontrados
    return res.status(201).json({
      message: 'success',
      description: 'Formulários encontrados com sucesso',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: forms
    });
  },

  // Função para buscar as perguntas de um formulário
  findOne: async function (req, res) {
    const { id } = req.allParams();

    const form = await Form
      .findOne({ id });

    if (!form) {
      return res.status(404).json({
        message: 'notFound',
        description: 'Formulário não encontrado',
        detailedDescription: [ ],
        timestamp: new Date(),
        data: [ ]
      });
    }

    return res.status(200).json({
      message: 'success',
      description: 'Formulário encontrado com sucesso',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: form
    });
  }
};