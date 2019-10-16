var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/test/:name", function(req, res) {
    console.log("test route hit");

    db.Baby.findAll({
      limit: 5,
      where: {
        name: req.params.name
      }
    }).then(function(Baby) {
      console.log("looking for Baby");
      res.json(Baby);
      console.table(Baby[0].name);
      console.log(Baby[0].name);
    });
  });git checkout

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
