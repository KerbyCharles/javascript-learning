//10. Par ou Ímpar: Crie um algoritmo que receba um número e informe se ele é par ou
//ímpar (Dica: use o operador %).


//Recebe a entrada do usúario
const num = Number(prompt("Informe um numero "));

//criar variavel e mostrar resultado
const imparPar = num%2;
if (imparPar === 0){
    console.log("O numero digitado é par")
}else{
    console.log("O numero digitado é impar")
};