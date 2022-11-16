const key = "c65f2535e5cc05bf6d0d73e8581757ff";
let searchBox = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let highLow = document.querySelector(".high-low");
let options = {
  weekday: "short",
  year: "numeric",
  month: "shortx",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

//event
searchBox.addEventListener("keydown", searchCity);

//Search City
function searchCity(e) {
  if (e.key === "Enter") {
    // console.log(e.target.value);
    getResponse(e.target.value);
  }
}

//Call Api
function getResponse(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      showResult(data);
    });
}

//Show Result
function showResult(data) {
  let today = new Date();
  city.textContent = `${data.name}, ${data.sys.country}`;
  date.textContent = today.toLocaleDateString("en-US", options);
  weather.textContent = `${data.weather[0].main}`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  highLow.textContent = `${Math.round(data.main.temp_min)}°C / ${Math.round(
    data.main.temp_max
  )}°C`;
}
