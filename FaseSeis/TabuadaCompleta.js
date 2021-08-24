"use strict";

console.log("Todas as tabuadas!");

for (var tabuada = 1; tabuada <= 10; tabuada++) {
  console.log("Tabuada de " + tabuada + ":");

  for (var i = 1; i <= 9; i++) {
    var resultado = tabuada * i;
    var resposta = tabuada + " x " + i + " = " + resultado;
    console.log(resposta);
  }

  console.log("-------------");
}
