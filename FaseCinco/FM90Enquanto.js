/*
**Aguardando a resposta certa**

O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
*/

//const prompt = require("prompt-sync")();

var telefone = prompt("Ligando pra você: ");
var naoAcertou = (telefone != "90show");

while (naoAcertou) {
    console.log("Que pena...");

  telefone = prompt("Ligando pra você: ");
  naoAcertou = (telefone != "90show");
};

console.log("Parabéns você ganhou!");