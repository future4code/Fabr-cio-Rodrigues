/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo ao jogo de Blackjack!");
let newRound = confirm("Quer iniciar uma nova rodada?");
let carta = comprarCarta();
let playerScore = 0;
let computerScore = 0;
let playerCards = [];
let computerCards = [];
let isPlaying = false;
let roundX = false;
let roundY = false;
let roundZ = false;
let buyAgain = false;
let start = true;
let playAgain = false;


// NOVA RODADA 
if (newRound == false) {
   console.log("O jogo acabou.");
   isPlaying = false;
   start = false;
} else {

   while (start) {
      console.log("Vamos começar!");
      isPlaying = true;
      roundX = true;

      // COMEÇO DO JOGO
      while (isPlaying) {

         while (roundZ) {                        //COMPRA DE CARTAS
            alert(`Suas cartas são ${playerCards}. Sua pontuação é ${playerScore}.\nAs cartas do computador são ${computerCards}. A pontuação do computador é ${computerScore}.`);
            buyAgain = confirm("Deseja comprar outra carta?");
            if (buyAgain == true) {
               roundX = true;
               roundY = false;
               roundZ = false;
            } else if (buyAgain == false) {
               roundX = false;
               roundY = true;
               roundZ = false;
            }
         }

         // ROUND DO USUÁRIO
         while (roundX) {
            carta = comprarCarta();
            playerCards.push(carta.texto);
            playerScore += carta.valor;
            roundX = false;
            roundY = true;
         }

         // ROUND DO COMPUTADOR
         while (roundY) {
            carta = comprarCarta();
            computerCards.push(carta.texto);
            computerScore += carta.valor;
            roundZ = true;
            roundY = false;
            roundX = false;
         }

         // CHECK DE VITÓRIA/DERROTA/EMPATE
         if (playerScore >= 21) {
            alert("O computador ganhou! Mais sorte na próxima vez.")
            isPlaying = false;
            start = false;

         } else if (computerScore >= 21) {
            alert("O usuário ganhou! Parabéns!")
            isPlaying = false;
            start = false;

         } else if (playerScore === computerScore && playerScore && computerScore >= 19) {
            alert("É um empate!")
            isPlaying = false;
            start = false;
         }
      }

      // NOVO JOGO
      if (isPlaying == false) {
         playAgain = confirm("Você que jogar de novo?");
         if (playAgain == true) {
            start = true;
         } else if (playAgain == false) {
            start = false;
         }
      }
   }
}