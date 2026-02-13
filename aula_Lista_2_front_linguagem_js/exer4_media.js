
//4. Média Semestral: Peça as notas de 4 bimestres e calcule a média aritmética
//final.





// entrda das notas
const nota_1 = Number(prompt("Informe a primeira nota:  "));

const nota_2 = Number(prompt('Informe a segunda nota: '));

const nota_3 = Number(prompt("DIgite a terceira nota: "));

// Calcular média
const media =(nota_1 + nota_2 + nota_3)/3;

// Resultado
console.log(`A média do aluno é ${media.toFixed(2)}`);
