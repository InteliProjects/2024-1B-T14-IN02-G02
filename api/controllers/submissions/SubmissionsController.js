// Controller SubmissionsController
// Controller para submeter uma resposta a uma questão de um formulário

const Joi = require("joi");

module.exports = {
  //Cria uma nova submissão de formulário
  create: async function (req, res) {
    // Validação dos campos
    const { idForm } = req.allParams();
    const schema = Joi.object({
      idForm: Joi.string().required(),
    });

    // Verifica se os campos são válidos
    const { error, value } = schema.validate({ idForm });
    // Verifica se o formulário submetido existe
    const form = await Form.findOne({ id: value.idForm });
    if (!form)
      return res.status(404).json({
        message: "notFound",
        description: "Formulário não encontrado",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    const submission = await Submission.create({ ...value }).fetch();

    req.session.submissions = req.session.submissions || {};
    req.session.submissions[submission.idForm] = submission;

    return res.status(201).json({
      message: "success",
      description: "O formulário foi criado com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: submission,
    });
  },

  // Função para validar a submissão
  validateSubmission: async function (req, res) {
    const { idForm } = req.allParams();
    const schema = Joi.object({
      idForm: Joi.string().required(),
    });

    const { error, value } = schema.validate({ idForm });

    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    req.session.submissions = req.session.submissions || {};
    const submission = req.session.submissions[value.idForm];

    if (
      !submission
    ) return res.status(404).json({
      message: "notFound",
      description: "Nenhuma submissão encontrada",
      detailedDescription: [],
      timestamp: new Date(),
      data: [],
    });
    const submissionAndFields = await Submission.findOne({ id: submission.id, status: "started" }).populate('fields');

    return res.status(200).json({
      message: "success",
      description: "Últimas submissões",
      detailedDescription: [],
      timestamp: new Date(),
      data: submissionAndFields,
    });
  },

  // Função para finalizar a submissão
  finish: async function (req, res) {
    const { idForm } = req.allParams();
    const schema = Joi.object({
      idForm: Joi.string().required(),
    });

    const { error, value } = schema.validate({ idForm });

    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    req.session.submissions = req.session.submissions || {};
    if (!req.session.submissions[value.idForm]) return res.status(404).json({
      message: "notFound",
      description: "Nenhuma submissão encontrada",
      detailedDescription: [],
      timestamp: new Date(),
      data: [],
    });

    const submission = req.session.submissions[value.idForm];
    req.session.submissions[value.idForm].status = 'finished';
    const updatedSubmission = await Submission
      .updateOne({ id: submission.id })
      .set({ status: 'finished' });
      
    delete req.session.submissions[value.idForm];
    
    return res.status(200).json({
      message: "success",
      description: "Submissão finalizada com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: updatedSubmission,
    });
  },

  // Função para submeter uma resposta a uma questão de um formulário
  submit: async function (req, res) {
    const { idQuestion, idSubmission, answer } = req.allParams();

    const schema = Joi.object({
      idQuestion: Joi.string().required(),
      idSubmission: Joi.string().required(),
      answer: Joi.object().required(),
    });

    const { error, value } = schema.validate({
      idQuestion,
      idSubmission,
      answer,
    });

    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    const question = await Question.findOne({
      id: value.idQuestion,
      status: 1,
    });
    if (!question)
      return res.status(404).json({
        message: "notFound",
        description: "Essa pergunta não existe ou não aceita mais respostas",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    const isSubmitted = await SubmissionField.findOne({
      idQuestion: value.idQuestion,
      idSubmission: value.idSubmission,
    });
    if (isSubmitted) {
      const submittedField = await SubmissionField.updateOne({
        idQuestion: value.idQuestion,
        idSubmission: value.idSubmission,
      }).set({
        value: value.answer,
      });

      return res.status(200).json({
        message: "success",
        description: "Resposta atualizada com sucesso",
        detailedDescription: [],
        timestamp: new Date(),
        data: submittedField,
      });
    }

    const submitedField = await SubmissionField.create({
      idQuestion: value.idQuestion,
      idSubmission: value.idSubmission,
      value: value.answer,
    }).fetch();

    return res.status(201).json({
      message: "success",
      description: "Resposta submetida com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: submitedField,
    });
  },

  // Função para listar uma submissão
  listOne: async function (req, res) {
    const { idSubmission } = req.allParams();
    const schema = Joi.object({
      idSubmission: Joi.string().required(),
    });

    const { error, value } = schema.validate({ idSubmission });

    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    const submission = await Submission.findOne({ id: value.idSubmission });
    if (!submission)
      return res.status(404).json({
        message: "notFound",
        description: "Submissão não encontrada",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    const submissionFields = await SubmissionField.find({
      idSubmission: value.idSubmission,
    });

    return res.status(200).json({
      message: "success",
      description: "Submissão encontrada",
      detailedDescription: [],
      timestamp: new Date(),
      data: {
        ...submission,
        submissionFields,
      },
    });
  },

  // Função para listar um subformulário
  listSubForm: async function (req, res) {
    const { idForm } = req.allParams();
    const schema = Joi.object({
      idForm: Joi.string().required(),
    });

    const { error, value } = schema.validate({ idForm });

    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    const form = await Form.findOne({ id: value.idForm });
    if (!form)
      return res.status(404).json({
        message: "notFound",
        description: "Formulário não encontrado",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    const submissions = await Submission.find({ idForm: value.idForm });
    if (!submissions.length)
      return res.status(404).json({
        message: "notFound",
        description: "Nenhuma submissão encontrada",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    const submissionsFields = await SubmissionField.find({
      idSubmission: submissions.map((submission) => submission.id),
    });

    return res.status(200).json({
      message: "success",
      description: "Submissões encontradas",
      detailedDescription: [],
      timestamp: new Date(),
      data: {
        ...form,
        submissions: submissions.map((submission) => ({
          ...submission,
          submissionFields: submissionsFields.filter(
            (submissionField) => submissionField.idSubmission === submission.id
          ),
        })),
      },
    });
  }
};
