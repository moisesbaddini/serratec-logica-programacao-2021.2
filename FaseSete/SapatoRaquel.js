/*
  Sapato
*/
"use strict";

var sapato = [];
sapato[0] = "Sandalia";
sapato[1] = "Mocacim";
sapato[2] = "Bota";
sapato[3] = "Chuteira";
sapato[4] = "Rasteirinha";
sapato[5] = "Sapatilha";
sapato[6] = "Tamanco";
sapato[7] = "Kichute";
sapato[8] = "Tenis";
sapato[9] = "Havaianas";
sapato[10] = "Bota"

var pesquisa = "Bota";
var ultimo = -1;
var qtdeEncontrados = 0;

var listaEncontrados = [];

for (var i = 0; i < sapato.length; i++) {
  console.log(i, sapato[i]);

  if (sapato[i] == pesquisa) {
    ultimo = i;
    listaEncontrados[qtdeEncontrados] = i;
    qtdeEncontrados++;
    //break;
  }
}

console.log("Encontrei " + qtdeEncontrados + " " + pesquisa);
console.log(listaEncontrados);

if (ultimo > -1) {
  console.log("O último sapato está na gaveta " + ultimo);
} else {
  console.log("Não encontrado");
}
