
// Entrada do usuario

const user = Number(prompt("Informe o numero desejar ver a tabuada "));

// valida loop e mostrar a tabuada
for (let i = 1; i <= 10; i++){
    console.log(`${user}*${i} = ${user * i}`);
}