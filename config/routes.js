module.exports.routes = {
  
  // ██╗   ██╗██╗███████╗██╗    ██╗
  // ██║   ██║██║██╔════╝██║    ██║
  // ██║   ██║██║█████╗  ██║ █╗ ██║
  // ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║
  //  ╚████╔╝ ██║███████╗╚███╔███╔╝
  //   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ 
  "GET /form/:idForm": { action: "forms/view-form" },
  "GET /dashboard": { action: "dashboard/view-home" },
  "GET /contact": {action: "home/contact"},
  'GET /': { action: 'home/homepage' },

  // ================= AUTH =================

  "GET /login": { action: "auth/view-login" },
  "GET /forgot-password": { action: "auth/view-recover-password" },
  "GET /change-password/:hash": { action: "auth/view-change-password" },


  // █████╗  ██████╗ ██╗
  // ██╔══██╗██╔══██╗██║
  // ███████║██████╔╝██║
  // ██╔══██║██╔═══╝ ██║
  // ██║  ██║██║     ██║
  // ╚═╝  ╚═╝╚═╝     ╚═╝

  "GET /api/v1/adm/:id": { action: "adm/list-adm" },
  "GET /api/v1/adm": { action: "adm/list-adm" },
  "POST /api/v1/adm": { action: "adm/create-adm" },
  "PATCH /api/v1/adm": { action: "adm/update-adm" },
  "DELETE /api/v1/adm/:id": { action: "adm/delete-adm" },

  // ================ CONTACT =================
  'POST /api/v1/register-contact': { action: 'contato/ContatoController' },
  'POST /api/v1/register-contact': {
    controller: "contato/ContatoController",
    action: "create",
  },

  '/dashboard':            { view: 'pages/dashboard/home' },

  'POST /test-email': 'TesteController.test',
  'GET /api/v1/filtro': { action: 'dashboard/submission-filter'},
  'POST /api/v1/exportar': { action: 'dashboard/export-data' },
  // ================= AUTH =================
  "POST /api/v1/login": { action: "auth/login" },
  "/logout": { action: "auth/logout" },
  "POST /api/v1/forgot-password": { action: "auth/forgot-password" },
  "POST /api/v1/change-password": { action: "auth/change-password" },

  // ================= FORMS =================
  "POST /api/v1/form": {
    controller: "forms/FormsController",
    action: "create",
  },
  "GET /api/v1/form": { controller: "forms/FormsController", action: "find" },
  "GET /api/v1/form/:id": {
    controller: "forms/FormsController",
    action: "findOne",
  },

  // ================= QUESTIONS =================

  "POST /api/v1/form/:idForm/question": {
    controller: "questions/QuestionsController",
    action: "create",
  },
  "GET /api/v1/question": {
    controller: "questions/QuestionsController",
    action: "find",
  },
  "GET /api/v1/form/:idForm/question": {
    controller: "questions/QuestionsController",
    action: "findFormFields",
  },
  "GET /api/v1/form/question/:id": {
    controller: "questions/QuestionsController",
    action: "findOne",
  },

  // ================= SUBMISSIONS =================

  "POST /api/v1/form/:idForm/submission": {
    controller: "submissions/SubmissionsController",
    action: "create",
  },
  "PUT /api/v1/form/submission/:idSubmission/question/:idQuestion": {
    controller: "submissions/SubmissionsController",
    action: "submit",
  },
  "DELETE /api/v1/form/:idForm/submission/": {
    controller: "submissions/SubmissionsController",
    action: "finish",
  },
  "GET /api/v1/form/:idForm/submission/validate": {
    controller: "submissions/SubmissionsController",
    action: "validateSubmission",
  },
  "GET /api/v1/form/submission/:idSubmission": {
    controller: "submissions/SubmissionsController",
    action: "listOne",
  },
  "GET /api/v1/form/:idForm/submission": {
    controller: "submissions/SubmissionsController",
    action: "listSubForm",
  },

  // ================= DASHBOARD =================
  
  'GET /api/v1/counter': {
    controller: "dashboard/ContadorController",
    action: "counter"
  },
  'GET /api/v1/lastMonthCounter': {
    controller: "dashboard/ContadorController",
    action: "lastMonthCounter"
  },
  'GET /api/v1/currentMonthCounter': {
    controller: "dashboard/ContadorController",
    action: "currentMonthCounter"
  },
  'GET /api/v1/profileCounter': {
    controller: "dashboard/ContadorController",
    action: "profileCounter"
  },
  'GET /api/v1/questions': {
    controller: "dashboard/ContadorController",
    action: "questions"
  }
};
