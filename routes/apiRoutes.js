var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/test/:letter", function(req, res) {
    console.log("test route hit");

    db.Baby.findAll({
      limit: 100
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {
      console.log("looking for Baby");
      res.json(Baby);
      var letter = req.params.letter.toUpperCase();
      var targetedNames = [];

      console.log(letter);

      //function targets a specific name with the letter beginning with a
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].name.charAt(0) === letter) {
            targetedNames.push(Baby[i].name);
          }
        }
        console.log(targetedNames);
      }

      firstLetter();
    });
  });

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
