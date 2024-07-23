// Controller forgot-password
// Controller para a requisição de troca de senha
// Parâmetros: emailAddress
// Retorno: success, emailNaoFornecido, emailNaoEncontrado

const ejs = require('ejs');
const path = require('path');

module.exports = {
  friendlyName: 'Forgot Password',
  description: 'Permite que o usuário requisite a troca de sua senha',
  inputs: {
    // emailAddress - tipo string - required
    emailAddress: {
      type: 'string',
      required: true,
    }
  },
  exits: {
    // success - retornado quando a função é executada com sucesso
    success: {
      description: 'Requisição de troca de senha feita com sucesso! Você receberá um e-mail com os próximos passos para concluir a troca de sua senha.',
      statusCode: 200,
    },
    // emailNaoFornecido - retornado quando o email não é fornecido
    emailNaoFornecido: {
      description: 'Por favor, forneça um e-mail válido.',
      statusCode: 400
    },
    // emailNaoEncontrado - retornado quando o email não é encontrado
    emailNaoEncontrado: {
      description: 'O e-mail fornecido não está cadastrado. Cheque se o e-mail digitado está correto ou se cadastre primeiro.',
      statusCode: 404,
    },
  },
  fn: async function({ emailAddress }) {
    var user = await User.findOne({ email: emailAddress });

    if (!user) {
      throw {
        emailNaoEncontrado: {
          message: 'O e-mail fornecido não está cadastrado. Cheque se o e-mail digitado está correto.'
        }
      };
    }
    const protocol = this.req.protocol;
    const host = this.req.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    // Gerar um token para a troca de senha
    const passwordChangeHashToken = await sails.helpers.hashString(new Date().getTime().toString() + user.email);
    let link = `${baseUrl}/change-password/${passwordChangeHashToken}`;

    const emailTemplatePath = path.join(__dirname, '../../../views/emails/email-reset-password.ejs');
    const emailData = { 
      url: link, 
      username: user.name,
      linkTagObject: `
        <a href="${link}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #9c3806; border-radius: 1px;-webkit-border-radius: 1px; -moz-border-radius: 1px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
          <span style="display:block;padding:15px 40px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px;">Trocar senha</span></span>
        </a>
      `,
    };
    const emailHTML = await ejs.renderFile(emailTemplatePath, emailData);

    await User.update({ id: user.id }).set({ passChangeHash: passwordChangeHashToken.toString() });
    
    await sails.helpers.sendEmail(emailAddress, 'Resete sua senha agora', emailHTML);
    return {
      success: {
        message: 'Requisição de troca de senha feita com sucesso! Você receberá um e-mail com os próximos passos para concluir a troca de sua senha.'
      }
    }
  }
};
