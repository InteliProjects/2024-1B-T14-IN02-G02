// Controller send-email
// Controller para a coletar dados em relação a submissões para o dashboard
// Parâmetros: emailAddress, emailSubject, emailBody
// Retorno: success, userNotFound, invalidParameter, missingParameter, emailNotSent

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  inputs: {
    emailAddress: {
      type: 'string'
    },
    emailSubject: {
      type: 'string'
    },
    emailBody: {
      type: 'string'
    }
  },
  exits: {
    success: {
      description: 'The message was sent successfully.'
    },
    userNotFound: {
      description: 'The user was not found, check if the e-mail is correct.',
    },
    invalidParameter: {
      description: 'The passed parameters are invalid',
    },
    missingParameter: {
      description: 'Missing parameters existing',
    },
    emailNotSent: {
      description: 'An error ocurred while sending the e-mail',
    }
  },
  // Função para enviar um e-mail
  fn: async function({ emailAddress, emailSubject, emailBody }) {
    // Verifica se todos os parâmetros são strings
    if (typeof emailAddress !== 'string' || typeof emailSubject !== 'string' || typeof emailBody !== 'string') {
      throw 'invalidParameter';
    }

    // Remove os espaços vazios em cada parâmetro
    emailAddress = emailAddress.trim();
    emailSubject = emailSubject.trim();
    emailBody = emailBody.trim();

    // Verifica se todos os parâmetros possuem valores
    if (emailAddress === '' || emailSubject === '' || emailBody === '') {
      throw 'missingParameter';
    }

    // Verifica se o email informado está cadastrado no banco de dados
    var user = await User.findOne({ email: emailAddress });

    // Dispara um erro caso o usuário não esteja cadastrado no banco de dados
    if (!user) {
      throw 'userNotFound';
    }

    // Cria e configura o transportador do e-mail
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'abandono.zero@outlook.com',
        pass: 'InT3l1@2024'
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    let info;

    // Tenta enviar o e-mail
    try {  
      info = await transporter.sendMail({
        from: `"Abandono Zero" <abandono.zero@outlook.com>`,
        to: emailAddress,
        subject: emailSubject,
        text: emailBody,
        html: emailBody,
      });
    } catch (error) {
      throw 'emailNotSent';
    }

    return info;
  }
};
