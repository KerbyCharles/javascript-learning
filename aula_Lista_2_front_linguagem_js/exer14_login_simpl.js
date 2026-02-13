//14. Login Simples: Crie uma variável fixa chamada senhaCorreta = "1234". Peça ao
//usuário uma senha e diga se o acesso foi "Concedido" ou "Negado".


// Entrada inicial
const senha_correta = "1234"

const user = prompt("Digite a senha")

// valida o acesso
if (user === senha_correta){
    console.log("Acesso foi concedido")
}else{
    console.log("Acesso Negado")
};