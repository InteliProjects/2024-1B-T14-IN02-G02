module.exports = {
    attributes: {
      name: {
        type: 'string',
        required: true,
        example: 'Mary',
        maxLength: 255,
      },
      email: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 255,
        example: 'mary.sue@example.com'
      },
      telefone: {
        type: 'string',
        unique: true,
        maxLength: 30,
        example: '994452109'
      }
    },
  };