const API_KEY = "f9f325bfc90237bef059dbbbf4c050d2";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const ion = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ion}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = date.name;
      weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
    });
}
function onError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onError);
