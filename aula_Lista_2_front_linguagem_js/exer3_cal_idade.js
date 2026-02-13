
//Calculadora de Idade: Receba o ano de nascimento do usuário e o ano atual.
//Calcule e mostre a idade aproximada.


// Entrada inicial do  usuario

const ano_nascimento = Number(prompt("Informe o ano que nasceu "));
const ano_atual = Number(prompt("Informe o ano atual "));

// Calcular idade
const idade = ano_atual - ano_nascimento;

// Resultado
alert(`Você tem ${idade.toFixed(0)} anos. Correto?`)