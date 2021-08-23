/*
  CineShow tem 7 assentos disponíveis para a sessão das 18h: 43 a 49.
  A bilheteria quer vender esses ingressos, sendo que a cadeira 46 é preferencial e não pode ser vendida.
*/

const prompt = require("prompt-sync")();
/*
//Entradas
//Processamento

for (var i = 43; i < 50; i++) {
  console.log("Poltrona " + i);
  var poltrona = prompt("Proltrona comum ou preferencial? C ou P");

  if (poltrona == "P" && i != 46) {
    console.log("Essa poltrona não é preferencial");
    continue;
  }

  console.log("Ingresso " + i + " vendido.");
}
*/
//Saída

//para (inicializacao, condicao de continuidade, final) {
var i = 43;

for (; i < 50; ) {
  console.log("Poltrona " + i);
  var poltrona = prompt("Proltrona comum ou preferencial? C ou P");

  if (poltrona == "P" && i != 46) {
    console.log("Essa poltrona não é preferencial");
    continue;
  }

  console.log("Ingresso " + i + " vendido.");
  i++;
}
