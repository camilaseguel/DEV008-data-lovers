//import { data } from './pokemon.js';

import { getData } from './data.js';
/*import data from './data/pokemon/pokemon.js';*/
import { filterType } from './data.js';
import { filterGeneration } from './data.js';
import { orderNameAscending } from './data.js';
import { orderNameDescending } from './data.js';
import { orderNumberAscending } from './data.js';
import { orderNumberDescending } from './data.js';


//ACÁ VAN TODAS LAS INTERACCIONES CON EL DOM
const pokemons = getData();
const sortDataName = [...pokemons];
const copyresult = [...pokemons]



//Función list Pokemmon, me ayuda a mostrar en mi div vacío, las características que quiero mostrar en las tarjetas de cada pokemon.
function listPokemon(pokemons) {
  for (let i = 0; i < pokemons.length; i++) { //el bucle For, va iterando por la data, rescatando nombre, numero, breve descripción e imagen.

    const container = document.createElement("div")  //genero una etiqueta div, que será el "padre" y contenedor de mis etiquetas (img,h2,h3 y p)
    container.id = pokemons[i].name;
    container.classList.add("card");
    const frontCard = document.createElement("div")
    frontCard.classList.add("face")
    frontCard.classList.add("front")
    // div.classList.add("container_card");  
    const imgPokemon = document.createElement("img"); //imagen
    imgPokemon.src = pokemons[i].img;
    frontCard.appendChild(imgPokemon);

    const unpokemon = document.createElement("h2"); //nombre de pokemon
    unpokemon.textContent = pokemons[i].name;
    frontCard.appendChild(unpokemon);

    const numPokemon = document.createElement("h2"); //numero de pokemon
    numPokemon.textContent = pokemons[i].num;
    frontCard.appendChild(numPokemon);

    const typePokemon = document.createElement("h3");  //tipo
    typePokemon.textContent = pokemons[i].type.toString();
    frontCard.appendChild(typePokemon);

    container.appendChild(frontCard);

    const backCard = document.createElement("div")
    backCard.classList.add("face");
    backCard.classList.add("back");

    const generationPokemon = document.createElement("h3");  //tipo
    generationPokemon.textContent = pokemons[i].generation.name.toString();
    backCard.appendChild(generationPokemon);

    const aboutPokemon = document.createElement("p"); //Reseña
    aboutPokemon.textContent = pokemons[i].about;
    backCard.appendChild(aboutPokemon);

    container.appendChild(backCard);// le digo que vaya al documento y tome el ID "container cards" e inserte mi "div" creado en js.
    document.getElementById("container_cards").appendChild(container);
  }
}

listPokemon(pokemons);

//ligo funciones con botones

//botones de filtrado por tipo
const result = getData();
const filterForType = document.getElementById("filterType");
filterForType.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (filterForType.value === "all") {
    listPokemon((pokemons));
  } else {
    listPokemon(filterType(result, filterForType.value));
  }
});

//filtrado por generación
const filterForGeneration = document.getElementById("filterGeneration");
filterForGeneration.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (filterForGeneration.value === "all") {
    listPokemon((pokemons));
  } else {
    listPokemon(filterGeneration(result, filterForGeneration.value));
  }
});

//Ordenar de A-Z y Z-A
const orderNamePokemon = document.getElementById("order__az");
orderNamePokemon.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (orderNamePokemon.value === "az") {
    listPokemon(orderNameAscending(sortDataName));
  } else {
    listPokemon(orderNameDescending(sortDataName));
  }
});

//Ordenar de 1-251 y 251-1
const orderNumPokemon = document.getElementById("order__num");
orderNumPokemon.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (orderNumPokemon.value === "0") {
    listPokemon(orderNumberAscending(copyresult));
  } else {
    listPokemon(orderNumberDescending(copyresult));
  }
});

//boton vuelve todo a 0
const bttnclean = document.getElementById("cleanbttn");
bttnclean.addEventListener("click", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (filterForType !== "all" || filterForGeneration !== "all" || orderNamePokemon !== "all" || orderNumPokemon !== "all") {
    listPokemon((pokemons));
  }
});

