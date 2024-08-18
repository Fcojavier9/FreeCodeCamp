//Funcion Media
const getMean = (array) =>
  array.reduce((acumulador, elemento) => acumulador + elemento, 0) /
  array.length;

//Funcion Mediana
const getMedian = (array) => {
  // Se clona el array y se ordena, ya que sort modifica el array original
  const sorted = array.slice().sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];

  return median;
};

//Funcion Moda
const getMode = (array) => {
  const counts = {};

  // Se recorre el array y se cuenta la cantidad de veces que se repite cada elemento
  array.forEach((el) => (counts[el] = (counts[el] || 0) + 1));

  // Si todos los elementos se repiten la misma cantidad de veces se retorna null
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  //Ordena de mayor a menor y toma el primer elemento, con Object.keys se obtiene las claves del objeto
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

  //Se filtra las claves que tengan el mismo valor que el mayor
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );

  // Si la moda es unica se retorna el valor, si no se retorna un array con las modas
  return mode.join(", ");
};

// Funcion Rango
// se obtiene el maximo y el minimo del array pasado con spread operator y se restan
const getRange = (array) => Math.max(...array) - Math.min(...array);

// Funcion Varianza
const getVariance = (array) => {
  const mean = getMean(array);
  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2; // Se eleva al cuadrado
      return acc + squared;
    }, 0) / array.length;
  return variance;
};

// Funcion Desviacion Estandar
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};

// Funcion principal
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array
    .map((elemento) => Number(elemento))
    .filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};
