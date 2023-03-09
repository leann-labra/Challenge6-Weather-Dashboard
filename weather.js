//-----------------PSUEDO CODE-------------------------//
///read up on weather api documentation
///dynamically create list elements for a table, 1 big card, and 5 smaller cards
///Left sidebar:
//input to search for city
//button to store user information
//trigger function to search for city
//list of cities underneath search bar

//top right card:
//Name of city rendered
//li/p elements rendered
//temperature
//wind
//humidity
//UV index-- UV index number in green square card. Bg-green

//bottom right 5 cards: connected to moment?
//current date
//icon that indicates forecast conditions for the day
//list of weather conditions
//-----------------PSEUDO CODE SEARCH CITY FUNCTION-------------//
//fetch request for cities
//local storage to store info of city
//append buttons of inputs underneatch input box
//store in a JSON array, declare variable

//-------------------API KEY--------------------------//
var APIkey = "647f561906a8e44debcd1c6086357775";

//------------Global Variables---------//
var inputContainer = document.getElementsByClassName("searchInputContainer");
var cityInput = document.getElementById("cityInput");
var searchBtn = document.getElementById("search-btn");
var cityBtnCont = document.getElementsByClassName("citiesContainer");

//-----------retrieve info in SearchCity input----------//
function searchCityInput() {
  localStorage.setItem("city", JSON.stringify(cityInput));
  console.log(cityInput);

  //-----------render SearchCity input---------------------//
  function renderCities() {
    var cityName = JSON.parse(localStorage.getItem("city"));

    var cityBtn = document.createElement("button");
    cityBtn.textContent = cityName;

    cityBtnCont.appendChild(cityBtn);
  }
  renderCities();
}

searchBtn.addEventListener("click", searchCityInput());

//-----------retrieving weather city info using lat and lon------//
function weatherLocation() {
  // coordinates by location name
  var locationAPI =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid=647f561906a8e44debcd1c6086357775";

  fetch(locationAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
weatherLocation();
//----------coordinates by location name-------//
function coordinateConversion() {
  var geocodingAPI =
    "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=647f561906a8e44debcd1c6086357775";

  fetch(geocodingAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function weatherSearchCity() {}
function renderCities(name) {
  var cityBtn = $("<button>").addClass("cityName").text(name);
}
//handles city name submissions
function storeSubmitCity(event) {
  event.preventDefault();

  var cityName = searchInputEl.val().trim();
}

//fetch request for location from inputs selected, find a way to target selected input

//---------------CARD FOR CITY PICKED-------------------//
//render city chosen in a card
//

// ------ EVENT LISTENERS -------//
// Define event listener for the search form
searchFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  // Retrieve the city input from the form
  var city = cityInputEl.value.trim();
  // Call the getWeather function to retrieve and display weather conditions
  getWeather(city);
  // Add the city to the search history
  // Use DOM manipulation to display the updated search history on the page
});

// Define event listener for the search history
searchHistoryEl.addEventListener("click", function (event) {
  // Retrieve the clicked city from the event target
  var city = event.target.textContent;
  // Call the getWeather function to retrieve and display weather conditions
  getWeather(city);
});
