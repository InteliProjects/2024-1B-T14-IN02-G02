// Controller export-data
// Controller para exportar os dados em formato csv ou json
// Parâmetros: inputData
// Retorno: badRequest ou success

module.exports = {
  friendlyName: 'Export data',
  description: 'Esse helper exporta os dados em formato csv ou json',
  inputs: {
    // inputData - tipo ref - required
    inputData: {
      type: 'ref',
      require: true,
    }
  },
  exits: {
    // success - retornado quando a função é executada com sucesso  
    success: {
      description: 'All done.',
    },
    // badRequest - retornado quando algo dá errado
    badRequest: {
      description: 'Something went wrong.'
    }
  },
  // Função para exportar os dados
  fn: async function ({inputData}) {
    const { selectedData } = inputData;
    const titleKeys = Object.keys(selectedData.rows[0]);
    const refinedData = [];

    refinedData.push(titleKeys);
    // Adiciona os dados
    selectedData.rows.forEach(row => {
      refinedData.push(Object.values(row));
    });

    let csvContent = '';
    // Adiciona os dados ao csv
    refinedData.forEach(row => {
      csvContent += row.join(';') + '\n';
    });

    const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
    const csvObjUrl = URL.createObjectURL(csvBlob);

    // Cria um json com os dados
    const jsonBlob = new Blob([JSON.stringify(selectedData.rows)], { type: 'application/json;charset=utf-8,' });
    const jsonObjUrl = URL.createObjectURL(jsonBlob);

    // Retorna os links para download
    return {
      csvUrl: csvObjUrl,
      jsonUrl: jsonObjUrl
    };
  }
};
