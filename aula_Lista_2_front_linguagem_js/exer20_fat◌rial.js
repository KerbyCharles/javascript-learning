
//20. Fatorial Simples: Receba um número e calcule o seu fatorial (Ex: 5! = 54321).

// Entrada do usuario
const numero = Number(prompt("Informe um número para calcular o fatorial:"));

// Inicializa o fatorial
let fatorial = 1;

// Calcula o fatorial
for (let i = numero; i >= 1; i--) {
    fatorial *= i; 
}

// resultado
console.log(`O fatorial de ${numero} é ${fatorial}`);
