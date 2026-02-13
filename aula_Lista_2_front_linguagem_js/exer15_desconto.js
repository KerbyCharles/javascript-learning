
//15. Desconto de Compra: Se o valor de uma compra for maior que R$ 100,00,
//aplique um desconto de 10%. Exiba o valor final.


// entrada do valor 
const valor = Number(prompt("Informe o valor da comprar "));

// Verificar o valor momstrar 
if (valor > 100){
    const desconto = valor -(valor*0.10)
    console.log(`O desconto de 10% foi aplicado, valor ajustado é R$ ${desconto.toFixed(2)}`)
}else{
    console.log(`Sem desconto $ valor R$ ${valor.toFixed(2)} permanecer`)
}