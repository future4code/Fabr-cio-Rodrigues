type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// A: configuraria o tsconfig.json para ter um outDir com a pasta build (nome arbitrário), daria um tsc nomedoarquivo.ts na pasta fonte e assim a transpilação ocorreria.
// B: se o arquivo está na pasta src e o tsconfig tem um include apontando para mesma, dando um tsc bastaria para a transpilação da pasta inteira ocorrer.
// C: o comando tsc aceita múltiplos parâmetros. ex: tsc exercicio1.ts exercicio2.ts exercicio3.ts

//Executei o comando tsc --init para criar um arquivo tsconfig.json

// D: há muito mais opções para configurar, todas comentadas já prontas para serem "descomentadas" e customizadas.
