/*
 A função ecoMontanha terá dois parâmetros: O primeiro é o texto a ser repetido.
 o segundo é a quantidade de vezes que o texto será repetido.
*/

const prompt = require("prompt-sync")();

//declaração da função == uma única vez
function ecoMontanha (escuta) {
    return escuta + " " + escuta;
}

//Chamada da função == quantas vezes eu precisar
/*
var texto = ecoMontanha("cantor");
console.log(texto);
texto = ecoMontanha("Montanha");
console.log(texto);
texto = ecoMontanha("Ciclista");
console.log(texto);
*/


function ecoMontanha (palavra, quantidade) {
var resposta = "";

for (var i = 0; i < quantidade; i++) {
  //resposta = resposta + palavra + " ";
  console.log(resposta + " ");
}

  return resposta;
}

// Com função
var palavra = prompt("Qual a sua palavra? ");
var vezes = prompt("Quantas vezes irá repetir? ");
var qtde = parseInt(vezes);

var txt = ecoMontanha(palavra, qtde);
console.log("Retorno da função: " + txt);