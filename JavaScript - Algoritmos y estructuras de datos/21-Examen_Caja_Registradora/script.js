const totalPrice = document.querySelector("#total-price");
const listChange = document.querySelector("#list-change");

let price = 1.87;
totalPrice.textContent = price;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
cid.forEach(el => {
  const li = document.createElement("li");
  li.textContent = `${el[0]}: $${el[1]}`
  listChange.appendChild(li);
})