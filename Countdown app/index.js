let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// let today = new Date();
// let newYear = new Date(`Jan 01 ${curer\} 00:00:00`);

function countDown() {
  let today = new Date();
  let currentYear = today.getFullYear();
  console.log(currentYear);
  let newYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);
  let diff = (newYear - today) / 1000;
  //   console.log(diff);

  let d = Math.floor(diff / 60 / 60 / 24);
  let h = Math.floor(diff / 60 / 60) % 24;
  let m = Math.floor(diff / 60) % 60;
  let s = Math.floor(diff % 60);
  //   console.log(d, h, m, s);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
countDown();
setInterval(countDown, 1000);
