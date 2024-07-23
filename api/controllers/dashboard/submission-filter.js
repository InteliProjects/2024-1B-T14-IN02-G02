// Controller submisson-filter
// Controller para filtrar submissões
// Parâmetros: initDate, endDate, idQuestion, expectedValue
// Retorno: serverError ou success

module.exports = {
    inputs: {
        // dateFrom - tipo string - required
        dateFrom: {
            type: 'string',
            required: false
        },
        // dateTo - tipo string - required
        dateTo: {
            type: 'string',
            required: false
        },
        // idQuestion - tipo number - required
        idQuestion: {
            type: 'number',
            required: false
        },
    },
    exits: {
        // success - retornado quando a função é executada com sucesso
        success: {
            responseType: 'ok'
        },
        // serverError - retornado quando algo dá errado no servidor
        serverError: {
            responseType: 'serverError'
        }
    },
    // Função para filtrar submissões
    fn: async function(inputs, exits) {
        
        let { idQuestion, dateFrom, dateTo } = inputs;
        console.log('olá', inputs);    
        let sql = `SELECT sf.*, q."question", q."typeQuestion", s."createdAt"
                   FROM submissionfield sf
                   JOIN question q ON sf."idQuestion" = q.id
                   LEFT JOIN submission s ON sf."idSubmission" = s.id
                   WHERE true`;
        let params = [];

        if (dateFrom && dateTo) {
            let timestampFrom = new Date(dateFrom).getTime();
            let timestampTo = new Date(dateTo).getTime();
            sql += ` AND s."createdAt" BETWEEN $1 AND $2`;
            params.push(timestampFrom, timestampTo);
        }
        
        if (idQuestion !== undefined) {
            sql += ` AND sf."idQuestion" = $${params.length + 1}`;
            params.push(idQuestion);
        }

        // Executa a query
        try {
            const records = await sails.sendNativeQuery(sql, params);
            return exits.success(records.rows);
        } catch (err) {
            sails.log.error('SQL Error:', err);
            return exits.serverError({ error: 'An error occurred' });
        }
    },
};
