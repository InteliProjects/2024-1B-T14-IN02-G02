/**
 * FormsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Joi = require('joi');

module.exports = {
  outputs: {
    invalidInputs: {
      description: 'Invalid inputs',
      statusCode: 400
    },
    success: {
      description: 'Contato created successfully',
      statusCode: 200
    }
  },
  create: async function (req, res) {
    const { name, email, telefone } = req.allParams();
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      telefone: Joi.string().required()
    });

    const { error, value } = schema.validate({ name, email, telefone });
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

    const newContato = await Contato.create({ ...value }).fetch();

    return res.status(201).json({
      message: 'success',
      description: 'O formulário foi criado com sucesso',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: newContato
    });
  },
  find: async function (req, res) {
    let contato = await Contato.find();

    return res.status(201).json({
      message: 'success',
      description: 'Formulários encontrados com sucesso',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: contato
    });
  },
  findOne: async function (req, res) {
    const { id } = req.allParams();

    const contato = await Contato
      .findOne({ id });

    if (!contato) {
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