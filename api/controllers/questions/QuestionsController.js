// Controller QuestionsController
// Controller para criar, buscar e encontrar perguntas
// Parâmetros: idForm, question, typeQuestion, isRequired, label, placeholder, order, options
// Retorno: sucesso ou falha

const Joi = require("joi");
const requireOptions = {
  select: true,
  multiselect: true,
  radio: true,
  checkbox: true,
  text: false,
};

module.exports = {
  // Função para criar uma pergunta
  create: async function (req, res) {
    // Coleta os dados da requisição
    const {
      idForm,
      question,
      typeQuestion,
      isRequired,
      label,
      placeholder,
      order,
      options,
    } = req.allParams();

    // Validação dos campos
    const schema = Joi.object({
      idForm: Joi.string().required(),
      question: Joi.string().required(),
      typeQuestion: Joi.string().required(),
      isRequired: Joi.boolean().required(),
      label: Joi.string().required(),
      placeholder: Joi.string().optional(),
      order: Joi.number().optional(),
      options: requireOptions[typeQuestion] // Condicional para verificar as opcções de select
        ? Joi.array().items(Joi.string()).required()
        : Joi.array().optional(),
      condition: Joi.object({
        idQuestion: Joi.number().required(),
        value: Joi.number().required(),
      }).optional(),
    });

    const { error, value } = schema.validate({
      idForm,
      question,
      typeQuestion,
      isRequired,
      label,
      placeholder,
      order,
      options,
      condition,
    });
    if (error)
      return res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    // Verifica se o formulário submetido existe
    const form = await Form.findOne({ id: idForm });
    if (!form)
      return res.status(404).json({
        message: "notFound",
        description: "Formulário não encontrado",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    // Pega a ordem do campo caso não seja passado
    if (!value.order) {
      const questions = await Question.find({ idForm: idForm });
      value.order = questions.length + 1;
    }
    
    // Agrupa os dados da pergunta
    const questionData = {
      idForm,
      question,
      typeQuestion,
      isRequired,
      label,
      placeholder,
      order: value.order,
      condition,
    }
    // Cria a pergunta
    const newQuestion = await Question.create({ ...questionData, status: 1 }).fetch();

    // Cria as opções da pergunta
    if (requireOptions[typeQuestion]) {
      const { error, value } = Joi.object({
        options: Joi.array().items(Joi.string()).required(),
      }).validate({ options });
      if (error)
        return res.status(400).json({
          message: "invalidInputs",
          description: "Entradas inválidas",
          detailedDescription: [error],
          timestamp: new Date(),
          data: [req.allParams()],
        });

      await OptionQuestion.createEach(
        value.options.map((option) => ({ idQuestion: newQuestion.id, option }))
      );
    }

    // Retorna a resposta
    return res.status(201).json({
      message: "success",
      description: "A pergunta foi criada com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: newQuestion,
    });
  },

  // Função para buscar todas as perguntas
  find: async function (req, res) {
    let questions = await Question.find();

    return res.status(200).json({
      message: "success",
      description: "As perguntas foram encontradas com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: questions,
    });
  },

  // Função para buscar as perguntas de um formulário
  findFormFields: async function (req, res) {
    const { idForm } = req.allParams();
    const schema = Joi.object({
      idForm: Joi.string().required(),
    });

    let questions = await Question.getDatastore().sendNativeQuery(`
      SELECT 
          q.id,
          q.question,
          q.placeholder,
          q.label,
          q."typeQuestion",
          COALESCE(
              (
                  SELECT jsonb_agg(
                      jsonb_build_object(
                          'id', cond.id,
                          'idForm', cond."idForm",
                          'question', cond.question,
                          'typeQuestion', cond."typeQuestion",
                          'isRequired', cond."isRequired",
                          'label', cond.label,
                          'placeholder', cond.placeholder,
                          'order', cond."order",
                          'defaultValue', cond."defaultValue",
                          'condition', cond.condition,
                          'status', cond.status,
                          'options', COALESCE(
                      (
                          SELECT jsonb_agg(
                              jsonb_build_object(
                                  'id', opt.id,
                                  'option', opt.option
                              )
                          )
                          FROM optionquestion opt
                          WHERE opt."idQuestion" = cond.id
                      ), '[]'::jsonb
                  )
                      )
                  )
                  FROM question cond
                  WHERE (cond.condition->>'idQuestion')::int = q.id
              ), '[]'::jsonb
          ) AS concatenatedSubQuestions,
          COALESCE(
              (
                  SELECT jsonb_agg(
                      jsonb_build_object(
                          'id', opt.id,
                          'option', opt.option
                      )
                  )
                  FROM optionquestion opt
                  WHERE opt."idQuestion" = q.id
              ), '[]'::jsonb
          ) AS options
      FROM 
          question q
      WHERE
          q."idForm" = $1
          AND q.condition IS NULL
      GROUP BY 
          q.id, q.question, q.placeholder, q.label, q."typeQuestion"
      ORDER BY 
          q."order"
    `, [idForm]);

    return res.status(200).json({
      message: "success",
      description: "As perguntas foram encontradas com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: questions.rows,
    });
  },
  findOne: async function (req, res) {
    const { id } = req.allParams();
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const { error, value } = schema.validate({ id });

    if (error)
      res.status(400).json({
        message: "invalidInputs",
        description: "Entradas inválidas",
        detailedDescription: [error],
        timestamp: new Date(),
        data: [req.allParams()],
      });

    const question = await Question.findOne({ id: value.id });

    if (!question)
      res.status(404).json({
        message: "notFound",
        description: "Pergunta não encontrada",
        detailedDescription: [],
        timestamp: new Date(),
        data: [],
      });

    return res.status(200).json({
      message: "success",
      description: "Pergunta encontrada com sucesso",
      detailedDescription: [],
      timestamp: new Date(),
      data: question,
    });
  },
};
