/*Salario inicial*/
let sal = 1000;

/* % Reajuste*/
let reajuste = 0.15;

/*Reajuste aplicado*/
const reaj_sal = sal+(sal*reajuste);

/*Resultado*/
alert("Seu salario reajustado é R$ "+ reaj_sal.toFixed(2));