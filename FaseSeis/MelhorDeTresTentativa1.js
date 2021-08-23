/*
**Melhor de três**

O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

const prompt = require("prompt-sync")();


const respOficial = "digitacao";

for (var i = 0; i < 3; i++) {
  console.log("Alô ouvinte " + (i + 1));
  var resposta = prompt("Qual a sua resposta a pergunta ao vivo? ");
  
  for (var j = 0; j < 2; j++) {
    var acertou = resposta == respOficial;
    
    if (acertou) {
      console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
    } else {
      console.log("Você errou!");

      var resposta = prompt("Qual a sua resposta a pergunta ao vivo? ");
    }
  }
}

console.log("90FM é show!");