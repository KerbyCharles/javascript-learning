/*Receber os dados do usuarios*/

let ano_atual = Number(prompt('Informe o ano atual: '));
let ano_mascimento = Number(prompt("Informe o ano que nasceu: "));

/*Calcular idade atual*/

const idade = (ano_atual - ano_mascimento)

/*idade*/

alert("De acordo com os dados inseridos você tem "+ idade.toFixed(0)+" anos.");
