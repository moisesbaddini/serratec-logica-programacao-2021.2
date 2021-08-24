/*
O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.
*/

console.log("Quadrados:");

for (var numero = 1; numero <= 9; numero++) {
  //Processamento
  var quadrado = numero * numero;

  //Saída
  var resposta = numero + " ^ 2 = " + quadrado;
  console.log(resposta);
}

console.log("Fim dos quadrados");
