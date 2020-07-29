// A. Usamos o process.argv para ler argumentos/parâmetros digitados na linha de comando

let myArgs = process.argv.slice(1);

let firstWord = myArgs[1];
let secondWord = Number(myArgs[2]);
let newAge = secondWord + 7;

console.log(
  `Olá, ${firstWord}! Você tem ${secondWord} anos. Em sete anos você terá ${newAge} anos de idade.`
);
