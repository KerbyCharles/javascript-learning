/* entrada do valor da conta e a quantidades das pessoas*/

let valor_conta = Number(prompt("Inforome o valor  da conta R$: "));

let qtds_pessoas = Number(prompt("DIgite a quantidade de pessoas "));

/*Calculo de quanto cada um deve pagar*/
const cada_um_deve_pagar = valor_conta/qtds_pessoas;

/*Ressultado*/
alert(`Cada pessoa deve pagar ${cada_um_deve_pagar.toFixed(2)}`)
