/*valor gorjeta na conta*/
let valor_na_conta= 1000;

/*VAlor de gorjeta sobre o valor bruto*/
let gorjeta = 0.10;

/* Calculo o valor de gorjeta a receber sobre o valor bruto*/
const gorjeta_a_receber = valor_na_conta * gorjeta;

/*Salario final incluindo gorjeta*/

const total_a_pagar = valor_na_conta + gorjeta_a_receber;

/*Resultado*/
alert(`O seu salario final é R$ ${total_a_pagar.toFixed(2)}`)
