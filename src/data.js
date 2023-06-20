import data from './data/pokemon/pokemon.js';

//ACÁ VAN TODAS LAS FUNCIONES PARA MANIPULAR DATOS

//Función que toma la información de la data.
export function getData() {
  return data.pokemon
}


//constante resultado, que hace referencia a mi función de tomar información de data.
const result = getData();
const sortDataName = [...result];
const orderDataNum = [...result];

const copyresultDos = [...result];
console.log(copyresultDos)

const copyresult = [...result];
console.log(copyresult)

const copyResultOrder = [...result];
console.log(copyResultOrder)


//Función que filtra la data por tipo de pokemon
export function filterType(result, typePokemon) {
  return result.filter(item => item.type.includes(typePokemon));
}


//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name === generationPokemon);
}
const getPokemonGenerationI = filterGeneration(result, "kanto");
const getPokemonGenerationII = filterGeneration(result, "johto");


export function orderNameAscending(sortDataName,) {
  sortDataName.sort((a, b) => {
const getPokemonTypeFire = filterType(result, "fire");
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


//con bucle For, logro iterar buscando los nombres de cada pokemon
function searchPokemon(result) {
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

//Función que ordena la data alfabéticamente a-z (nombre)
function orderNameAscending(result) {
  result.sort((a, b) => {
//Función que ordena la data alfabéticamente (nombre)
function sortData(result) {
  result.sort((a,b) => 
    if (a.name < b.name) { //a menor que b
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return result;
}
// console.log(sortData(result));

export function orderNameDescending(copyresultDos) {
  copyresultDos.sort((a, b) => {
    if (a.name > b.name) { //a menor que b
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return orderDataNum;
}
  return result;
}

const orderNumbersDescending = copyResultOrder.sort((a, b) => {
  return b.num - a.num
});
console.log(orderNumbersDescending)

