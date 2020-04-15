// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isNotAuthenticated = require("../config/middleware/isNotAuthenticated");
var isNotAuthenticated2 = require("../config/middleware/isNotAuthenticated2");



module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("index", { data: '' });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/inventory");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login", { data: '' });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("members", { data: '' });
  });

  app.get("/signup", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("signup", { data: '' });
  });

  app.get("/covid-19", isNotAuthenticated, function (req, res, ) {
    // const user = isAuthenticated;
    return res.render("covid-19", {
      sessionId: req.user.id

    });
  });

  app.get("/index-user", isNotAuthenticated2, function (req, res) {

    res.render("index-user", {
      sessionId: req.user.id
    });
  });

  app.get("/inventory", isAuthenticated, function (req, res) {


    console.log(req.user.id)

    db.Inventory.findAll({ where: { UserId: req.user.id } }).then(data => {

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

    console.log(req.user.id)

    db.ShoppingList.findAll({ where: { UserId: req.user.id } }).then(data => {

      console.log("shopping_list:", data)
      var jsonData = data.map(el => el.toJSON())

      // console.log(nodeData);
      return res.render("shopping", {
        ShoppingList: jsonData,
        sessionId: req.user.id
      });
    }).catch(err => {
      // console.log(err)
      res.status(404).end

    })

  });


};
