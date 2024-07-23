// Função: Gerar hash hexadecimal de uma senha

const crypto = require('crypto');

// Função para gerar uma string aleatória
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = {
  exits: {
    success: {
      description: 'Hash hexadecimal da senha gerado com sucesso.',
    },
  },
  fn: async function() {
    // Gera uma senha aleatória
    const password = generateRandomString(16);

    // Calcula o hash SHA-256 da senha
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    return hashedPassword;
  },
};