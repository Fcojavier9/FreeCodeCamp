const totalPrice = document.querySelector("#total-price");
const listChange = document.querySelector("#list-change");
const input = document.querySelector("#cash");
const purchaseBtn = document.querySelector("#purchase-btn");
const changeDue = document.querySelector("#change-due");

let price = 19.5;
totalPrice.textContent = price;

const change = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25,
  one: 1,
  five: 5,
  ten: 10,
  twenty: 20,
  "one hundred": 100,
};

let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
const updateCid = () => {
  listChange.innerHTML = "";
  cid.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = `${el[0]}: $${el[1]}`;
    listChange.appendChild(li);
  });
};
updateCid();

purchaseBtn.addEventListener("click", () => {
  const amount = parseFloat(input.value);
  if (price > amount) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const changeDueAmount = (amount - price).toFixed(2);
  if (parseFloat(changeDueAmount) === 0) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  // Verificar si el total en la caja es suficiente para devolver el cambio
  // pasamos [, amount] ya que el nombre no lo necesitamos como parametro, solo la cantidad
  const totalInDrawer = cid
    .reduce((sum, [, amount]) => sum + amount, 0)
    .toFixed(2);
  if (parseFloat(totalInDrawer) < parseFloat(changeDueAmount)) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const changeDueList = [];
  const arrAux = [...cid];
  let changeAmount = parseFloat(changeDueAmount);

  // Iterar sobre las denominaciones de cambio en orden descendente
  for (const [name, value] of Object.entries(change).reverse()) {
    if (changeAmount >= value) {
      const count = Math.floor(changeAmount / value);
      changeAmount = (changeAmount - count * value).toFixed(2);
      const actualChange = count * value;

      // buscamos el elemento dentro del array cuyo primer elemento sea igual al nombre en mayusculas
      const denomination = cid.find(([denom]) => denom === name.toUpperCase());
      arrAux.pop();

      // si hay suficiente cambio de la moneda
      if (denomination[1] >= actualChange) {
        let text = "OPEN";
        if (denomination[1] == actualChange) {
          text = "CLOSED";
        }
        denomination[1] -= actualChange;
        changeDueList.push(`${text} ${name.toUpperCase()}: $${actualChange}`);
      } else {
        arrAux.pop();
        const totalActualInDrawer = arrAux
          .reduce((sum, [, amount]) => sum + amount, 0)
          .toFixed(2);
        if (parseFloat(totalActualInDrawer) < parseFloat(changeDueAmount)) {
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
          return;
        }

        if (denomination[1] != 0) {
          changeDueList.push(`OPEN ${name.toUpperCase()}: $${denomination[1]}`);
        }
        const resta = actualChange - denomination[1];
        changeAmount = parseFloat(changeAmount) + parseFloat(resta);
        denomination[1] = 0;
      }
    }
  }

  changeDue.textContent = `Status: ${changeDueList.join(", ")}`;
  updateCid();
});
