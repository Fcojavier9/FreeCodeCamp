// DOM elements
const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("result");
const outputContainer = document.getElementById("output");

// variables globales
const romanNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

//Funciones
const convertToRoman = (num) => {
  let result = "";
  for (let key in romanNumbers) {
    let value = romanNumbers[key];

    // Mientras el número sea mayor o igual al valor actual, añadimos el símbolo romano correspondiente
    while (num >= value) {
      result += key;
      num -= value;
    }
  }
  return result;
};

// lanzadores
button.addEventListener("click", () => {
  const number = numberInput.value;
  if (number === "") {
    result.textContent = "Por favor, ingresa un número";
    outputContainer.classList.toggle("hidden");
    outputContainer.classList.remove("container");
    outputContainer.classList.add("error");
    return;
  }

  if (isNaN(number)) {
    result.textContent = "Por favor, ingresa un número válido";
    outputContainer.classList.toggle("hidden");
    outputContainer.classList.remove("container");
    outputContainer.classList.add("error");
    return;
  }

  if (number < 1 || number > 3999) {
    result.textContent =
      number < 1
        ? "Por favor, ingresa un número mayor o igual a 1"
        : "Por favor, ingresa un número mayor o igual a 3999";
    outputContainer.classList.toggle("hidden");
    outputContainer.classList.remove("container");
    outputContainer.classList.add("error");
    return;
  }

  const romanNumber = convertToRoman(number);
  result.innerText = romanNumber;
  outputContainer.classList.toggle("hidden");
  outputContainer.classList.remove("error");
  outputContainer.classList.add("container");
});
