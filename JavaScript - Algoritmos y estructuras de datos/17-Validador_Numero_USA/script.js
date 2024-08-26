// Elementos del DOM
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");

/*
Desglose de la regex:
• ^1?: Opcionalmente, el número puede comenzar con un "1".
• \s?: Opcionalmente, puede haber un espacio después del "1".
• (\(\d{3}\)|\d{3}): El código de área debe ser 3 dígitos, permitiendo estar entre paréntesis - (\d{3}) o sin ellos \d{3}.
• [\s-]?: Permite un espacio o un guion entre el código de área y el siguiente grupo de 3 dígitos.
• \d{3}: El siguiente grupo debe contener 3 dígitos.
• [\s-]?: Permite un espacio o un guion entre los dos últimos grupos de dígitos.
• \d{4}: El último grupo debe contener 4 dígitos.
• $: Finaliza la expresión regular.
*/
const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/

// funciones
const checkPhoneNumber = () => {
  const value = input.value;
  if (!value) alert("Please provide a phone number");
  const isValid = regex.test(value);
  const resultCheck = document.createElement("p");
  resultCheck.className = "p-result"
  resultCheck.textContent = isValid ? `Valid US number: ${value}` : `Invalid US number: ${value}`
  result.appendChild(resultCheck);
  input.value = "";
}

const clearResult = () => {
  result.innerHTML = "";
  input.value = "";
}

// eventos
checkBtn.addEventListener("click", checkPhoneNumber)
clearBtn.addEventListener("click", clearResult)