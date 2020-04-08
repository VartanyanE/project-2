$('.apiCall').on('click', function (e) {
    console.log("clicked")

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid1910.p.rapidapi.com/data/death/country/us",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid1910.p.rapidapi.com",
            "x-rapidapi-key": "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})