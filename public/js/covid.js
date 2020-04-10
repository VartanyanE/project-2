var api_url = "https://covidtracking.com/api/v1/states/current.json";

fetch(api_url).then((res) => {
  res.json().then((data) => {
    console.log(data);
    if ((data.length = 1));
    var state = "";

    data.forEach((u) => {
      state += "<tr>";
      state += "<td>" + u.state + "</td>";
      state += "<td>" + u.negative + "</td>";
      state += "<td>" + u.positive + "</td>";
      state += "<td>" + u.death + "</td>";
      state += "<td>" + u.dateChecked + "</td></tr>";
    });
    document.getElementById("data").innerHTML = state;
  });
});

function setup() {
  var button = select("#button-addon2");
  button.mousePressed(stateDesired);
}

function stateDesired() {
  var url = api_url + state;
  loadJSON(url, gotData);
}

function gotData() {
  stateDesired = data;
}

var apiNews = "https://covidtracking.com/api/press";

fetch(apiNews).then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length < data.length);
  });
});
