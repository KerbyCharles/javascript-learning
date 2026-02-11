/*Receber o nome do usuario*/

let nome = String(prompt("Digite o seu nome: "));

let sobre_nome = String(prompt("Informe o sobre nome: "));

/*Juntar os dados recebidos*/

const nome_completo = (nome + " "+ sobre_nome);

/* Resultado*/

alert("Seu nome completo é: "+ nome_completo);