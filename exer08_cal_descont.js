/*Valor do produto */
let produto = 100;

/* percentual de desconto*/
let desc = 0.10

/*desconto aplicado ao preço do produto*/
const desconto_produto = produto-(produto*desc)

/*Resultado*/
alert("O produto está com % "+ desc * 100 +" de desconto."+ " \nAgora o preço é R$"+ desconto_produto.toFixed(2))