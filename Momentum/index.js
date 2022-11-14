let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".myName");
let myFocus = document.querySelector(".myFocus");

//Show Time
function showTime() {
  //creat date
  let rtClock = new Date();
  let hours = rtClock.getHours();
  let minutes = rtClock.getMinutes();
  let seconds = rtClock.getSeconds();

  //add zero
  // hours = ("0" + hours).slice(-2);
  // minutes = ("0" + minutes).slice(-2);
  // seconds = ("0" + seconds).slice(-2);

  //output Time
  time.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  setTimeout(showTime, 1000);
}

//add zero
function addZero(number) {
  return number < 10 ? "0" + number : number;
}

//Show Background
function showBackground() {
  let today = new Date();
  let hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = "url(./img/morning.avif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good morning, ";
  } else if (hours < 18) {
    document.body.style.backgroundImage = "url(./img/afternoon.avif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good Afternoon, ";
  } else {
    document.body.style.backgroundImage = "url(./img/night.avif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good evening, ";
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    myName.innerText = "";
  } else {
    myName.innerText = localStorage.getItem("name");
  }
}
//event
myName.addEventListener("keydown", setName);

//Set Name
function setName(dataName) {
  if (dataName.key === "Enter") {
    localStorage.setItem("name", dataName.target.innerText);
    myName.blur();
  }
}

//Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    myFocus.innerText = "";
  } else {
    myFocus.innerText = localStorage.getItem("focus");
  }
}

//event
myFocus.addEventListener("keydown", setFocus);

//Set Focus
function setFocus(dataFocus) {
  if (dataFocus.key === "Enter") {
    localStorage.setItem("focus", dataFocus.target.innerText);
    myFocus.blur();
  }
}

showTime();
showBackground();
getName();
getFocus();
