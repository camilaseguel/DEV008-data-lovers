import data from './data/pokemon/pokemon.js';
// estas funciones son de ejemplo


//ACÁ VAN TODAS LAS FUNCIONES PARA MANIPULAR DATOS

//Función que toma la información de la data.
export function getData() {
  return data.pokemon
}

//constante resultado, que hace referencia a mi función de tomar información de data.
const result = getData();
console.log(result);

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

//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name == generationPokemon);
}
const getPokemonGenerationI = filterGeneration(result, "kanto");
const getPokemonGenerationII = filterGeneration(result, "johto");


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

//Función que ordena la data alfabéticamente a-z (nombre)
export function orderNameAscending(result) {
  result.sort((a, b) => {
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
console.log(orderNameAscending(result));

export function orderNameDescending(copyresultDos) {
  copyresultDos.sort((a, b) => {
    if (a.name > b.name) { //a menor que b
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return copyresultDos;
}
console.log(orderNameDescending(copyresultDos));


const orderNumberAscending = copyresult.sort((a, b) => {
  return a.num - b.num
});
console.log(orderNumberAscending)

const orderNumbersDescending = copyResultOrder.sort((a, b) => {
  return b.num - a.num
});
console.log(orderNumbersDescending)

/*function dataZa(result){
  const dataDescending = result.reverse();
  return dataDescending;
}
console.log (dataZa(result));


/*let keysArrays =Object.values(result);
console.log(keysArrays)*/

/*const mappedResult = Object.keys(result).map(key =>{
  const value = result[key]
  console.log(value.generation)
})
*/

