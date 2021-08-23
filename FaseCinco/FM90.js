/*
**Aguardando a resposta certa**

O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
*/

//const prompt = require("prompt-sync")();

do {
  //Entradas
  var telefone = prompt("Ligando pra você: ");

  //Processamento
  var naoAcertou = (telefone != "90show");

  //Saída
  if (naoAcertou)
    console.log("Que pena...");
  else
    console.log("Parabéns você ganhou!");
}
while (naoAcertou);