/*EXERCÍCIO 1 (INTERPRETAÇÃO) 
O código começa com a variável sum em 0, depois no laço for, a variável i é criada, e no laço as condições são: Enquanto i for menor do que 15
i será incrementada e sum será somada a i, de forma que quando i for 1, sum receberá 1. Quando i for 2, sum receberá 2, totalizando 3.
O código se repete dessa forma até que i chega ao requerimento (ser igual ou maior que 15) e o código encerra, com sum tendo 105.

O código imprime o valor final de sum no console. No caso, 105.
*/

/* EXERCÍCIO 2 (INTERPRETAÇÃO) 
    A. o comando .push insere um novo valor no array 'novaLista' a cada item divisível por 5 do laço for of. O incremento
    ocorre de 2 em 2 a cada repetição.
    B. [10, 15, 25, 30]. Números divisíveis por 5 adicionados ao array 'novaLista'.
    C. [12, 15, 18, 21, 27, 30] e [12]

    DESAFIO 1: 
                0
                00
                000
                0000

*/

/* EXERCÍCIO 3 (ESCRITA DE CÓDIGO) 

// A

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let maxNumeroAtual = arrayOriginal[0];
let minNumeroAtual = arrayOriginal[0];

for (let numero of arrayOriginal) {
    if (numero > maxNumeroAtual) {
        maxNumeroAtual = numero;
    }
    if (numero < minNumeroAtual) {
        minNumeroAtual = numero;
    }
}

console.log(`O maior número é ${maxNumeroAtual} e o menor número é ${minNumeroAtual}.`)

// B

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];
const numero = 10;

for (let item of arrayOriginal) {
    item = (item / numero);
        novoArray.push(item);
}

console.log(novoArray)

// C
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];
const numero = 2;

for (let item of arrayOriginal) {
    if (item % numero == 0) {
        novoArray.push(item);
    }
}

console.log(novoArray)

// D

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
const novoArray = [];
let i = 0;

for (let valor of arrayOriginal) {
    console.log(`O elemento do índex ${i} é ${valor}`);
    i++;
}

*/

/* DESAFIO 2 

let numeroSelecionado = prompt("Selecione um número.");
let jogadorNaoAcertou = true;
let tentativas = 0;

console.log("Vamos jogar!");

while (jogadorNaoAcertou) {
    let palpiteJogador = prompt("Digite um número.");
    tentativas++;


    console.log(`O número chutado foi: ${palpiteJogador}.`)

    if (palpiteJogador > numeroSelecionado) {
        console.log("Errou, o número escolhido é menor!")
    } else if (palpiteJogador < numeroSelecionado) {
        console.log("Errou, o número escolhido é maior!")
    }

    if (palpiteJogador !== numeroSelecionado) {
        jogadorNaoAcertou = true;
    } else if (palpiteJogador === numeroSelecionado) {
        jogadorNaoAcertou = false;
        console.log("Parabéns, você acertou!!!")
        console.log(`Número de tentativas: ${tentativas}`)
    }
}

*/

/* DESAFIO 3 

let numeroSelecionado = Math.floor((Math.random() * 100) + 1);
let jogadorNaoAcertou = true;
let tentativas = 0;

console.log("Vamos jogar!");

while (jogadorNaoAcertou) {
    let palpiteJogador = prompt("Digite um número de 0 a 100.");
    palpiteJogador = Number(palpiteJogador);
    tentativas++;

    console.log(`O número chutado foi: ${palpiteJogador}.`)

    if (palpiteJogador > numeroSelecionado) {
        console.log("Errou, o número escolhido é menor!")
    } else if (palpiteJogador < numeroSelecionado) {
        console.log("Errou, o número escolhido é maior!")
    }

    if (palpiteJogador !== numeroSelecionado) {
        jogadorNaoAcertou = true;
    } else if (palpiteJogador === numeroSelecionado) {
        jogadorNaoAcertou = false;
        console.log("Parabéns, você acertou!!!")
        console.log(`Número de tentativas: ${tentativas}`)
    }
}

REFLEXÃO: Já usei o Math para fazer números randômicos no JS antes, então para mim foi fácil, uma vez que eu já conhecia o método.
Com certeza teria sido muito mais difícil se eu nunca tivesse usado o método e se não houvesse as referências do desafio. Tendo ao menos um
destes atributos citados, acredito que seria relativamente fácil implementar o método e deixaria aberta a brecha para mais estudos sobre este (e outros métodos).


*/








