module.exports.policies = {
  // '*': 'is-adm',

  // 'home/*': true,

  //Bypass the `is-adm` policy for:
  'auth/*': true,
  'forms/*': true,
  'questions/*': true,
  'submissions/*': true,
  'dashboard/*': true,
  // 'adm/*': true,
};
