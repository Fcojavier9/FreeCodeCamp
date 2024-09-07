// Elementos del DOM
const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

// Variables
let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

// Eventos
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  rulesContainer.style.display = isModalShowing ? "block" : "none";
  rulesBtn.innerText = isModalShowing ? "Hide rules" : "Show rules";
});

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  }

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  roundElement.textContent = round;
  rollsElement.textContent = rolls;
};

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false; // activamos el boton radio
  scoreInputs[index].value = score; // asignamos el valor

  scoreSpans[index].textContent = `, score = ${score}`; // mostramos el valor
};

const updateScore = (selectedValue, achieved) => {
  score += parseInt(selectedValue);
  totalScoreElement.textContent = score;

  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (arr) => {
  const nums = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  let sum = 0;
  arr?.forEach((el) => {
    nums[el]++;
    sum += el;
  });

  for (let key in nums) {
    if (nums[key] >= 3) {
      if (nums[key] >= 4) {
        updateRadioOption(1, sum);
      }
      updateRadioOption(0, sum);
    }
    updateRadioOption(scoreInputs.length - 1, 0);
  }
};

const detectFullHouse = (arr) => {
  const nums = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (const num of arr) {
    nums[num]++;
  }

  if (Object.values(nums).includes(3) && Object.values(nums).includes(2)) {
    updateRadioOption(2, 25);
  }
  updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};

const resetGame = () => {
  listOfAllDice.forEach((el) => (el.textContent = 0));
  score = 0;
  rolls = 0;
  round = 1;
  totalScoreElement.textContent = score;
  scoreHistory.textContent = "";
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
  resetRadioOptions();
};

const checkForStraights = (arr) => {
  const arrOrd = arr.sort((a, b) => a - b);
  let cont = 1;
  for (let i = 1; i < arrOrd.length; i++) {
    if (arrOrd[i] === arrOrd[i - 1] + 1) {
      cont++;
    }
  }

  if (cont === 4) {
    updateRadioOption(3, 30);
  } else if (cont > 4) {
    updateRadioOption(3, 30);
    updateRadioOption(4, 40);
  }

  updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    resetRadioOptions();
    rolls++;
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
    detectFullHouse(diceValuesArr);
    checkForStraights(diceValuesArr);
  }
});

keepScoreBtn.addEventListener("click", () => {
  const checked = [...scoreInputs].find((input) => input.checked); // Busco el elemento que este checked
  const selectedValue = checked?.value; // Si existe, obtengo el valor
  const achieved = checked?.id; // Si existe, obtengo

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);
    if (round > 6) {
      setTimeout(() => {
        alert(`Game Over! Your total score is ${score}`);
        resetGame();
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});
