"use strict";
// A
// let minhaString: string = 6;
// O VSCode diz que o elemento de tipo número não pode ser assinalado na variável que espera uma string.
// B
// let meuNumero: number = 6;
// para que também aceite strings:
var meuNumero = 6;
var CoresFavoritasPossiveis;
(function (CoresFavoritasPossiveis) {
    CoresFavoritasPossiveis["VIOLETA"] = "Violeta";
    CoresFavoritasPossiveis["ANIL"] = "Anil";
    CoresFavoritasPossiveis["AZUL"] = "Azul";
    CoresFavoritasPossiveis["VERDE"] = "Verde";
    CoresFavoritasPossiveis["AMARELO"] = "Amarelo";
    CoresFavoritasPossiveis["LARANJA"] = "Laranja";
    CoresFavoritasPossiveis["VERMELHO"] = "Vermelho";
})(CoresFavoritasPossiveis || (CoresFavoritasPossiveis = {}));
var fabricio = {
    nome: "Fabrício",
    idade: 20,
    corFavorita: CoresFavoritasPossiveis.AZUL,
};
var joana = {
    nome: "Joana",
    idade: 23,
    corFavorita: CoresFavoritasPossiveis.VERDE,
};
var lucas = {
    nome: "Lucas",
    idade: 22,
    corFavorita: CoresFavoritasPossiveis.AMARELO,
};
console.log(fabricio);
