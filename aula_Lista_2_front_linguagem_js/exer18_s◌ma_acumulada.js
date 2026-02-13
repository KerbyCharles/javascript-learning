//Soma Acumulada: Peça para o usuário digitar 5 números seguidos e, ao final,
//exiba a soma total de todos eles.


// Entrada do usuario
soma = 0
for (let i = 1; i <=5; i++){
    const user = Number(prompt(`Informe o ${i} ° numero `));

    //verificar se é numero ou letra
    if (!isNaN(user)) { 
        soma += user;
    }else {
        console.log("Valor inválido. Não será contabilizado.");
    }
}
//Resultado final
console.log(`A soma dos valores inseridos são ${soma}`)