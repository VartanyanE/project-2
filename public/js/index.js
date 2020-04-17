// $(document).ready(() => {


//     $('.create-form').on('submit', (e) => {
//         e.preventDefault();
//         console.log("loading")
//         var search = $("#search").val().trim();
//         var url = `https://amazon-price1.p.rapidapi.com/search?keywords=${search}&marketplace=US`
//         var settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": url,
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
//                 "x-rapidapi-key": "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a"
//             }
//         }
//         $("#search").val("");

//         $.ajax(settings).done((response) => {
//             console.log(response);
//         });
//     })
// })

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {

//         // Storing the current latitude and longitude in variables
//         x = position.coords.latitude;
//         y = position.coords.longitude;

//         //  Calling the function that has the Yelp AJAX call that gets the current location, and takes the latitude and longitude as parameters
//         userLocation(x, y)
//     });
// } else {
//     console.log("doesn't work")
// }


// const userLocation = (x, y) => {
//     console.log(`The user latitude is ${x} and the user longitude is ${y}`)
// }