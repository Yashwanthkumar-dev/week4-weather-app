const API_KEY = "3f92710faa744701beb102101262905";

const BASE_URL = "https://api.weatherapi.com/v1";

// INPUTS

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// WEATHER ELEMENTS

const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");

const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const feelsLikeElement = document.getElementById("feelsLike");

const weatherIcon = document.getElementById("weatherIcon");

const forecastContainer = document.getElementById("forecastContainer");

// FETCH WEATHER DATA

async function getWeather(city = "coimbatore") {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    updateCurrentWeather(data);

    updateForecast(data.forecast.forecastday);
  } catch (error) {
    alert(error.message);
  }
}

// UPDATE CURRENT WEATHER

function updateCurrentWeather(data) {
  locationElement.textContent = `${data.location.name}, ${data.location.country}`;

  temperatureElement.textContent = `${data.current.temp_c}°C`;

  conditionElement.textContent = data.current.condition.text;

  humidityElement.textContent = `${data.current.humidity}%`;

  windElement.textContent = `${data.current.wind_kph} km/h`;

  feelsLikeElement.textContent = `${data.current.feelslike_c}°C`;

  weatherIcon.src = `https:${data.current.condition.icon}`;
}

// UPDATE FORECAST

function updateForecast(forecastDays) {
  forecastContainer.innerHTML = "";

  forecastDays.forEach((day) => {
    const forecastCard = document.createElement("div");

    forecastCard.classList.add("forecast-card");

    forecastCard.innerHTML = `
      <h3>${day.date}</h3>

      <img 
        src="https:${day.day.condition.icon}" 
        alt="forecast-icon"
      >

      <p>${day.day.condition.text}</p>

      <h2>${day.day.avgtemp_c}°C</h2>
    `;

    forecastContainer.appendChild(forecastCard);
  });
}

// SEARCH BUTTON EVENT

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();

  if (city !== "") {
    getWeather(city);
  }
});

// ENTER KEY EVENT

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const city = searchInput.value.trim();

    if (city !== "") {
      getWeather(city);
    }
  }
});

// INITIAL LOAD

getWeather();
