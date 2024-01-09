const weather_element = document.getElementById("weather");
const temperature_main_element = document.getElementById("temperature-main");
const weather_description_element = document.getElementById("weather-description");
const weather_icon_element = document.getElementById("icon");
const background_weather_element = document.getElementById("weather");
const temperature_element = document.getElementById("temperature");
const humidity_element = document.getElementById("humidity");
const wind_speed_element = document.getElementById("wind-speed");
const country_element = document.getElementById("country");
const city_element = document.getElementById("city");


// Fetching Data for OpenWeatherMap API
const API_KEY = "ed503a5132885e938fcf0fe468520fcf";

const urlParams = new URLSearchParams(window.location.search);
var city =  urlParams.get("city");

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&q=${city}&units=metric`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      alert("An error encountered");
      return;
    }
    return response.json();
  })
  .then((data) => {
    console.log("Weather Data:", data);

    const weather = data.weather[0].main;
    const weather_description =  data.weather[0].description;
    const weather_icon = data.weather[0].icon;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const wind_speed = data.wind.speed;
    const city = data.name;
    const country = data.sys.country;

    weather_element.innerText = weather;
    country_element.innerText = country;
    city_element.innerText = city;
    temperature_main_element.innerText = temperature;
    weather_description_element.innerText = weather_description;
    humidity_element.innerText = '${humidity}%';
    wind_speed_element.innerText = '${wind_speed}m/s';
    temperature_element.innerText ='${temperature}°C';
    
    weather_icon_element.src =  'https://openweathermap.org/img/wn/${weather_icon}@2x.png';


  });

