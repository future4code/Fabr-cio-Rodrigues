/* EXERCÍCIO 1
     O programa inicializa fazendo um prompt para que o usuário digite um número e esse número seja guardado na variável constante: respostaDoUsuario.
     Depois, a variável sofre casting de string para number, e uma condicional é declarada. Se o número for divisível por 2, a mensagem que aparece
     no console é "Passou no teste."
     Caso contrário, se o número não for divisível por 2, a mensagem que aparece no console é "Não passou no teste."
*/

/* EXERCÍCIO 2 
    A. O código pede ao usuário para digitar uma fruta, e dentro de um switch case, há 4 opções + 1 default. Cada opção terá um valor, que será 
    printado na tela.

    B. "O preço da fruta  Maçã  é  R$  2.25".

    C. Eu pagaria R$24.55, uma vez que "banana" não é especificado no switch case, logo recebe o preço default de R$5.00.

    D. Retirando o break, o preço declarado na case "Pêra" é ignorado e o programa lê o default, no caso, R$5.00.

*/

/* EXERCÍCIO 3
    Não importando os números digitados, o console.log tentará chamar a variável mensagem, porém ela não existe no escopo global, e sim 
    no escopo privado da condicional if. Para resolver este problema, teríamos que criar a variável 'mensagem' no escopo global antes de ser chamada.
*/

/* EXERCÍCIO 4 */

/* A
let x = Number(prompt("Digite o primeiro número:"));
let y = Number(prompt("Digite o segundo número:"));

if (x > y) {
    console.log(x, y);
} else {
    console.log(y, x);
}
// Se os números forem iguais, ele printa primeiro o else.
*/

/* B
let x = Number(prompt("Digite o primeiro número:"));
let y = Number(prompt("Digite o segundo número:"));
let z = Number(prompt("Digite o terceiro número:"));


if (x > y && x > z) {        //tratamento X
    console.log(x, y, z)
} else if (x > z && z > y) { 
    console.log(x, z, y);
} else if (y > z && z > x) { // tratamento Y
    console.log(y, z, x);
} else if (y > x && x > z) {
    console.log(y, x, z);
} else if (z > x && x > y) { // tratamento Z
    console.log(z, x, y);
} else if (z > y && y > x) {
    console.log(z, y, x);
} else {
    console.log("ELSE");
}

// Se os números forem iguais, ele printará  o else.
*/

/* C 

let x = Number(prompt("Digite o primeiro número:"));
let y = Number(prompt("Digite o segundo número:"));
let z = Number(prompt("Digite o terceiro número:"));


if (x > y && x > z) {           //tratamento X
    console.log(x, y, z)
} else if (x > z && z > y) {
    console.log(x, z, y);
} else if (y > z && z > x) {    // tratamento Y
    console.log(y, z, x);
} else if (y > x && x > z) {
    console.log(y, x, z);
} else if (z > x && x > y) {    // tratamento Z
    console.log(z, x, y);
} else if (z > y && y > x) {
    console.log(z, y, x);
} else if (x === z && x === y){ // tratamento de repetições
    console.log("Por favor, digite pelo menos um número diferente.");
} else if (x === z && x > y) { 
    console.log (x, z, y);
} else if (x === y && x > z) {
    console.log (x, y, z);
} else if (y === z && y > x) {
    console.log (y, z, x);
}

*/

/* EXERCÍCIO 5 */

// perguntas
let hasBones = prompt("Tem ossos?");
let hasHair = prompt("Tem pelos?");
let isRational = prompt("É racional?"); 
let hasFeather = prompt("Tem penas?");
let isLandAnimal = prompt("É terrestre?");
let livesUnderwater = prompt("Passa parte da vida em água?");

if (hasBones === "não") {
    console.log("Invertebrado.");
} else if (hasBones === "sim" && hasHair === "sim" && isRational === "sim") {
    console.log("Ser-humano.");
} else if (hasBones === "sim" && hasHair === "sim" && isRational === "não") {
    console.log("Mamífero não-humano");
} else if (hasBones === "sim" && hasHair === "não" && hasFeather === "sim") {
    console.log("Ave.");
} else if (hasBones === "sim" && hasHair === "não" && hasFeather === "não" && isLandAnimal === "não") {
    console.log("Peixe.");
} else if (hasBones === "sim" && hasHair === "não" && hasFeather === "não" && isLandAnimal === "sim" && livesUnderwater === "sim") {
    console.log("Anfíbio.");
} else if (hasBones === "sim" && hasHair === "não" && hasFeather === "não" && isLandAnimal === "sim" && livesUnderwater === "não") {
    console.log("Réptil");
}