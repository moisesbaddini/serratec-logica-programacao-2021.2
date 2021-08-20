/*
Exercício digestivo

O shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade.
antes de entrar, a pessoa deve responder se o indicador está verde ou vermelho.
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.

10  minutos
*/

const prompt = require("prompt-sync")();

console.log("=== Shopping - Sanitários ===")

//Entradas
var cor = 'vermelho';//prompt("Qual a cor do indicador? (verde, vermelho) ");

//Processamento
var liberado = (cor != "vermelho");

//Saídas
var saida = "";

if (liberado)
  saida = "Pode entrar no sanitário";
else
  saida = "Aguarde antes de entrar";

console.log(saida);