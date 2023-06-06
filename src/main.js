//import { data } from './pokemon.js';

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
