const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Users");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({
        where: { username },
      })
        .then((user) => {
          if (!user) return done(null, false);
          
          user.hashPw(password, user.salt).then((pwHashed) => {
            console.log('pwHashed',pwHashed)
            console.log('user.password',user.password)
            console.log('VALIDACION', pwHashed === user.password)
            if (pwHashed !== user.password) return done(null, false);
          });
          return done(null, user);
        })
        .catch(done);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne(id).then((user) => done(null, user));
  });
};
