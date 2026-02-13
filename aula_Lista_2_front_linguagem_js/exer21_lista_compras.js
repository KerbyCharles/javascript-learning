
//21. Lista de Compras: Crie um array com 3 frutas. Peça ao usuário para adicionar
//uma quarta fruta e exiba a lista completa no console.


//lista
let list = ["Maça", "Abacate", "Laranja"]

//Lista sem alteração
console.log(`Essa é a lista normal  ${list}`)

//entrada usuario
const user = prompt("Qual fruta deseja adicionar na lista? ")

//lista alterada
list.push(user);
console.log(`Lista com novo item ${list}`);