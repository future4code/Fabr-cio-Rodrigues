/* 1. CALCULADORA DE TEMPERATURA (COM VALORES DINÂMICOS) */

const grausCelsius = prompt("Digite a temperatura em Celsius:");
const grausFahrenheit = prompt("Digite a temperatura em Fahrenheit:");
const grausKelvin = prompt("Digite a temperatura em Kelvin:");

/* CONVERSÕES */

// C para F
const conversaoCelsiusParaFahrenheit = Number(grausCelsius) * 9 / 5 + 32; 
// C para K
const conversaoCelsiusParaKelvin = Number(grausCelsius) + 273.15;

// F para C
const conversaoFahrenheitParaCelsius = Number(grausFahrenheit - 32) * 5/9;

// F para K
const conversaoFahrenheitParaKelvin = Number(grausFahrenheit - 32) * 5 / 9 + 273.15;

// K para C
const conversaoKelvinParaCelsius = Number(grausKelvin) - 273.15;

// K para F
const conversaoKelvinParaFahrenheit = Number(grausKelvin - 273.15) * 9/5 + 32;

console.log("Celsius para Fahrenheit e Kelvin, respectivamente.")
console.log(grausCelsius + "°C é igual a " + conversaoCelsiusParaFahrenheit + "°F, e " + conversaoCelsiusParaKelvin + "°K")
console.log(" ")

console.log("Fahrenheit para Celsius e Kelvin, respectivamente.")
console.log(grausFahrenheit + "°F é igual a " + conversaoFahrenheitParaCelsius + "°C, e " + conversaoFahrenheitParaKelvin + "°K" )
console.log(" ")

console.log("Kelvin para Celsius e Fahrenheit, respectivamente.")
console.log(grausKelvin + "°K é igual a " +  conversaoKelvinParaCelsius + "°C, e " + conversaoKelvinParaFahrenheit + "°F")


/* Optei por não usar Slice e nem Math apesar de serem bons para arredondar o número, pelo fato de que ainda não foram ensinados em aula. */


