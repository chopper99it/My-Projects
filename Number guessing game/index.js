let messageEle = document.querySelector("#message");

//get random number

let randomNumber = getRandomNumber();
function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
console.log(randomNumber);

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

//setting
// recognition.lang = "en-Us";
recognition.lang = "vi-VN";
recognition.start();

//event
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  recognition.start();
});

function onSpeak(e) {
  //   console.log(e);
  let message = e.results[0][0].transcript;
  console.log(message);

  writeMessage(message);
  checkNumber(message);
}

//write user message
function writeMessage(message) {
  messageEle.innerHTML = `
  <div>You said:</div>
  <div class="box">${message}</div>
  <div></div>`;
}

//check number
function checkNumber(message) {
  //   console.log(typeof message);
  //   console.log(typeof randomNumber);
  number = Number(message);
  console.log(typeof number);

  if (Number.isNaN(number)) {
    messageEle.innerHTML = `<div>That is not number</div>`;
  }
  if (number > 100 || number < 1) {
    messageEle.innerHTML = `<div>Number must be between 1~ 100</div>`;
  }

  if (randomNumber > number) {
    messageEle.innerHTML += `<div>Go higher !</div>`;
  } else if (randomNumber < number) {
    messageEle.innerHTML += `<div>Go lower !</div>`;
  } else if (randomNumber === number) {
    messageEle.innerHTML = `
    <h2>
        You have guessed the number
        <br/>
        <br/>
        It was ${number}
    </h2>
    <button class="button" id="button" >Play Again!</button>
    `;
  }
}

//event
document.body.addEventListener("click", (e) => {
  if (e.target.id === "button") {
    window.location.reload();
  }
});
