var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("startPage");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  // BABY PAGES ===================================================
  app.get("/baby", function(req, res) {
    res.render("baby");
  });

  app.get("/randomizes/girl", function(req, res) {
    res.render("girlRandomizer");
  });

  app.get("/randomizes/boy", function(req, res) {
    res.render("boyRandomizer");
  });

  // PET PAGE ===================================================
  app.get("/randomizes/pet", function(req, res) {
    res.render("petRandomizer");
  });

  // BOAT PAGE ===================================================
  app.get("/randomizes/boat", function(req, res) {
    res.render("boatRandomizer");
  });

  // DUCKY PAGE ===================================================
  app.get("/randomizes/ducky", function(req, res) {
    res.render("duckyRandomizer");
  });

  // MESSAGE PAGE ===================================================
  app.get("/message", function(req, res) {
    res.render("message");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
