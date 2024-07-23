/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {
  secret: '2d0f554a3b554ac1667e5e67cc825f8b',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false,
  },
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },
};
