// RUNS THE COVID STATE RESUTLS
var api_url = "https://covidtracking.com/api/v1/states/current.json";
var state = "";

fetch(api_url).then((res) => {
  res.json().then((data) => {
    console.log(data);
    if ((data.length = 50));

    data.forEach((u) => {
      state += "<tr>";
      state += "<td>" + u.state + "</td>";
      state += "<td>" + u.negative + "</td>";
      state += "<td>" + u.positive + "</td>";
      state += "<td>" + u.death + "</td>";
      state += "<td>" + u.recovered + "</td>";
      state += "<td>" + u.total + "</td>";
    });
    document.getElementById("data").innerHTML = state;
  });
});

$(document).ready(function () {
  $("#button-addon2").on("keyup", function () {
    var value = $(this).val();
    $("#data td").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// NEW ARTICLES ON COVID-19
// axios
//   .get(
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=YMc1gccWtljsNRIaEKZEZBHnRni3CLGx"
//   )
//   .then((response) => {
//     // handle success
//     console.log(response);
//   })
//   .catch((error) => {
//     // handle error
//     console.log(error);
//   });
