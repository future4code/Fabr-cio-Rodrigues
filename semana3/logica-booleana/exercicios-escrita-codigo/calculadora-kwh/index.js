/* CALCULADORA DE KWH (COM VALORES FIXOS) */

const custoKWH = 0.05;
let porcentagemDesconto = 15;


calculo1 = 280 * custoKWH;
console.log("O valor pago pela residência será de R$" + calculo1);

let desconto = (porcentagemDesconto * calculo1)/100;
let totalPago = calculo1 - desconto;

console.log("O valor pago pela residência será de R$" + totalPago + " com desconto de R$" + desconto + " (15% do valor total).");
