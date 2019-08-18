export default [
  {
    path: "/",
    method: "get",
    handler: async (req, res) => {
      res.status(200).send({
        success: 'true',
        message: 'recieved',
        stuff: {
          name: "test",
          date: 15
        }
      });
    }
  }
];