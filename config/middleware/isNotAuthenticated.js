var axios = require("axios");

module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // NEW ARTICLES ON COVID-19 + CURRENT STATE RESULTS
  let one =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=YMc1gccWtljsNRIaEKZEZBHnRni3CLGx";
  let two = "https://covidtracking.com/api/states";

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  axios
    .all([requestOne, requestTwo])
    .then(
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

        console.log(typeof ArticleImage);
        console.log(ArticleImage);

        return res.render("covid-19", {
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
    )
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
