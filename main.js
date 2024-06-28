const apiKey = "ce2e978e40833aca7446273badf6ae84";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "metric"; 

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "London") {
  const response = await fetch(
    `${apiUrl}${city}&appid=${apiKey}&units=${units}`,
  );
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main.toLowerCase() == "clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main.toLowerCase() == "clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main.toLowerCase() == "rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main.toLowerCase() == "drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main.toLowerCase() == "mist") {
    weatherIcon.src = "mist.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

// Default check for a city to load initial data
checkWeather();
