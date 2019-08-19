import db from "../../database/index";
import bcrypt from "bcrypt";
import uuidv4 from "uuid/v4";

const hashPass = (plaintextPass) => {

};

const checkPass = (hashedPass) => {


};

export default [
  {
    path: "/user/join",
    method: "put",
    handler: async (request, response) => {
      const { email, password } = request.body;
      const uuid = uuidv4();

      bcrypt.hash(password, 10, (err, hash) => {
        db.query('INSERT INTO users("id", "email", "password") VALUES($1, $2, $3)', [uuid, email, hash], (err, res) => {
          if (err) {
            response.send({ status: err.code});
          }
          else {
            response.send({ status: 200 });
          }
        });
      });
    }
  }
];