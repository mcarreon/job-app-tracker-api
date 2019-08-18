import db from "../../database/index";

export default [
  {
    path: "/user/join",
    method: "post",
    handler: async (request, response) => {
      console.log(request.body);
      
      // db.query('SELECT * FROM users', [], (err, res) => {
      //   if (err) { response.send(500)}
      //   else {
      //     response.send(res.rows[0]);
      //   }
      // });
    }
  }
];