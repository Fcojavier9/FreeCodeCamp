let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["palo"];
let arrayEasterEgg = [goTown, goTown, easterEgg];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: "palo", power: 5 },
  { name: "daga", power: 30 },
  { name: "martillo de garra", power: 50 },
  { name: "espada", power: 100 },
];
const monsters = [
  {
    name: "baba",
    level: 2,
    health: 15,
  },
  {
    name: "bestia colmilluda",
    level: 8,
    health: 60,
  },
  {
    name: "dragón",
    level: 20,
    health: 300,
  },
];
const locations = [
  {
    name: "plaza del pueblo",
    "button text": [
      "Ir a la tienda",
      "Ir a la mazmorra",
      "Luchar contra el dragón",
    ],
    "button functions": [goStore, goCave, fightDragon],
    text: 'Estás en la plaza del pueblo. Ves un letrero que dice "Tienda".',
  },
  {
    name: "tienda",
    "button text": [
      "Comprar 10 de salud (10 de oro)",
      "Comprar arma (30 de oro)",
      "Ir a la plaza del pueblo",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "Entras en la tienda.",
  },
  {
    name: "mazmorra",
    "button text": [
      "Luchar contra la baba",
      "Luchar contra la bestia colmilluda",
      "Ir a la plaza del pueblo",
    ],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Entras en la mazmorra. Ves algunos monstruos.",
  },
  {
    name: "luchar",
    "button text": ["Atacar", "Esquivar", "Huir"],
    "button functions": [attack, dodge, goTown],
    text: "Estás luchando contra un monstruo.",
  },
  {
    name: "matar monstruo",
    "button text": [
      "Ir a la plaza del pueblo",
      "Ir a la plaza del pueblo",
      "Ir a la plaza del pueblo",
    ],
    "button functions": arrayEasterEgg,
    text: 'El monstruo grita "¡Arg!" mientras muere. Ganas puntos de experiencia y encuentras oro.',
  },
  {
    name: "perder",
    "button text": ["¿REINTENTAR?", "¿REINTENTAR?", "¿REINTENTAR?"],
    "button functions": [restart, restart, restart],
    text: "Mueres. &#x2620;",
  },
  {
    name: "ganar",
    "button text": ["¿REINTENTAR?", "¿REINTENTAR?", "¿REINTENTAR?"],
    "button functions": [restart, restart, restart],
    text: "¡Derrotas al dragón! ¡GANAS EL JUEGO! &#x1F389;",
  },
  {
    name: "huevo de pascua",
    "button text": ["2", "8", "¿Ir a la plaza del pueblo?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "Encuentras un juego secreto. Elige un número arriba. Se elegirán al azar diez números entre 0 y 10. ¡Si el número que eliges coincide con uno de los números aleatorios, ganas!",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "No tienes suficiente oro para comprar salud.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Ahora tienes un " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " En tu inventario tienes: " + inventory;
    } else {
      text.innerText = "No tienes suficiente oro para comprar un arma.";
    }
  } else {
    text.innerText = "¡Ya tienes el arma más poderosa!";
    button2.innerText = "Vender arma por 15 de oro";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "Vendiste un " + currentWeapon + ".";
    text.innerText += " En tu inventario tienes: " + inventory;
  } else {
    text.innerText = "¡No vendas tu única arma!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "El " + monsters[fighting].name + " ataca.";
  text.innerText += " Lo atacas con tu " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " Fallas.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Tu " + inventory.pop() + " se rompe.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "Esquivas el ataque del " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  shuffle(arrayEasterEgg);
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["palo"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText =
    "Elegiste el " + guess + ". Aquí están los números aleatorios:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "¡Correcto! ¡Ganas 20 de oro!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "¡Incorrecto! ¡Pierdes 10 de salud!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
