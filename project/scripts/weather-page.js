import { displayWeather } from '../modules/weather.js';

document.addEventListener("DOMContentLoaded", () => {
  const currentWeatherBox = document.getElementById("current-weather");
  const forecastBox = document.getElementById("forecast");

  if (currentWeatherBox && forecastBox) {
    displayWeather(currentWeatherBox, forecastBox);
  }
});
