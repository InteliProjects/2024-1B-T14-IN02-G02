// Controller view-home
// Controller para a página inicial do dashboard
// Parâmetros: initDate, endDate, idQuestion, expectedValue
// Retorno: página inicial do dashboard

module.exports = {
  friendlyName: 'View home',
  description: 'Display "Home" page.',
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      viewTemplatePath: 'pages/dashboard/home'
    }
  },
  fn: async function () {
    // Respond with view.
    return {
      layout: 'layouts/dashboard-layout'
    };
  }
};
