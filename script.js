// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

let previousSearch = [];
let apiUrl = 'https://api.openweathermap.org';
let apiKey = '1d62e0d5f6728111b13e38cdd76d1f28';

let locationSearch = document.querySelector('#locationSearch');
let searchField = document.querySelector('#searchField');
let previousSearchField= document.querySelector('#previousSearchField')

function renderPreviousSearchField() {
    previousSearchField.innerHTML = '';

    for (let i = 0; i <= previousSearchField.length; i++) {
        let searchButton = document.createElement('button');
        searchButton.setAttribute('type', 'button');
    }
}

function getPreviousSearch() {
    let searchHistory = localStorage.getItem('previousSearch');
    if(searchHistory) {
        previousSearch = JSON.parse(searchHistory);
    }
    renderPreviousSearchField();
}

function handlePreviousSearchClick() {

}

function handleLocationSearchSubmit() {
    if(!searchField.value) {

    }
}
getPreviousSearch();
locationSearch.addEventListener ('submit', handleLocationSearchSubmit);
previousSearchField.addEventListener('click', handlePreviousSearchClick);
