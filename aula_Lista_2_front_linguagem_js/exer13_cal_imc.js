
//13. Calculadora de IMC: Receba peso e altura. Calcule o IMC (Peso / Altura2). Se o
//IMC for maior que 25, exiba "Acima do peso".



//Entrada dos dados do usúario
const peso = Number(prompt("Informe o seu peso kg: "));
const altura = Number(prompt("Informe a sua altura m: "));

// Calculo imc
const imc =peso/Math.pow(altura, 2)

// verificar se o peso esta acima e motrar resultado
if (imc > 25){
    console.log("Acima do peso")
}else{
    console.log("Peso controlado")
};