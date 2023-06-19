import data from './data/pokemon/pokemon.js';
// estas funciones son de ejemplo


//ACÁ VAN TODAS LAS FUNCIONES PARA MANIPULAR DATOS

//Función que toma la información de la data.
export function getData() {
  return data.pokemon
}

//constante resultado, que hace referencia a mi función de tomar información de data.
const result = getData();
//console.log(result);

/*const copyresultDos = [...result];
console.log(copyresultDos)*/

/*const copyResultOrder = [...result];
console.log(copyResultOrder)*/




//Función que filtra la data por tipo de pokemon
export function filterType(result, typePokemon) {
  return result.filter(item => item.type.includes(typePokemon));
}
/*const getPokemonTypeFire = filterType(result, "fire");
const getPokemonTypeGrass = filterType(result, "grass");
const getPokemonTypePoison = filterType(result, "poison");
const getPokemonTypeWater = filterType(result, "water");
const getPokemonTypeElectric = filterType(result, "electric");
const getPokemonTypeFighting = filterType(result, "fighting");
const getPokemonTypeFairy = filterType(result, "fairy");
const getPokemonTypePsychic = filterType(result, "psychic");
const getPokemonTypeIce = filterType(result, "ice");
const getPokemonTypeRock = filterType(result, "rock");
const getPokemonTypeFlying = filterType(result, "flying");
const getPokemonTypeGround = filterType(result, "ground");
*/
//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name === generationPokemon);
}

/*const getPokemonGenerationI = filterGeneration(result, "kanto");
const getPokemonGenerationII = filterGeneration(result, "johto");
*/

//con bucle For, logro iterar buscando los nombres de cada pokemon

/*export function searchPokemon(result) {
  let namePokemon = [];
  const numPokemon = [];
  const aboutPokemon = [];
  const imgPokemon = [];

  for (let i = 0; i < result.length; i++) {
    namePokemon.push(result[i].name);
    numPokemon.push(result[i].num);
    aboutPokemon.push(result[i].about);
    imgPokemon.push(result[i].img);

  }
  console.log(namePokemon)
}
*/
//Función que ordena la data alfabéticamente a-z (nombre)
export function orderNameAscending(sortDataName) {
  sortDataName.sort((a, b) => {
    if (a.name < b.name) { //a menor que b
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortDataName;
}
//console.log(orderNameAscending(sortDataName));

export function orderNameDescending(sortDataName) {
  sortDataName.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return sortDataName;
}
//console.log(orderNameDescending(sortDataName));

export function orderNumberAscending(copyresult) {
  copyresult.sort((a, b) => {
    if (Number(a.num) - Number(b.num)) {
      return 1;
    }
    if (Number(b.num) - Number(a.num)) {
      return -1;
    }
    return 0;
  });
  return copyresult;
}
//console.log(orderNumberAscending(copyresult));

export function orderNumberDescending(copyresult) {
  copyresult.sort((a, b) => {
    if (a.num - b.num) {
      return -1;
    }
    if (b.num - a.num) {
      return 1;
    }
    return 0;
  });
  return copyresult;
}
//console.log(orderNumberDescending(copyresult));

