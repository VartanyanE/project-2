// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("index", { data: "" });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/inventory");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login", { data: "" });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("members", { data: "" });
  });

  app.get("/signup", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("signup", { data: "" });
  });

<<<<<<< HEAD
  app.get("/covid-19", function (req, res) {
    var data = {
      articles: [
        { name: "Hey", body: "Some body" },
        { name: "Hey Hey", body: "I am some body" },
      ],
    };
    res.render("covid-19", data);
  });

  app.get("/inventory", isAuthenticated, function (req, res) {
    res.render("inventory", { data: "" });
  });

  app.get("/shopping", isAuthenticated, function (req, res) {
    res.render("shopping", { data: "" });
=======
  app.get("/covid-19", isAuthenticated, function (req, res) {

    res.render("covid-19", {
      sessionId: req.user.id
    });
  });

  app.get("/inventory", isAuthenticated, function (req, res) {


    console.log(req.user.id)

    db.Inventory.findAll({ UserId: req.user.id }).then(data => {

      var jsonData = data.map(el => el.toJSON())

      // console.log(nodeData);
      res.render("inventory", {
        inventory: jsonData,
        sessionId: req.user.id
      });
    }).catch(err => {
      // console.log(err)
      res.status(404).end

    })



  });

  app.get("/shopping", isAuthenticated, function (req, res) {

    return res.render("shopping", {
      sessionId: req.user.id
    });
>>>>>>> master
  });
};
