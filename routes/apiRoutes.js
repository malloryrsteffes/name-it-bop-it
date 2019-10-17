var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/test/:letter", function(req, res) {
    console.log("test route hit");

    db.Baby.findAll({
      limit: 2000
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
      
      console.table(Baby[0].name);
      console.log(Baby[0].name);
    });
  });

  app.get("/api/randomizes/:gender", function(req, res) {
    console.log("randomizes route hit");

    db.Baby.findAll({
      limit: 2000
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {
      res.json(Baby);

      var gender = req.params.gender;

      //Function sets a conditional when user chooses between a boy and a girl
      function genderName() {
        if(gender === "boy") {
          boyRandomize();
        } else if(gender === "girl") {
          girlRandomize();
        } else {
          randomizes();
        }
      }

      function boyRandomize() {
        var babyBoyNames = [];

        for (i = 0; i < Baby.length; i++) {

          if(Baby[i].gender === "MALE") {
            babyBoyNames.push(Baby[i].name)
          }
        }

        var picker = Math.floor(Math.random() * babyBoyNames.length) + 1;

        console.log(`\nLooking for Baby Boy names`);
        console.log(`\nHow do you like ${babyBoyNames[picker]}?\n`);
      }


      function girlRandomize(){
        var babyGirlNames = [];

        for (i = 0; i < Baby.length; i++) {
          //console.log(Baby[i].gender, Baby[i].name);

          if(Baby[i].gender === "FEMALE") {
            babyGirlNames.push(Baby[i].name)
          }
        }

        var picker = Math.floor(Math.random() * babyGirlNames.length) + 1;

        console.log(`\nLooking for Baby Girl names`);
        console.log(`\nHow do you like ${babyGirlNames[picker]}?\n`);
      }

      //function targets a specific name with the letter beginning with a
      function randomizes() {

        var picker = Math.floor(Math.random() * Baby.length) + 1;
        console.log(`\nLooking for Baby name`);
        console.log(`\nHow do you like ${Baby[picker].name}?\n`);
      }

      //randomizes();
      genderName();
    });
  });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
