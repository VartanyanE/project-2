var newsArticle = new XMLHttpRequest();

newsArticle.open("GET", "https://covidtracking.com/api/press", true);
newsArticle.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (newsArticle.status >= 200 && newsArticle.status < 400) {
    data.forEach((article) => {
      console.log(article.title);
    });
  } else {
    console.log("error");
  }
};

newsArticle.send();
