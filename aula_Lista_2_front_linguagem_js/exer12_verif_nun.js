
//12. Qual é o maior?: Receba dois números e exiba qual deles é o maior ou se são
//iguais.



//Entrada do usuario
const num1 = Number(prompt("Informe o 1° numero "));
const num2 = Number(prompt("DIgite o 2° numero "))

//definir maior e menor
const maior = Math.max(num1,num2);
const menor = Math.min(num1,num2);
if (num1 === num2){
    console.log("Os numeros digitados são iguais")
} else{
    console.log(`O numero maior  é ${maior} e o numero menor é ${menor}`)
};