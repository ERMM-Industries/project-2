var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/account", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("account", {
        examples: dbExamples
      });
    });
  });

  app.get("/account/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("account", {
        example: dbExample
      });
    });
  });

  app.get("/film", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("film", {
        examples: dbExamples
      });
    });
  });

  app.get("/film/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("film", {
        example: dbExample
      });
    });
  });

  app.get("/reviewed/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("reviewed", {
        examples: dbExamples
      });
    });
  });

  app.get("/reviewed/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("reviewed", {
        example: dbExample
      });
    });
  });

  app.get("/watchlist", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("watchlist", {
        examples: dbExamples
      });
    });
  });

  app.get("/watchlist/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("watchlist", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
