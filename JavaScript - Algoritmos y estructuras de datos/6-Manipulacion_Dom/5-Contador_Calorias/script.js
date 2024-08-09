function getRandomComputerResult() {
  const options = ["🪨", "🗞️", "✂️"];
  const randomIndex = Math.floor(Math.random() * options.length); // así se obtiene un numero menor al maximo del array
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "🪨" && computer === "✂️") ||
    (player === "✂️" && computer === "🗞️") ||
    (player === "🗞️" && computer === "🪨")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)){
    playerScore++;
    return `¡Jugador gana! ${userOption} vence a ${computerResult}`
  } else {
    if (userOption === computerResult){
      return `¡Empate! Ambos han elegido ${userOption}`
    } else {
      computerScore++;
      return `¡Rival gana! ${computerResult} vence a ${userOption}`
    }
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = playerScore === 3 ? "¡Jugador ha ganado el juego!" : "Rival ha ganado el juego!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display ="none";
  optionsContainer.style.display ="block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("🪨");
});

paperBtn.addEventListener("click", function () {
  showResults("🗞️");
});

scissorsBtn.addEventListener("click", function () {
  showResults("✂️");
});