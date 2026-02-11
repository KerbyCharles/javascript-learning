/*Entarada de custo e margem */

let custo = Number(prompt("Informe o preço do produto R$ "));
let margem_lucro = Number(prompt("DIgite a sua margem desejada R$ "));

/*Definir margem em percentual*/
const percentual_margem = margem_lucro/100;

/*Calculo faturamento*/
const faturamento= custo*percentual_margem;

/*Calculo valor final*/
const valor_final = custo + faturamento;

/*Resultado*/
alert(`O produto do valor de R$ ${custo} teve uma margem de % ${percentual_margem},`)
alert(`Faturou  R$ ${faturamento.toFixed(2)} \nO valor final do produto  é R$ ${valor_final}`)