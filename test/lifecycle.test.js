var sails = require("sails");

before(function (done) {
  this.timeout(60000); // Increase timeout to 60 seconds
  sails.lift(
    {
      hooks: { grunt: false, csrf: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }
      done();
    }
  );
});

after(function (done) {
  sails.lower(done);
});
