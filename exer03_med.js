/*Receber os dados do usuario*/

let nota_1 = Number(prompt("Informe a primeira nota: "));
let nota_2 = Number(prompt("Informe asegunda nota: "));

/* Calcular média*/

const media =(nota_1 + nota_2) / 2;

/* Resultado*/

alert('A média dos numeros digitados é: '+media.toFixed(2));