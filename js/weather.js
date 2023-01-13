const API_KEY = "f9f325bfc90237bef059dbbbf4c050d2 ";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  console.log(url);
}
function onError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onError);
