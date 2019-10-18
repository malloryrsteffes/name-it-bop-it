var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/boy/:letter", function(req, res) {
    db.Baby.findAll({
      limit: 7000
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {
      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      //function targets a specific name with the letter beginning with a
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].name.charAt(0) === letter && Baby[i].gender === "MALE") {
            targetedNames.push(Baby[i].name);
          }
        }
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;

        res.json(targetedNames[picker]);
      }

      firstLetter();
    });
  });

  app.get("/api/girl/:letter", function(req, res) {
    db.Baby.findAll({
      limit: 7000
    }).then(function(Baby) {
      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      //function targets a specific name with the letter beginning with a
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (
            Baby[i].name.charAt(0) === letter &&
            Baby[i].gender === "FEMALE"
          ) {
            targetedNames.push(Baby[i].name);
          }
        }
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;
        res.json(targetedNames[picker]);
      }

      firstLetter();
    });
  });

  //randomizer grabs a random boy or girl name based on the route
  app.get("/api/randomizes/:gender", function(req, res) {
    db.Baby.findAll({
      limit: 7000
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {
      // res.json(Baby);

      var gender = req.params.gender;

      //Function sets a conditional when user chooses between a boy and a girl
      function genderName() {
        if (gender === "boy") {
          boyRandomize();
        } else if (gender === "girl") {
          girlRandomize();
        } else {
          randomizes();
        }
      }

      function boyRandomize() {
        var babyBoyNames = [];

        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].gender === "MALE") {
            babyBoyNames.push(Baby[i].name);
          }
        }

        var picker = Math.floor(Math.random() * babyBoyNames.length) + 1;

        res.json(babyBoyNames[picker]);
      }

      function girlRandomize() {
        var babyGirlNames = [];

        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].gender === "FEMALE") {
            babyGirlNames.push(Baby[i].name);
          }
        }

        var picker = Math.floor(Math.random() * babyGirlNames.length) + 1;

        res.json(babyGirlNames[picker]);
      }

      //function targets a specific name with the letter beginning with a
      function randomizes() {
        var picker = Math.floor(Math.random() * Baby.length) + 1;

        res.json(Baby[picker]);
      }

      //randomizes();
      genderName();
    });
  });

  //delivers random pet name
  app.get("/api/pet", function(req, res) {
    db.Pet.findAll({}).then(function(Pet) {
      function randomizes() {
        var picker = Math.floor(Math.random() * Pet.length) + 1;

        res.json(Pet[picker].name);
      }

      randomizes();
    });
  });

  //delivers a random boat name
  app.get("/api/boat", function(req, res) {
    db.Boat.findAll({}).then(function(Boat) {
      function randomizes() {
        var picker = Math.floor(Math.random() * Boat.length) + 1;

        res.json(Boat[picker].name);
      }

      randomizes();
    });
  });

  app.get("/api/ducky", function(req, res) {
    db.Ducky.findAll({}).then(function(Ducky) {
      function randomizes() {
        var picker = Math.floor(Math.random() * Ducky.length) + 1;

        res.json(Ducky[picker].name);
      }
      randomizes();
    });
  });

  app.post("/add/ducky", function(req, res) {
    console.log("post ducky " + req.body.name);

    db.Ducky.create({
      name: req.body.name
    }).then(function(dbDucky) {
      res.json(dbDucky);
    });
  });

  app.post("/add/pet", function(req, res) {
    console.log("post pet " + req.body.name);

    db.Pet.create({
      name: req.body.name
    }).then(function(dbPet) {
      res.json(dbPet);
    });
  });

  app.post("/add/boy", function(req, res) {
    console.log("post boy " + req.body.name + req.body.gender);

    db.Baby.create({
      name: req.body.name,
      gender: req.body.gender
    }).then(function(dbBaby) {
      res.json(dbBaby);
    });
  });

  app.post("/add/girl", function(req, res) {
    console.log("post girl " + req.body.name + req.body.gender);

    db.Baby.create({
      name: req.body.name,
      gender: req.body.gender
    }).then(function(dbBaby) {
      res.json(dbBaby);
    });
  });
};
