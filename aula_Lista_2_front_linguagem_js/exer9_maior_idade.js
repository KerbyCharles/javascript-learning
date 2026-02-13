//9. Maior de Idade: Receba a idade de uma pessoa e diga se ela já é maior de idade
//(18 anos ou mais).


// entrado inicial do usúario
const idade = Number(prompt('Informe a sua idade '));

// verificar se é maior idade ou menor e mostrar o resultado
if(idade >= 18 ){
    console.log(`Você é maior idade`)
}
else{
    console.log(`Você é menor idade`)
};