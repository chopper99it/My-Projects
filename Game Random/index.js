let resetGame = document.querySelector(".restart-button");
let score = document.querySelector(".score");
let choices = document.querySelectorAll(".choice");
let modal = document.querySelector(".modal");
let result = document.querySelector(".modal-content");

let scoreBoard = {
  player: 0,
  computer: 0,
};

//event
choices.forEach(function (item) {
  item.addEventListener("click", playGame);
});

//Play Game
function playGame(e) {
  let playChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playChoice, computerChoice);
  console.log(playChoice, computerChoice, winner);

  showResult(winner, computerChoice);
}

//Get Computer Choice
function getComputerChoice() {
  let random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

///Get Winner
function getWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  } else if (player === "rock") {
    if (computer === "scissors") {
      return "player";
    } else if (computer === "paper") {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      return "player";
    } else if (computer === "rock") {
      return "computer";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "player";
    } else if (computer === "scissors") {
      return "computer";
    }
  }
}

//Show Result
function showResult(winner, computerChoice) {
  modal.style.display = "block";

  if (winner === "player") {
    scoreBoard.player++;
    //show Result
    result.innerHTML = `
        <h1>You Win baby!</h1>
        <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
        <p>Computer chose <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong> 
        </p>
    `;
  } else if (winner === "computer") {
    scoreBoard.computer++;
    //show Result
    result.innerHTML = `
        <h1>You Lose baby!</h1>
        <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
        <p>Computer chose <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong> 
          </p>
    `;
  } else {
    //show Result
    result.innerHTML = `
        <h1>Draw baby!</h1>
        <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
        <p>Computer chose <strong>${computerChoice}</strong> 
          </p>
    `;
  }

  //Show Score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player} </p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
  `;
}

//event
window.addEventListener("click", closeModal);

//Close Modal
function closeModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

//event
resetGame.addEventListener("click", restartGame);

//Restart Game
function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;

  //show Score
  score.innerHTML = `
    <p class="score-player">Player: 0 </p>
    <p class="score-computer">Computer: 0</p>
  `;

  //open Modal
  modal.style.display = "block";
  result.innerHTML = `
    <h1>Restart Game</h1>
    <p>Còn thở là phải gỡ!</p>
  `;
}
