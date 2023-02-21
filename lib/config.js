const LocalStrategy = require('passport-local').Strategy;
const { getHashedPassword } = require('./functions');
const { User } = require('../MongoDB/schema');

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            let hashed = getHashedPassword(password)
            User.findOne({username: username}).then(users => {
                if (!users) return done(null, false, {
                    message: `<div class="alert alert-danger">
                  <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                    <i class="tim-icons icon-simple-remove"></i>
                  </button>
                  <span><b> Username not found </span>
                </div>`,
                })
                if (username === users.username && hashed === users.password) {
                    return done(null, users);
                } else {
                    return done(null, false, {
                        message: `<div class="alert alert-danger">
                  <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                    <i class="tim-icons icon-simple-remove"></i>
                  </button>
                  <span><b>Invalid not found</span>
                </div>`,
                    });
                };
            });
        })
    );
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}