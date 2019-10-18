var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/boy/:letter", function(req, res) {
    console.log("boy letter route hit");

    db.Baby.findAll({
      limit: 7000
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {

      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      console.log(letter);

      //function targets a specific name with the letter beginning with a
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].name.charAt(0) === letter && Baby[i].gender === "MALE") {
            targetedNames.push(Baby[i].name);
          }
        }
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;
        console.log(targetedNames[picker]);
        res.json(targetedNames[picker]);
      }

      firstLetter();

      // console.table(Baby[0].name);
      // console.log(Baby[0].name);
    });
  });

  app.get("/api/girl/:letter", function(req, res) {
    console.log("girl first letter route hit");

    db.Baby.findAll({
      limit: 7000
      // where: {
      //   name: req.params.name
      // }
    }).then(function(Baby) {
      console.log("looking for Baby");

      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      console.log(letter);

      //function targets a specific name with the letter beginning with a
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].name.charAt(0) === letter && Baby[i].gender === "FEMALE") {
            targetedNames.push(Baby[i].name);
          }
        }
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;
        console.log(targetedNames[picker]);
        res.json(targetedNames[picker]);
      }

      firstLetter();

      // console.table(Baby[0].name);
      // console.log(Baby[0].name);
    });
  });

  //randomizer grabs a random boy or girl name based on the route
  app.get("/api/randomizes/:gender", function(req, res) {
    console.log("randomizes route hit");

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
        res.json(babyBoyNames[picker])
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
        res.json(babyGirlNames[picker]);
      }

      //function targets a specific name with the letter beginning with a
      function randomizes() {

        var picker = Math.floor(Math.random() * Baby.length) + 1;
        console.log(`\nLooking for Baby name`);
        console.log(`\nHow do you like ${Baby[picker].name}?\n`);
        res.json(Baby[picker])
      }

      //randomizes();
      genderName();
    });
  });

  //delivers random pet name
  app.get("/api/pet", function(req, res) {
    console.log("pets route hit");

    db.Pet.findAll({})
    .then(function(Pet) {
      console.log("looking for a pet name");

      function randomizes() {

        var picker = Math.floor(Math.random() * Pet.length) + 1;
        console.log(`\nLooking for pet name`);
        console.log(`\nHow do you like ${Pet[picker].name}?\n`);
        res.json(Pet[picker].name);
      }

      randomizes();

    });
  });

  //delivers a random boat name
  app.get("/api/boat", function(req, res) {
    console.log("boat route hit");

    db.Boat.findAll({})
    .then(function(Boat) {
      console.log("looking for a boat name");

      function randomizes() {

        var picker = Math.floor(Math.random() * Boat.length) + 1;
        console.log(`\nLooking for boat name`);
        console.log(`\nHow do you like ${Boat[picker].name}?\n`);

        res.json(Boat[picker].name)

      }

      randomizes();

    });
  });

  app.get("/api/car", function(req, res) {
    console.log("car route hit");


    db.Car.findAll({})

    .then(function(Car) {
      console.log("looking for a car name");

      function randomizes() {

        var picker = Math.floor(Math.random() * Car.length) + 1;
        console.log(`\nLooking for car name`);
        console.log(`\nHow do you like ${Car[picker].name}?\n`);

        res.json(Car[picker].name)

      }

      randomizes();

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
