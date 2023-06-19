import { filterType, filterGeneration, orderNameAscending, orderNameDescending, orderNumberAscending, orderNumberDescending } from '../src/data.js';

describe('deberia devolver un pokemon de tipo electrico', () => {
  it("pokemmon electrico", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        type: "electric",
        generation: "kanto",
        number: 25,
      },
      {
        name: "nidoran",
        type: "poison",
        generation: "kanto",
        number: 29,
      },
      {
        name: "togepy",
        type: "fairy",
        generation: "johto",
        number: 175,
      },
    ]

    const typePokemon = "electric";

    expect(filterType(listaPokemon, typePokemon)).toEqual([{
      name: "pikachu",
      type: "electric",
      generation: "kanto",
      number: 25,
    }
    ])
  })
});

//filtrar pokemon por generacion
describe('deberia devolver un pokemon por generacion', () => {
  it("generation kanto", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        num: 25,
        type: "electric",
        generation: {
          "num": "generation i",
          "name": "johto"
        }
      },
      {
        name: "nidoran",
        num: 29,
        type: "poison",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "togepy",
        num: 175,
        type: "fairy",
        generation: {
          "num": "generation i",
          "name": "johto"
        }
      }
    ]

    const generationPokemon = "kanto";

    expect(filterGeneration(listaPokemon, generationPokemon)).toStrictEqual([{
      name: "nidoran",
      num: 29,
      type: "poison",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    }
    ])
  })
});

//prueba para ordenar por nombre ascendente
describe('deberia ordenar nombres ascendente', () => {
  it("orden nombre ascendente", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        num: 25,
        type: "electric",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "nidoran",
        num: 29,
        type: "poison",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "togepy",
        num: 175,
        type: "fairy",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      }
    ]

    const nameAscending = ((a, b) => { return a < b });

    expect(orderNameAscending(listaPokemon, nameAscending)).toEqual([{

      name: "nidoran",
      num: 29,
      type: "poison",
      generation: {
        "num": "generation i",
        "name": "kanto"
      },
    },
    {
      name: "pikachu",
      num: 25,
      type: "electric",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "togepy",
      num: 175,
      type: "fairy",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    }
    ])
  })
});

//prueba para ordenar por nombre descendente
describe('deberia ordenar nombres descendente', () => {
  it("orden nombres descendente", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        num: 25,
        type: "electric",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "nidoran",
        num: 29,
        type: "poison",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "togepy",
        num: 175,
        type: "fairy",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      }
    ]

    const nameDescending = ((a, b) => { return b < a });

    expect(orderNameDescending(listaPokemon, nameDescending)).toEqual([{

      name: "togepy",
      num: 175,
      type: "fairy",
      generation: {
        "num": "generation i",
        "name": "kanto"
      },
    },
    {
      name: "pikachu",
      num: 25,
      type: "electric",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "nidoran",
      num: 29,
      type: "poison",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    }
    ])
  })
});

//ordenar numeros de forma ascendente
describe('deberia ordenar número ascendente', () => {
  it("orden numero ascendente", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        num: 25,
        type: "electric",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "nidoran",
        num: 29,
        type: "poison",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "togepy",
        num: 175,
        type: "fairy",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      }
    ]

    const numAscendente = ((a, b) => { return (a - b) });

    expect(orderNumberAscending(listaPokemon, numAscendente)).toEqual([{

      name: "pikachu",
      num: 25,
      type: "electric",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "nidoran",
      num: 29,
      type: "poison",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "togepy",
      num: 175,
      type: "fairy",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    }
    ])
  })
});

//ordenar numeros de forma descendente
describe('deberia ordenar número descendente', () => {
  it("orden numero descendente", () => {

    const listaPokemon = [
      {
        name: "pikachu",
        num: 25,
        type: "electric",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "nidoran",
        num: 29,
        type: "poison",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      },
      {
        name: "togepy",
        num: 175,
        type: "fairy",
        generation: {
          "num": "generation i",
          "name": "kanto"
        }
      }
    ]

    const numDescendente = ((a, b) => { return (b - a) });

    expect(orderNumberDescending(listaPokemon, numDescendente)).toEqual([{

      name: "togepy",
      num: 175,
      type: "fairy",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "nidoran",
      num: 29,
      type: "poison",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    },
    {
      name: "pikachu",
      num: 25,
      type: "electric",
      generation: {
        "num": "generation i",
        "name": "kanto"
      }
    }
    ])
  })
});

