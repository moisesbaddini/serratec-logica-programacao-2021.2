//declaração e inicialização
const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta", "Quinta"];
semana[5] = "Sexta";
semana[6] = "Sábado";

//inválido
//semana = [];

const numero = 5;
numero = 9;

const armario = [];
//vetor = "abc";
armario[0] = "não é uma atribuição no identificador vetor, e sim";
armario[1] = "uma posição dentro do vetor";

armario[1] = "nada";

armario = "guarda roupa inteiro";
armario[3] = "gaveta 3 do guarda roupa";

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
