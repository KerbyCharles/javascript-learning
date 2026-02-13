
//25. Desafio Final (Mini-Sistema): Crie um algoritmo que pergunte quantos produtos
//o usuário quer cadastrar. Depois, use um laço para pedir o nome de cada produto
//e, ao final, exiba todos os nomes cadastrados.


// Entrada inicial do usuário
let lista = []; 
// qtds
let quantidade = Number(prompt("Quantos produtos deseja cadastrar? "));

for (let i = 1; i <= quantidade; i++) {
    let produto = prompt(`Digite o nome do produto ${i}:`);

    // velificar se o usuario digitou numero
    if (!isNaN(produto)) {
        console.log("Não é possível adicionar números na lista, apenas palavras.");
    } else {
        lista.push(produto);
        console.log(`Sua lista agora: ${lista.join(", ")}`);
    }
}
