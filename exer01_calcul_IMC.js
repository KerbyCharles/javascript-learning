/*Entrada de peso e altura*/

let peso = Number(prompt("Informe o seu peso kg: "));
let altura = Number(prompt("Informe a sua altura m: "));

/*Validação*/
if (peso > 0 &&  altura > 0) {

};

/*Elevar altura ao quadrado*/
const altura_quadrado = Math.pow(altura, 2);

/* Calculo imc*/
const imc = peso/altura_quadrado;

/*Resultado*/
alert(`O seu imc é ${imc.toFixed(2)}`);
