const apiKey = "2d0ba98915a7f31186609fc4c71ddeee";
const city = "Riverton";
const units = "imperial";

const currentWeatherBox = document.getElementById("current-weather");
const forecastBox = document.getElementById("forecast");

async function getCoordinates(city) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );
  const data = await response.json();
  if (!data[0]) throw new Error("City not found");
  return { lat: data[0].lat, lon: data[0].lon };
}

async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
  );
  return await response.json();
}

async function getForecast(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
  );
  const data = await response.json();
  return data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);
}

function displayCurrent(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
    const high = Math.round(data.main.temp_max);
    const low = Math.round(data.main.temp_min);
    const humidity = data.main.humidity;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    currentWeatherBox.innerHTML = `
      <div class="weather-current">
        <img src="${iconURL}" alt="${description}">
        <div>
          <p><strong>${temp}°F</strong></p>
          <p>${description}</p>
          <p>High: ${high}°F</p>
          <p>Low: ${low}°F</p>
          <p>Humidity: ${humidity}%</p>
          <p>Sunrise: ${sunrise}</p>
          <p>Sunset: ${sunset}</p>
        </div>
      </div>
    `;
  }

function displayForecast(days) {
    forecastBox.innerHTML = days.map(day => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      const temp = Math.round(day.main.temp);
      return `<p><strong>${dayName}:</strong> ${temp}°F</p>`;
    }).join("");
  }

async function displayWeather() {
  try {
    const { lat, lon } = await getCoordinates(city);
    const [current, forecast] = await Promise.all([
      getCurrentWeather(lat, lon),
      getForecast(lat, lon),
    ]);
    displayCurrent(current);
    displayForecast(forecast);
  } catch (error) {
    currentWeatherBox.textContent = "Weather info unavailable.";
    forecastBox.textContent = "";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", displayWeather);