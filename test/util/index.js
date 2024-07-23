const sinon = require("sinon");
const mockAsync = (model, module, result = null) => {
    return sinon.stub(model, module).resolves(result);
};

const RESPONSE = {
    json: function (data) {
        return data;
    },
    status: function (data) {
        return data;
    },
};

const submission = {
    createdAt: 1716334134664,
    updatedAt: 1716334134664,
    id: 2,    
    status: 'started',
    idForm: 1,
};

const submissionField = {
    createdAt: 1716334134664,
    updatedAt: 1716334134664,
    id: 2,
    value: "{'value': 15}",
    idQuestion: 1,
    idSubmission: 2,
};

const question = {
    createdAt: 1716334134664,
    updatedAt: 1716334134664,
    id: 1,
    question: "Qual a idade do seu cachorro?",
    typeQuestion: "text",
    isRequired: false,
    label: "Qual a idade do seu cachorro",
    placeholder: null,
    order: 5,
    defaultValue: null,
    condition: null,
    status: true,
    idForm: 10,
};

const USER = {
    id: 1,
    name: 'Test User',
    email: 'testuser@example.com'
};

const forms = {
    id: 1,
    name: 'Form example',
};

const contact = {
    name: 'jão',
    email: 'lima@gmail.com.br',
    telefone: 995543209
};


module.exports = {
    mockAsync,
    RESPONSE,
    USER,
    submission,
    submissionField,
    question,
    forms,
    contact
};