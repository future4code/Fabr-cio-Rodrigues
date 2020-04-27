/* 1. CALCULADORA DE TEMPERATURA (COM VALORES FIXOS) */

// A 
let grausFahrenheitA = 77;
const conversaoFahrenheitParaKelvin = (grausFahrenheitA - 32) * 5/9 + 273.15;

console.log("Resposta A: " + grausFahrenheitA + "°F é igual a " + conversaoFahrenheitParaKelvin + "°K.")

// B
let grausCelsiusB = 80;
const conversaoCelsiusParaFahrenheitB = (grausCelsiusB * 9 / 5) + 32;

console.log("Resposta B: " + grausCelsiusB + "°C é igual a " + conversaoCelsiusParaFahrenheitB + "°F.")

// C
let grausCelsiusC = 30;
const conversaoCelsiusParaFahrenheitC = (grausCelsiusC * 9/5) + 32 ;
const conversaoCelsiusParaKelvinC = (grausCelsiusC) + 273.15;

console.log("Resposta C: " + grausCelsiusC + "°C é igual a " + conversaoCelsiusParaFahrenheitC + "°F. e " + conversaoCelsiusParaKelvinC + "°K.")

// D
let grausCelsiusD = prompt("Digite um valor em graus Celsius:");
const conversaoCelsiusParaFahrenheitD = Number(grausCelsiusD * 9 / 5) + 32;
const conversaoCelsiusParaKelvinD = Number(grausCelsiusD) + 273.15;

console.log("Resposta C: " + grausCelsiusD + "°C é igual a " + conversaoCelsiusParaFahrenheitD + "°F. e " + conversaoCelsiusParaKelvinD + "°K.")

/* Optei por não usar Slice e nem Math apesar de serem bons para arredondar o número, pelo fato de que ainda não foram ensinados em aula. */
