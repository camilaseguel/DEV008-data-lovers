import data from './data/pokemon/pokemon.js';
// estas funciones son de ejemplo


//ACÁ VAN TODAS LAS FUNCIONES PARA MANIPULAR DATOS


export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//Función que toma la información de la data.
export function getData() {
  return data.pokemon
}
//constante resultado, que hace referencia a mi función de tomar información de data.
const result = getData();
console.log(result);

//Función que filtra la data por tipo de pokemon
function filterType(result, typePokemon) {
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

//con bucle For, logro iterar buscando los nombres de cada pokemon
for (let i = 0; i < result.length; i++) {
  console.log(result[i].name);
  console.log(result[i].num);
  console.log(result[i].about);
  console.log(result[i].img);
}

//const namePokemon = result.filter(item => item.type.includes("name"));
//const numPokemon = result.filter(item => item.type.includes ("num"));


/*for (var i = 0; i < data.lenght; i++){
  console.log(pokemon);
}
*/