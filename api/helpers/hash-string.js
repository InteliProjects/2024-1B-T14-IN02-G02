// Função: Encripta uma string utilizando o algoritmo aes-256-ctr

const crypto = require('crypto');
const { string } = require('joi');

// Função para gerar uma string aleatória
function generateRandomString() {
  // Gera uma string aleatória
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = {
  exits: {
    // Caso a string seja encriptada com sucesso
    success: {
      description: 'String encriptada com sucesso.',
    },
    // Caso o input seja inválido
    invalidInput: {
      description: 'Input de tipo inválido',
    }
  },
  inputs: {
    // Texto a ser encriptado
    text: {
      type: 'string',
      required: false,
    },
  },
  fn: async function(inputs) {
    const text = inputs.text;
    if (typeof text !== 'string') {
      throw 'invalidInput';
    }

    // Nesta lógica, gerar um hash pode ter diferentes usos
    // Caso o hash não vá ser comparado em nenhum momento, ele pode vir de uma string aleatória
    // Logo não é necessária a passagem do parâmetro text
    if (text === '') {
      text = generateRandomString();
    }

    const algorithm = 'aes-256-ctr';
    const ENCRYPTION_KEY = Buffer.from('FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=', 'base64');
    const IV_LENGTH = 16;

    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    // Retorna o hash gerado
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  },
};
