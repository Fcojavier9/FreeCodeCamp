const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const text = document.getElementById("result");

const reverseCad = (cadena) => {
  let arrayCad = cadena.split("");
  let reverseCadena = arrayCad.reverse();
  let result = reverseCadena.join("");
  return result;
};

const isPalindromo = (param) => {
  const regex = /[^A-Z0-9]+/gi; //todo lo que no sea A-Z o a-z
  const cadena = param.replace(regex, "").toLowerCase();
  const cadenaRev = reverseCad(cadena);

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== cadenaRev[i]) {
      return false;
    }
  }

  return true;
};

const isEmpty = () => {
  if (!input.value) {
    alert("Please input a value");
  }

  text.innerHTML = isPalindromo(input.value)
    ? `<strong>${input.value}</strong> is a palindrome.`
    : `<strong>${input.value}</strong> is not a palindrome.`;
};

checkButton.addEventListener("click", isEmpty);
