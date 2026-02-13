
//11. Aprovação Escolar: Calcule a média de um aluno. Se for 7 ou mais, exiba
//"Aprovado". Caso contrário, "Reprovado".


// Entrada das notas

const nota_1 = Number(prompt("Digite a 1ª nota: "));
const nota_2 = Number(prompt("DIgite a 2ª nota: "));

// Calcula média
const media = (nota_1 + nota_2)/2;

// veficar e mostrar se é aprovado ou não
if(media >= 7){
    console.log(`você é Aprovado`)
}else{
    console.log("Reprovado")
};