/*
**Melhor de três**

O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

const prompt = require("prompt-sync")();


const respOficial = "digitacao";

for (var i = 0; i < 3; i++) {
  console.log("Alô ouvinte " + (i + 1));
  //contadora, decremento
  var chances = 2;

  do {
    var resposta = prompt("Qual a sua resposta da pergunta ao vivo? ");
    var acertou = resposta == respOficial;

    if (acertou) {
      console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
    } else {
      chances--;
      console.log("Você errou! ", chances);
    }

  } while (!acertou && (chances > 0));
}

console.log("90FM é show!");