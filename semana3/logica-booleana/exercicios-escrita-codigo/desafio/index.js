/* CONVERSOR DE PESOS (COM VALORES FIXOS) */

// A
libra = 20;
libraParaQuilo = libra / 2.205;
console.log(libra + "lb equivalem a " + libraParaQuilo + "kg.")

// B
let onca = 10.5;
let oncaParaQuilo = onca / 3.527;
console.log(onca + "oz equivalem a " + oncaParaQuilo + "kg.")

// C
let milha = 100;
let milhaParaMetro = milha * 1609;
console.log(milha + "mi equivalem a " + milhaParaMetro + "m.")

// D
let pe = 50;
let pesParaMetro = pe / 3.281;
console.log(pe + "ft equivalem a " + pesParaMetro + "m." )

// E 
let galao = 103.56;
let galaoParaLitro = galao * 379;
console.log(galao + "gal equivalem a " + galaoParaLitro + "l.")

// F
let xicara = 450;
let xicaraParaLitro = xicara / 3.52;
console.log(xicara + "xic equivalem a " + xicaraParaLitro + "l.")

//G
let quilo = prompt("Digite a quantidade de quilos.")
let quiloParaLibra = quilo * 2.205;
console.log(quilo + "kg equivalem a " + quiloParaLibra + "lb.")