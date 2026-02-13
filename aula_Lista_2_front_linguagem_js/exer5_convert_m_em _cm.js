
//Conversor de Medidas: Crie um programa que receba um valor em metros e
//exiba o equivalente em centímetros.

// entrada inicial em metros

const metros = Number(prompt("Informe o valor que desejar converter m: "));

// convert em centimetro
const cen = 100;
const centimetros = metros * cen;
console.log(`A sua medida em centimétros são ${centimetros.toFixed(2)} Cm`);