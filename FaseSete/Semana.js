//declaração e inicialização
const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta", "Quinta"];
semana[5] = "Sexta";
semana[6] = "Sábado";

//inválido
//semana = [];

const numero = 5;
numero = 9;

const vetor = [];
//vetor = "abc";
vetor[0] = "não é uma atribuição no identificador vetor, e sim";
vetor[1] = "uma posição dentro do vetor";

vetor[] = "nada";

console.log(semana[4]);

//Lista
semana.push("Semana acabou");

console.log(semana);

var A = 6;
var B = 8;

//Permuta (exchange)
var aux = A;
A = B;
B = aux;
