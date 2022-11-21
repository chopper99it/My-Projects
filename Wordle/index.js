let answer = "abcde";
let button = document.querySelector(".button");

button.addEventListener("click", play);

function play() {
  let userInput = document.querySelectorAll(".input");
  console.log(userInput[0].value);

  //   if (answer[0] === userInput[0].value) {
  //     userInput[0].style.backgroundColor = "#6aaa64";
  //   } else if (answer.includes(userInput[0].value)) {
  //     userInput[0].style.backgroundColor = "#c9b458";
  //   } else {
  //     userInput[0].style.backgroundColor = "#787c7e";
  //   }

  for (let i = 0; i < userInput.length; i++) {
    if (answer[i] === userInput[i].value) {
      userInput[i].style.backgroundColor = "#6aaa64";
    } else if (answer.includes(userInput[i].value)) {
      userInput[i].style.backgroundColor = "#c9b458";
    } else {
      userInput[i].style.backgroundColor = "#787c7e";
    }
  }
}
