const input = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const dataContainer = document.querySelector("#data-container");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const pokemonWeight = document.querySelector("#weight");
const pokemonHeight = document.querySelector("#height");
const pokemonImg = document.querySelector("#pokemon-image");
const pokemonTypes = document.querySelector("#types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const API = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return false;
  }
};

const normalize = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replaceAll(/[\s.]/g, "-") // Elimina espacios adicionales y reemplaza el punto y el espacio por un guion
    .replaceAll(/'/g, "");
};

const fillData = (data) => {
  const { name, id, weight, height, stats, sprites, types } = data;

  // Asignar los valores a los elementos del DOM
  pokemonName.textContent = name.toUpperCase();
  pokemonId.textContent = `#${id}`;
  pokemonWeight.textContent = weight;
  pokemonHeight.textContent = height;
  pokemonImg.innerHTML = `<img src="${sprites.front_default}" alt="${name}" id="sprite" />`;
  pokemonTypes.innerHTML = types
    .map((type) => `<span id="${type.type.name}" class="type">${type.type.name}</span>`)
    .join(" ");

  // Asignar los valores a los elementos del DOM buscando el stat correspondiente en el array de stats
  pokemonHp.textContent = stats.find((s) => s.stat.name === "hp").base_stat;
  pokemonAttack.textContent = stats.find(
    (s) => s.stat.name === "attack"
  ).base_stat;
  pokemonDefense.textContent = stats.find(
    (s) => s.stat.name === "defense"
  ).base_stat;
  pokemonSpecialAttack.textContent = stats.find(
    (s) => s.stat.name === "special-attack"
  ).base_stat;
  pokemonSpecialDefense.textContent = stats.find(
    (s) => s.stat.name === "special-defense"
  ).base_stat;
  pokemonSpeed.textContent = stats.find(
    (s) => s.stat.name === "speed"
  ).base_stat;
};

searchBtn.addEventListener("click", async () => {
  const inputValue = normalize(input.value);

  if (inputValue === "") {
    alert("Pokémon not found");
    return; // Sale de la función si el input está vacío
  }

  const url = `${API}${inputValue.toLowerCase()}`;
  const data = await fetchData(url);

  if (data) {
    dataContainer.style.display = "block";
    fillData(data);
  } else {
    alert("Pokémon not found");
  }
});
