// Controller submission-response
// Controller para submeter uma resposta a uma questão de um formulário
// Parâmetros: idQuestion, idSubmission, value
// Retorno: sucesso ou falha

module.exports = {
    inputs: {
        // Parâmetro idQuestion do tipo number e obrigatório
        idQuestion: {
            type: 'number',
            require: true
        },
        // Parâmetro idSubmission do tipo number e obrigatório
        idSubmission: {
            type: 'number',
            require: true
        },
        // Parâmetro value do tipo string e obrigatório
        value: {
            type: 'string',
            required: true
        }
    },
    exits: {
        // Resposta de sucesso
        success: {
            statusCode: 200,
            description: 'A resposta foi gravada com sucesso'
        },
        // Resposta de falha
        failed: {
            statusCode: 500,
            description: 'Houve um erro ao submeter a resposta'
        }
    },

    // Função para submeter uma resposta a uma questão de um formulário
    fn: async function (req, exits) {  
        var idQuestion = req.idQuestion;
        var idSubmission = req.idSubmission;
        var value = req.value;

        // Cria um registro de submissão de campo
        var submissionFieldRecord = await SubmissionField.create({
            idSubmission: idSubmission,
            idQuestion: idQuestion,
            value: value
        })
        if (submissionFieldRecord) {
            return exits.failed({
                message: 'Ocorreu um erro na submissão!'
            })
        }
        return exits.success({
            message: 'Resposta submetida com sucesso!'
        })
    },
}