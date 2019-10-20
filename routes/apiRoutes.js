var db = require("../models");
var swearjar = require("swearjar");

module.exports = function(app) {
  // BABY NAME ROUTES ==========================================

  // Select baby boy names by letter
  app.get("/api/boy/:letter", function(req, res) {
    // Queries baby boy names from baby table
    db.Baby.findAll({}).then(function(Baby) {
      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      // Function: Targets specific baby boy names by the first letter
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].name.charAt(0) === letter && Baby[i].gender === "MALE") {
            targetedNames.push(Baby[i].name);
          }
        }

        // Randomly picks boy names based on first letter selected to send to the client
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;

        res.json(targetedNames[picker]);
      }

      firstLetter();
    });
  });

  // Select baby girl names by letter
  app.get("/api/girl/:letter", function(req, res) {
    // Queries baby girl names from baby table
    db.Baby.findAll({}).then(function(Baby) {
      var letter = req.params.letter.toUpperCase();

      var targetedNames = [];

      // Function: Targets specific baby girl names by the first letter
      function firstLetter() {
        for (i = 0; i < Baby.length; i++) {
          if (
            Baby[i].name.charAt(0) === letter &&
            Baby[i].gender === "FEMALE"
          ) {
            targetedNames.push(Baby[i].name);
          }
        }

        // Randomly picks girl names (based on first letter selected) to send to the client
        var picker = Math.floor(Math.random() * targetedNames.length) + 1;
        res.json(targetedNames[picker]);
      }

      firstLetter();
    });
  });

  // Selects a random boy or girl name based on the route
  app.get("/api/randomizes/:gender", function(req, res) {
    // Queries 12000 baby names (based on route selected) from baby table
    db.Baby.findAll({}).then(function(Baby) {
      var gender = req.params.gender;

      // Function: Sets a conditional when user chooses between a boy and a girl
      function genderName() {
        if (gender === "boy") {
          boyRandomize();
        } else if (gender === "girl") {
          girlRandomize();
        } else {
          randomizes();
        }
      }

      // Function: Randomly selects baby boy names from baby table
      function boyRandomize() {
        var babyBoyNames = [];

        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].gender === "MALE") {
            babyBoyNames.push(Baby[i].name);
          }
        }

        // Randomly picks one baby boy name to send to the client
        var picker = Math.floor(Math.random() * babyBoyNames.length) + 1;

        res.json(babyBoyNames[picker]);
      }

      // Function: Randomly selects baby girl names from baby table
      function girlRandomize() {
        var babyGirlNames = [];

        for (i = 0; i < Baby.length; i++) {
          if (Baby[i].gender === "FEMALE") {
            babyGirlNames.push(Baby[i].name);
          }
        }

        // Randomly picks baby girl names to send to the client
        var picker = Math.floor(Math.random() * babyGirlNames.length) + 1;

        res.json(babyGirlNames[picker]);
      }

      // Function: Targets specific baby names (based on route selected) by the first letter
      function randomizes() {
        // Randomly picks baby names (based on route selected) to send to the client
        var picker = Math.floor(Math.random() * Baby.length) + 1;

        res.json(Baby[picker]);
      }

      //randomizes();
      genderName();
    });
  });

  // PET NAME ROUTES ==========================================

  // Select random pet name
  app.get("/api/pet", function(req, res) {
    // Queries all pet names from pet table
    db.Pet.findAll({}).then(function(Pet) {
      function randomizes() {
        // Randomly picks pet names to send to the client
        var picker = Math.floor(Math.random() * Pet.length) + 1;

        res.json(Pet[picker].name);
      }

      randomizes();
    });
  });

  // BOAT NAME ROUTES ==========================================

  // Selects random boat name
  app.get("/api/boat", function(req, res) {
    // Queries all boat names
    db.Boat.findAll({}).then(function(Boat) {
      function randomizes() {
        // Randomly picks boat names to send to the client
        var picker = Math.floor(Math.random() * Boat.length) + 1;

        res.json(Boat[picker].name);
      }

      randomizes();
    });
  });

  // RUBBER DUCKY NAME ROUTES ==========================================

  // Selects rubber ducky name
  app.get("/api/ducky", function(req, res) {
    // Queries all rubber ducky names
    db.Ducky.findAll({}).then(function(Ducky) {
      function randomizes() {
        // Randomly picks rubber ducky names to send to the client
        var picker = Math.floor(Math.random() * Ducky.length) + 1;

        res.json(Ducky[picker].name);
      }
      randomizes();
    });
  });

  // Writes ducky name to the database
  app.post("/add/ducky", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane name.");
    } else {
      console.log("post ducky " + req.body.name);
      db.Ducky.create({
        name: req.body.name
      }).then(function(dbDucky) {
        res.json(dbDucky);
      });
    }
  });

  // Writes pet name to the database
  app.post("/add/pet", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane name.");
    } else {
      console.log("post pet " + req.body.name);
      db.Pet.create({
        name: req.body.name
      }).then(function(dbPet) {
        res.json(dbPet);
      });
    }
  });

  // Writes boat name to the database
  app.post("/add/boat", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane name.");
    } else {
      console.log("post boat " + req.body.name);
      db.Boat.create({
        name: req.body.name
      }).then(function(dbBoat) {
        res.json(dbBoat);
      });
    }
  });

  // Writes boy name to the database
  app.post("/add/boy", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane name.");
    } else {
      console.log("post boy " + req.body.name + req.body.gender);
      db.Baby.create({
        name: req.body.name,
        gender: req.body.gender
      }).then(function(dbBaby) {
        res.json(dbBaby);
      });
    }
  });

  // Writes girl name to the database
  app.post("/add/girl", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane name.");
    } else {
      console.log("post girl " + req.body.name + req.body.gender);
      db.Baby.create({
        name: req.body.name,
        gender: req.body.gender
      }).then(function(dbBaby) {
        res.json(dbBaby);
      });
    }
  });

  // Get all the messages
  app.get("/api/message", function(req, res) {
    db.Message.findAll({}).then(function(Message) {
      res.json(Message);
    });
  });

  // Writes a message to the database
  app.post("/api/message", function(req, res) {
    if (swearjar.profane(req.body.name)) {
      console.log("This was a profane message.");
    } else {
      console.log("Message Data:");
      console.log(req.body);

      db.Message.create({
        author: req.body.author,
        body: req.body.body,
        createdAt: req.body.createdAt
      }).then(function(Message) {
        res.end();
      });
    }
  });
};
