
// OS MÉTODOS NÃO PODEM TER NOMES COM ESPAÇO OU SEPARADOS POR TRAÇO, APENAS CAMEL CASE
Cloud.setup({

  /* eslint-disable */
  methods: {
    "login": {
      "verb":"POST",
      "url":"/api/v1/login",
      "args":["emailAddress", "password"]
    },
    "recoverPassword": {
      "verb":"POST",
      "url":"/api/v1/forgot-password",
      "args":["emailAddress"]
    },
    "changePassword": {
      "verb":"POST",
      "url":"/api/v1/change-password",
      "args":["password", "passwordConfirmation", "resetToken"]
    },
    "submitField": {
      "verb":"PUT",
      "url":"/api/v1/form/submission/:submissionId/question/:questionId",
      "args":["answer"]
    },
    "getValidSubmission": {
      "verb":"GET",
      "url":"/api/v1/form/:idForm/submission/validate",
      "args":[]
    },
    "createSubmission": {
      "verb":"POST",
      "url":"/api/v1/form/:idForm/submission",
      "args":[]
    },
    "finishSubmission": {
      "verb":"DELETE",
      "url":"/api/v1/form/:idForm/submission",
      "args":[]
    }
  }
  /* eslint-enable */

});
