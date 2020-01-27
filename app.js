const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const COMPUTER_WINNER = "COMPUTER WON!";
const PLAYER_WINNER = "PLAYER WON!";
const RESULT_DRAW = "A DRAW!";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK} , ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (playerChoice = DEFAULT_USER_CHOICE, computerChoice) => {
  return computerChoice === playerChoice
    ? RESULT_DRAW
    : (playerChoice === ROCK && computerChoice === PAPER) ||
      (playerChoice === PAPER && computerChoice === SCISSORS) ||
      (playerChoice === SCISSORS && computerChoice === ROCK)
    ? COMPUTER_WINNER
    : PLAYER_WINNER;

  // if (computerChoice === playerChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (playerChoice === ROCK && computerChoice === PAPER) ||
  //   (playerChoice === PAPER && computerChoice === SCISSORS) ||
  //   (playerChoice === SCISSORS && computerChoice === ROCK)
  // ) {
  //   return COMPUTER_WINNER;
  // } else {
  //   return PLAYER_WINNER;
  // }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
  let gameWinner;
  if (playerChoice) {
    gameWinner = getWinner(playerChoice, computerChoice);
  } else {
    gameWinner = getWinner(playerChoice, computerChoice);
  }
  let finalMessage = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (gameWinner === RESULT_DRAW) {
    message = finalMessage + "had a draw!";
  } else if (gameWinner === PLAYER_WINNER) {
    message = finalMessage + "won. Congratulations!";
  } else {
    message = finalMessage + "lose.";
  }
  console.log(message);
  gameIsRunning = false;
});

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, "The result after adding all numbers is: ");
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(showResult.bind(this,'The result after adding all numbers is: '), "ADD", 1005, -1000, 22, 86);
combine(showResult.bind(this,'The result after subtracting all numbers is: '), "SUBTRACT", 105, -1000, 22, 86);
