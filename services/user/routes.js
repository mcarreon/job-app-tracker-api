import db from "../../database/index";
import bcrypt from "bcrypt";
import uuidv4 from "uuid/v4";
import passport from "../../middleware/passport";

export default [
  {
    path: "/user/join",
    method: "put",
    handler: async (request, response) => {
      const { email, password } = request.body;

      bcrypt.hash(password, 10, (err, hash) => {
        db.query('INSERT INTO users("email", "password") VALUES($1, $2)', [email, hash], (err, res) => {
          if (err) {
            response.send({ status: err.code, message: "Email already exists" });
          }
          else {
            response.send({ status: 200 });
          }
        });
      });
    }
  },
  {
    path: "/user/login",
    method: "post",
    handler: async (request, response) => {
      // Passport expects username, password structure
      const { email, password, remember } = request.body;
      const modRequest = { body:{ username: email, password: password } };
      
      passport.authenticate('local', {session: true}, (error, userData, message) => {
        //console.log(error);
        //console.log(userData);
        //console.log(message);
        const { username } = userData;
        
        request.logIn(userData, (err) => {

          if (remember) {
            request.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
          }
          else {
            request.session.cookie.expires = false;
          }
          console.log(request.session.cookie);
          response.json({ user: username, message: message});
        }); 
      })(modRequest, response);
    }
  },
  {
    path: "/user/logout",
    method: "post",
    handler: async (request, response) => {
      
      // console.log(request.user);
      // console.log("================")
      // console.log(request.session);
      // console.log("================")
      if (request.user) {
        request.session.destroy();
        request.logout();
      }
      // console.log(request.user);
      // console.log("================")
      // console.log(request.session);
      // console.log("================")
      response.json({message: "User logged out."})
    }
  }
];