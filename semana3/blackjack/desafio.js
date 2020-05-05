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
let computerCardShow = [];
let isPlaying = false;
let roundStarterX = true;
let roundStarterY = false;
let roundX = false;
let roundY = false;
let roundZ = false;
let buyAgain = false;
let start = true;
let playAgain = false;


// NOVA RODADA 
if (!newRound) {
   console.log("O jogo acabou.");
   isPlaying = false;
   start = false;
} else {
   while (start) {
      console.log("Vamos começar!");
      isPlaying = true;
      roundStarterX = true;

      // COMEÇO DO JOGO
      while (isPlaying) {
         while (roundZ) {                        //COMPRA DE CARTAS
            alert(`Suas cartas são ${playerCards}. Sua pontuação é ${playerScore}.\nA carta revelada do computador é ${computerCardShow}.`);
            buyAgain = confirm("Deseja comprar outra carta?");
            if (buyAgain) {
               roundX = true;
               roundZ = false;
            } else if (buyAgain == false && playerScore <= 21) {
               roundY = true;
               roundZ = false;
            }
         }

         // ROUND INICIAL (usuário)
         while (roundStarterX) {
            carta = comprarCarta();
            playerCards.push(carta.texto);
            playerScore += carta.valor;

            carta = comprarCarta();
            playerCards.push(carta.texto);
            playerScore += carta.valor;

            roundStarterY = true;
            roundStarterX = false;
         }

         // ROUND INICIAL (computador)
         while (roundStarterY) {
            carta = comprarCarta();
            computerCardShow.push(carta.texto);
            computerScore += carta.valor;

            carta = comprarCarta();
            computerCards.push(carta.texto);
            computerScore += carta.valor;

            roundStarterY = false;
            roundZ = true;
         }

         while (roundX) {
            carta = comprarCarta();
            playerCards.push(carta.texto);
            playerScore += carta.valor;

            roundX = false;
            roundZ = true;
         }

         while (roundY) {
            carta = comprarCarta();
            computerCards.push(carta.texto);
            computerScore += carta.valor;

            roundZ = true;
            roundY = false;
         }

         // CHECK DE VITÓRIA/DERROTA/EMPATE
         if (playerScore >= 21) {
            alert(`O computador ganhou! Mais sorte na próxima vez.\n Sua pontuação foi ${playerScore}.\nAs cartas do computador eram ${computerCardShow}, ${computerCards}. E a pontuação do computador foi ${computerScore}.`)
            isPlaying = false;
            start = false;
         } else if (computerScore >= 21) {
            alert(`O usuário ganhou! Parabéns!\n Sua pontuação foi ${playerScore}.\nAs cartas do computador eram ${computerCardShow}, ${computerCards}. E a pontuação do computador foi ${computerScore}.`)
            isPlaying = false;
            start = false;
         } else if (playerScore === computerScore && playerScore && computerScore >= 19) {
            alert(`É um empate! Mais sorte na próxima vez.\n Sua pontuação foi ${playerScore}.\nAs cartas do computador eram ${computerCardShow}, ${computerCards}. E a pontuação do computador foi ${computerScore}.`)
            isPlaying = false;
            start = false;
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
}



