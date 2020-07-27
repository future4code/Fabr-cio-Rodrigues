// A
// let minhaString: string = 6;
// O VSCode diz que o elemento de tipo número não pode ser assinalado na variável que espera uma string.

// B
// let meuNumero: number = 6;
// para que também aceite strings:
let meuNumero: number | string = 6;

enum CoresFavoritasPossiveis {
  VIOLETA = "Violeta",
  ANIL = "Anil",
  AZUL = "Azul",
  VERDE = "Verde",
  AMARELO = "Amarelo",
  LARANJA = "Laranja",
  VERMELHO = "Vermelho",
}

// C
type person = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const fabricio: person = {
  nome: "Fabrício",
  idade: 20,
  corFavorita: CoresFavoritasPossiveis.AZUL,
};

const joana: person = {
  nome: "Joana",
  idade: 23,
  corFavorita: CoresFavoritasPossiveis.VERDE,
};

const lucas: person = {
  nome: "Lucas",
  idade: 22,
  corFavorita: CoresFavoritasPossiveis.AMARELO,
};

console.log(fabricio);
