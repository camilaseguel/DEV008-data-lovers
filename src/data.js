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

//Función que filtra la data por tipo de pokemon
export function filterType(result, typePokemon) {
  return result.filter(item => item.type.includes(typePokemon));
}
<<<<<<< HEAD

//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name === generationPokemon);
}
const getPokemonGenerationI = filterGeneration(result, "kanto");
const getPokemonGenerationII = filterGeneration(result, "johto");


export function orderNameAscending(sortDataName,) {
  sortDataName.sort((a, b) => {
=======
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

/*
console.log(getPokemonTypeFire);
console.log(getPokemonTypeGrass);
console.log(getPokemonTypePoison);
console.log(getPokemonTypeWater);
console.log(getPokemonTypeElectric);
console.log(getPokemonTypeFighting);
console.log(getPokemonTypeFairy);
console.log(getPokemonTypePsychic);
console.log(getPokemonTypeIce);
console.log(getPokemonTypeRock);
console.log(getPokemonTypeFlying);
console.log(getPokemonTypeGround);
*/
//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name==generationPokemon);
}
const getPokemonGenerationI = filterGeneration(result,"kanto");
const getPokemonGenerationII = filterGeneration(result,"johto");

console.log(getPokemonGenerationI);
console.log(getPokemonGenerationII);

//con bucle For, logro iterar buscando los nombres de cada pokemon

export function searchPokemon(result) {
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

//Función que ordena la data alfabéticamente (nombre)
export function sortData(result) {
  result.sort((a,b) => {
>>>>>>> main
    if (a.name < b.name) { //a menor que b
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
<<<<<<< HEAD
  return sortDataName;
} 

export function orderNameDescending(sortDataName) {
  sortDataName.sort((a, b) => {
    if (a.name > b.name) { //a menor que b
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return sortDataName;
}
 
//ordenar por numero
export function orderByNumber(orderDataNum) {
  orderDataNum.sort((a, b) => {
    if (Number(a.num) - Number(b.num)) { //a menor que b
      return 1;
    }
    if (Number(a.num) - Number(b.num)) {
      return -1;
    }
    return 0;
  });
  return orderDataNum;
}
export function orderByNumberDes(orderDataNum) {
  orderDataNum.sort((a, b) => {
    if (Number(a.num) - Number(b.num)) { //a menor que b
      return -1;
    }
    if (Number(a.num) - Number(b.num)) {
      return 1;
    }
    return 0;
  });
  return orderDataNum;
}
=======
  return result;
}
// console.log(sortData(result));

/*export function sortDataZa(result) {
  result.sort((b,a) => {
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

console.log(result.sort((a,b) => a.name.localeCompare(b.name)));
console.log(result.sort((a,b) => b.name.localeCompare(a.name)));

function dataZa(result){
  const dataDescending = result.reverse();
  return dataDescending;
}
console.log (dataZa(result));

*/
/*let keysArrays =Object.values(result);
console.log(keysArrays)*/

/*const mappedResult = Object.keys(result).map(key =>{
  const value = result[key]
  console.log(value.generation)
})
*/

>>>>>>> main
