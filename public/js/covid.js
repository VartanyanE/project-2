// var jumboHeight = $(".jumbotron").outerHeight();
// function parallax() {
//   var scrolled = $(window).scrollTop();
//   $(".bg").css("height", jumboHeight - scrolled + "px");
// }

// $(window).scroll(function (e) {
//   parallax();
// });

// var api_url = "https://covidtracking.com/api/v1/states/current.json";
// var apiDaily =
//   "https://covidtracking.com/api/v1/states/daily?state=NY&date=20200316";
// var state = "";

// fetch(api_url).then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//     if ((data.length = 50));

//     data.forEach((u) => {
//       state += "<tr>";
//       state += "<td>" + u.state + "</td>";
//       state += "<td>" + u.negative + "</td>";
//       state += "<td>" + u.positive + "</td>";
//       state += "<td>" + u.death + "</td>";
//     });
// //     document.getElementById("data").innerHTML = state;
// //   });
// // });

// $("#button-addon2").on("click", function () {
//   var search = $("#search").val().trim();
//   var stateUrl = `https://covidtracking.com/api/states?state=${search}`;
//   var settings = {
//     async: true,
//     crossDomain: true,
//     url: stateUrl,
//     method: "GET",
//   };
//   $("#search").val("");

//   $.ajax(settings).done((data) => {
//     document.getElementById("data").innerHTML = state;
//   });
// });

var url =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=YMc1gccWtljsNRIaEKZEZBHnRni3CLGx";

var covid = [1, 2, 3];
// $.ajax({
//   url: url,
//   method: "GET",
// })
// .done(function (results) {
//   console.log(results);

//   var i;
//   var covid = results.response.docs;
//   // for (i = 0; i < results.length; i++) {
//   //   document.getElementById("articleTitle").innerHTML =
//   //     results.response.docs[i].headline.main;
//   // }
// })
// .fail(function (err) {
//   throw err;
// });
