// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var axios = require("axios");

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

  app.get("/signup", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("signup", { data: "" });
  });

  app.get("/covid-19", function (req, res) {
    // NEW ARTICLES ON COVID-19 + CURRENT STATE RESULTS
    let one =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=YMc1gccWtljsNRIaEKZEZBHnRni3CLGx";
    let two = "https://covidtracking.com/api/states";
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        var abstract = responses[0].data.response.docs;
        var image = responses[0].data.response.docs[0].multimedia[0].url;
        var imageURL = "https://www.nytimes.com/";
        var allStates = responses[1].data;
        var state = responses[1].data[0].state;
        var positive = responses[1].data[0].positive;
        var negative = responses[1].data[0].negative;
        var death = responses[1].data[0].death;
        var recovered = responses[1].data[0].recovered;
        var total = responses[1].data[0].total;
        var ArticleImage = `${imageURL}${image}`;
        // console.log(typeof ArticleImage);
        // console.log(ArticleImage);
        res.render("covid-19", {
          abstract: abstract,
          imgURL: ArticleImage,
          allStates: allStates,
          state: state,
          positive: positive,
          negative: negative,
          death: death,
          recovered: recovered,
          total: total,
        });
      })
    );
  });

  app.get("/index-user", isNotAuthenticated2, function (req, res) {
    res.render("index-user", {
      sessionId: req.user.id,
    });
  });

  app.get("/inventory", isAuthenticated, function (req, res) {
    console.log(req.user.id);

    db.Inventory.findAll({ where: { UserId: req.user.id } })
      .then((data) => {
        var jsonData = data.map((el) => el.toJSON());

        // console.log(nodeData);
        res.render("inventory", {
          inventory: jsonData,
          sessionId: req.user.id,
        });
      })
      .catch((err) => {
        // console.log(err)
        res.status(404).end;
      });
  });

  app.get("/shopping", isAuthenticated, function (req, res) {
    console.log(req.user.id);

    db.ShoppingList.findAll({ where: { UserId: req.user.id } })
      .then((data) => {
        console.log("shopping_list:", data);
        var jsonData = data.map((el) => el.toJSON());

        // console.log(nodeData);
        return res.render("shopping", {
          ShoppingList: jsonData,
          sessionId: req.user.id,
        });
      })
      .catch((err) => {
        // console.log(err)
        res.status(404).end;
      });
  });
};
