import db from "../../database/index";

export default [
  {
    path: "/",
    method: "get",
    handler: async (request, response) => {
      db.query('SELECT * FROM users', [], (err, res) => {
        if (err) { response.send(500)}
        else {
          response.send(res.rows[0]);
        }
      });
    }
  }
];