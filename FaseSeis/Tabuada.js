'use strict';
const prompt = require("prompt-sync")();

var num = prompt("Digite um número: ");
var tabuada = "";

for (var count = 0; count <= 9; count++) {
  var resultado = num * count;
  tabuada += num + " x " + count + " = " + resultado + "\n";
}

console.log("A tabuada do número é:");
console.log(tabuada);
