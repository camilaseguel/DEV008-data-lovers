//import { data } from './pokemon.js';

<<<<<<< HEAD
import { getData, orderByNumber, orderByNumberDes, orderNameAscending, orderNameDescending } from './data.js';
import { filterType } from './data.js';
import { filterGeneration } from './data.js';

const pokemons = getData();
const sortDataName = [...pokemons]
const sortDataNum = [...pokemons]
const deleteFilter = [...pokemons]
const result = [...pokemons]

//ACÁ VAN TODAS LAS INTERACCIONES CON EL DOM

//Función list Pokemmon, me ayuda a mostrar en mi div vacío, las características que quiero mostrar en las tarjetas de cada pokemon.
function listPokemon(pokemons) {
  for (let i = 0; i < pokemons.length; i++) { //el bucle For, va iterando por la data, rescatando nombre, numero, breve descripción e imagen.
    const container = document.createElement("div")  //genero una etiqueta div, que será el "padre" y contenedor de mis etiquetas (img,h2,h3 y p)
    container.id = pokemons[i].name;
    container.classList.add("card")

    const frontCard = document.createElement("div")
    frontCard.classList.add("face")
    frontCard.classList.add("front")

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
const filterForType = document.getElementById("filterType");
filterForType.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = " ";
  if (filterForType.value === "all") {
    listPokemon((pokemons));
  } else {
    listPokemon(filterType(result, filterForType.value));
  }
});

// funcion filtrar por generaciòn

const filterForGeneration = document.getElementById("filterGeneration");
filterForGeneration.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = " ";
  if (filterForGeneration.value === "all") {
    listPokemon((pokemons));
  } else {
    listPokemon(filterGeneration(result, filterForGeneration.value));
  }
});

// funcion para ordenar por nombre
const orderbyName = document.getElementById("orderName");
orderbyName.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = " ";
  if (orderbyName.value === "az") {
    listPokemon(orderNameAscending(sortDataName));
  } else {
    listPokemon(orderNameDescending(sortDataName));
  }
});

// funcion para ordenar por numero
const orderbyNum = document.getElementById("orderNumber");
orderbyNum.addEventListener("change", () => {
  document.getElementById("container_cards").innerHTML = " ";
  if (orderbyNum.value === "0") {
    listPokemon((sortDataNum));
    (orderByNumber(sortDataNum));
  } else {
    listPokemon(orderByNumberDes(sortDataNum));
  }
});

// funcion para limpiar botones 
const bttnclean = document.getElementById("cleanbttn");
bttnclean.addEventListener("click", () => {
  document.getElementById("container_cards").innerHTML = "";
  if (filterForType !== "all" || filterForGeneration !== "all" || orderbyName !== "all"|| orderbyName !== "all") {
    listPokemon((deleteFilter));
  }
});

// funcion para boton de buscar
=======
import { getData } from './data.js';
import data from './data/pokemon/pokemon.js';
import { searchPokemon } from './data.js';
import { filterType } from './data.js';
import { filterGeneration } from './data.js';
import { sortData } from './data.js';

/*import { sortData } from './data.js';*/
//ACÁ VAN TODAS LAS INTERACCIONES CON EL DOM

//const usersPokemon = document.getElementById("search_pokemon").addEventListener("click",(searchPokemon));

//Función list Pokemmon, me ayuda a mostrar en mi div vacío, las características que quiero mostrar en las tarjetas de cada pokemon.
function listPokemon(pokemons) {
  for (let i = 0; i < pokemons.length; i++) { //el bucle For, va iterando por la data, rescatando nombre, numero, breve descripción e imagen.
    const div = document.createElement("div")  //genero una etiqueta div, que será el "padre" y contenedor de mis etiquetas (img,h2,h3 y p)
    div.id =pokemons[i].name;
    div.onclick = function () {
      // this.parentElement.removeChild(this);
      viewModal(div.id)
    };
    div.classList.add("card");
    // div.classList.add("container_card");
    const imgPokemon = document.createElement("img"); 
    imgPokemon.src = pokemons[i].img;
    div.appendChild(imgPokemon);

    const unpokemon = document.createElement("h2");
    unpokemon.textContent = pokemons[i].name;
    div.appendChild(unpokemon);
   
    const numPokemon = document.createElement("h3");
    numPokemon.textContent = pokemons[i].num;
    div.appendChild(numPokemon);

    /*const typePokemon = document.createElement("p");
    typePokemon.textContent = pokemons[i].type;
    div.appendChild(typePokemon);*/
    
    const aboutPokemon = document.createElement("p");
    aboutPokemon.textContent = pokemons[i].about;
    div.appendChild(aboutPokemon);

    document.getElementById("container_cards").appendChild(div);// le digo que vaya al documento y tome el ID "container cards" e inserte mi "div" creado en js.
    

  }
}
const pokemons = getData();
listPokemon(pokemons);


function viewModal(id){
  // Get the modals
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById(id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
//ligo funciones con botones
document.getElementById("filterType").addEventListener("click",(filterType));
>>>>>>> main
