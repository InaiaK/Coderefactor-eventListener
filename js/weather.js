<<<<<<< HEAD

=======
>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
var nameEl = document.getElementById("city-name");
var currentTempEl = document.getElementById("temperature");

// API 

var apiKey = "NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0";
<<<<<<< HEAD
var apiInfo = "https://dataservice.accuweather.com/locations/v1/cities/search"

// Get city name for a Location Key.
=======
var apiInfo = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/?apikey=NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0"

>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
let cityName = localStorage.getItem("city")
console.log("city", cityName)
getapiInfo(cityName);

<<<<<<< HEAD
// Location Key 
=======
>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
var getData = function (key) {

    var apiUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0`
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
<<<<<<< HEAD
                response.json()
            }
        }).then(function (data) {
            console.log(apiUrl);
        })
}
    .catch(function (error) {
        alert('Error: Please enter a City');
    });

    //  Display forecast info 

function getapiInfo(city) {
    var apiResponse = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0&q=${city}&imperial`;
=======
                return response.json();
            }
        }).then(function (data) {
            console.log(data);
        })
}
// searchEl.addEventListener("click", formSubmitCity);

function getapiInfo(city) {
    var apiResponse = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0&q=${city}&imperial`;
>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
    fetch(apiResponse)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
<<<<<<< HEAD
                    let key = data[0].city.Key
                    getData(data)
                    var lat = data.coord.lat
                    var lon = data.coord.lon
                    var forecast = data.DailyForecasts
                    var temperature = data.Tempature.Minimum.Maximum

                    apiResponse(lat, lon, city, Details, forecast, temperature);

                    var userHistory = JSON.parse(localStorage.getItem("WeatherAPI")) || []
                    userHistory.push(city)
                    localStorage.setItem("WeatherAPI", JSON.stringify(userHistory))
=======
                    let key = data[0].Key
                    getData(key)
                    var dailyWeather = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/34781?apikey=NAUqjqumgvHjOh22xdKhD5LXDAzGaHz0"
                    // var lat = data.coord.lat
                    // // var lon = data.coord.lon
                    // apiResponse(lat, lon, city)
                    // var userHistory = JSON.parse(localStorage.getItem("WeatherAPI")) || []
                    // userHistory.push(city)
                    // localStorage.setItem("WeatherAPI", JSON.stringify(userHistory))
>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
                });
            } else {
                console.log('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Error: Please enter a City');
        });

<<<<<<< HEAD

    searchEl.addEventListener("click", formSubmitCity);
    nameEl.append();
   apiResponse.append(getapiInfo);
=======
>>>>>>> 1ca3cdd514574a4ad6e022d53947350f437786c1
}