/**
 * Error: syntax error -> fallo en la sintaxis
 *
 * Solución: Se faltaban las comas separatorias
 */
const arrHex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

/**
 * Error: reference error -> fallo en la referencia a una funcion o variable
 *
 * Solución: math -> Math
 * Solución2: Math.floor a todo el resultado
 */
function getRandomIndex() {
  const randomIndex = Math.floor(arrHex.length * Math.random());
  return randomIndex;
}
getRandomIndex();

/**
 * Error: TypeError -> fallo en el tipo de dato pasado
 * o el dato no es el esperado
 * o fallo en la llamada de una función
 *
 * Solución: document.queryselector("body"); -> document.querySelector("body");
 */
const body = document.querySelector("body");

/**
 * Error: null -> fallo en la referencia a un elemento
 *
 * Solución: document.queryselector("bg-hex-code"); -> document.querySelector("#bg-hex-code");
 */
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

/**
 * Error: no se ejecuta la función
 * Solución: arrHex[getRandomIndex] -> arrHex[getRandomIndex()]
 */
function changeBackgroundColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += arrHex[getRandomIndex()];
  }
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
changeBackgroundColor();

const btn = document.querySelector("#btn");

/**
 * Error: no se ejecuta la función
 * Solución: btn.onclick = changeBackgroundColor(); -> btn.onclick = changeBackgroundColor;
 */
btn.onclick = changeBackgroundColor;
