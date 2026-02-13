/*Dimensões do triangulo*/
const lado_1 = Number(prompt("Informe a medida do alado_1:")
const lado_2 = 
const lado_3 = 
let altura =
switch(lado_1 > 0){
    case lado_1 == lado_2:
        alert('Triângulo Equilatero');
        break;
    case lado_1 == lado_2 || (lado_2 == lado_3) || (lado_3 == 
        alert('Triangulo Isósceles')
        break;
    default:
        alert('Triangulo escaleno')
}
/*Calculo da area*/
const area = (base * altura)/2;

/*Resultado*/
alert("A sua área é "+ area.toFixed(2)+" cm²")