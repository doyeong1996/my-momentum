// 실시간 시계 셋팅  -  .padStart(2,"0") 적용

const clock = document.querySelector("h2#clock");

function clockSet() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}
clockSet();
setInterval(clockSet, 1000);
