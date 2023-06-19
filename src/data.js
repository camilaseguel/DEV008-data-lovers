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

//Función que filtra la data por generación de pokemon
export function filterGeneration(result, generationPokemon) {
  return result.filter(item => item.generation.name === generationPokemon);
}
const getPokemonGenerationI = filterGeneration(result, "kanto");
const getPokemonGenerationII = filterGeneration(result, "johto");


export function orderNameAscending(sortDataName,) {
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