import passport from "passport";
const LocalStrategy = require("passport-local").Strategy; 
import db from "../database/index";
import bcrypt from "bcrypt";

passport.use(new LocalStrategy((email, password, callback) => {
  const incorrect = "Incorrect Email/Password";
  const success = "Successfully logged in";

  db.query('SELECT email, password FROM users WHERE email=$1', [email], (err, response) => {
    if (err) {
      return callback(err);
    }
    if (response.rowCount <= 0) {
      return callback(null, false, { message: incorrect });
    } 

    if (response.rows.length > 0) {
      const first = response.rows[0];
      bcrypt.compare(password, first.password, (err, res) => {
        if (res) {
          callback(null, { username: first.email.trim() }, { message: success });
        }

        else {
          callback(null, false, { message: incorrect });
        }
      });
    }

    else {
      callback(null, false, { message: incorrect });
    }

  });
}));

passport.serializeUser((user, done) => {
  console.log("Serializing user");
  return done(null, user.username);
});

passport.deserializeUser((username, callback) => {
  console.log("Deserializing user")
  db.query('SELECT email FROM users WHERE email=$1', [username], (err, response) => {
    if (err) {
      return callback(err);
    }
    
    callback(null, response.rows[0]);
  });
});

module.exports = passport;