// Controller view-form
// Controller para a página de formulário
// Parâmetros: idForm
// Retorno: sucesso ou notFound

const { default: axios } = require("axios");

module.exports = {
  friendlyName: 'View form',
  description: 'Display "Form" page.',
  inputs: {
    idForm: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/forms/form'
    },
    notFound: {
      responseType: 'notFound'
    }
  },

  // Função para exibir a página de formulário
  fn: async function ({ idForm }, res) {
    const host = 'http://localhost:1337';

    const fields = await axios
      .get(`${host}/api/v1/form/${idForm}/question`);

    if(!fields.data.data || fields.data.data.length === 0) return this.res.status(404).json({
      message: 'notFound',
      description: 'Formulário não encontrado',
      detailedDescription: [ ],
      timestamp: new Date(),
      data: [ ]
    });
  
    const fieldList = await fields.data.data.map(field => {
      return {
        ...field,
        answer: null
      }
    })

    const form = await axios
      .get(`${host}/api/v1/form/${idForm}`);
    
    if(!this.req.session.submissions) this.req.session.submissions = { };

    // Respond with view.
    return {
      form: form.data.data,
      fields: fieldList,
      submission: this.req.session.submissions[idForm] || null,
      startNewSubmission: async function () {
        this.req.session
          .submissions[idForm] = await axios
            .post(`${host}/api/v1/form/${idForm}/submission`, { withCredentials: true })
            .then(response => this.req.session.submissions[idForm] = response.data.data)
            .catch(error => console.error(error));
        
        return this.req.session.submissions[idForm];
      }
    };
  }
};