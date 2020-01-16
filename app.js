const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const COMPUTER_WINNER = "COMPUTER WON!";
const PLAYER_WINNER = "PLAYER WON!";
const RESULT_DRAW = "A DRAW!";

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS}?`,"").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (playerChoice === ROCK && computerChoice === PAPER) ||
    (playerChoice === PAPER && computerChoice === SCISSORS) ||
    (playerChoice === SCISSORS && computerChoice === ROCK)
  ) {
    return COMPUTER_WINNER;
  } else {
    return PLAYER_WINNER;
  } 
};

startGameBtn.addEventListener("click", function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
  const gameWinner = getWinner(playerChoice,computerChoice);
  console.log(gameWinner);
});
