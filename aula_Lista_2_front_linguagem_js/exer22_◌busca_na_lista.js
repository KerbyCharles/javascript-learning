
// Entrada inicial da lista

let list = ['Camila', 'Joana', 'Calao', 'Silva'];

// Entrada do usuario
user = prompt('Informe o nome desejar consultar se estar na lista');

if ( list.includes(user)){
    console.log(`${user} foi encontrado na lista`)
}
else{
    console.log(`${user} não foi encontrado na lista`)
};