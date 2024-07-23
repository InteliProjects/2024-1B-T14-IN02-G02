// Controller Contador
// Controller para a coletar dados em relação a submissões para o dashboard
// Parâmetros: nenhum
// Retorno: invalidInputs ou success

module.exports = {
    outputs:{
        invalidInputs:{
            description: 'Invalid inputs',
            statusCode: 400
        },
        success: {
            description: 'Entrou dms',
            statusCode: 200     
        }
    },
    friendlyName: 'Contadores de submissões',
    description: 'Esse controller conta as submissões do formulário para apresentar no dashboard.',
    // Função para contar as submissões
    counter: async (req, res) => {

        const countSubmissionSQL = `
        select COUNT(*)
        from submission
        where "status" = 'finished'
        `
        const result = await sails.sendNativeQuery(countSubmissionSQL, [])
        return res.send(result)
    },
    // Função para contar as submissões do último mês
    lastMonthCounter: async (req, res) => {

        const currentMonth = new Date()
        const lastMonth_initDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth()-1, 1).getTime()
        const lastMonth_endDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getTime()
        const lastMonthCountSQL = `
        select COUNT(*)
        from submission
        where "status" = 'finished'
        and "createdAt" between ${lastMonth_initDate} and ${lastMonth_endDate}
        `
        const result = await sails.sendNativeQuery(lastMonthCountSQL, [])
        return res.send({result})
    },
    // Função para contar as submissões do mês atual
    currentMonthCounter: async (req, res) => {

        const currentMonth = new Date()
        const currentMonth_initDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getTime()
        const currentMonth_endDate = currentMonth.getTime()
        const currentMonthCountSQL = `
        select COUNT(*)
        from submission
        where "status" = 'finished'
        and "createdAt" between ${currentMonth_initDate} and ${currentMonth_endDate}
        `
        const result = await sails.sendNativeQuery(currentMonthCountSQL, [])
        return res.send({result})
    },
    // Função para contar as submissões por perfil
    profileCounter: async (req, res) => {
        // Na Query abaixo, substitua o valor "1", na última linha, pela idQuestion da pergunta de perfil de tutor 
        let profileSQL = `
        select count(*)
        from (
            select sf."idQuestion", sf."value"
            from submissionfield sf
            where sf."idQuestion" = 1
        )
        `
        const profilePastSQL = profileSQL + "where (value->>'value') = 'Já tive cão'"       // Substituir pelo exato texto  
        const profilePresentSQL = profileSQL + "where (value->>'value') = 'Tenho cão'"      // da opção da questão:
        const profileFutureSQL = profileSQL + "where (value->>'value') = 'Quero ter cão'"   // (model -> Question.options)
        const profileNullSQL = profileSQL + "where (value->>'value') = 'Não quero ter cão'" // Texto que aparece no forms/front

        const resultPast = await sails.sendNativeQuery(profilePastSQL, [])
        const resultPresent = await sails.sendNativeQuery(profilePresentSQL, [])
        const resultFuture = await sails.sendNativeQuery(profileFutureSQL, [])
        const resultNull = await sails.sendNativeQuery(profileNullSQL, [])

        const result = {resultPast, resultPresent, resultFuture, resultNull}
        return res.send(result)
    },
    questions: async (req, res) => {
        let sql = `SELECT id, "question" FROM question`;

        try {
            const records = await sails.sendNativeQuery(sql);
            return res.send(records.rows);
        } catch (err) {
            sails.log.error('SQL Error:', err);
            // return exits.serverError({ error: 'An error occurred' });
        }
    }
};