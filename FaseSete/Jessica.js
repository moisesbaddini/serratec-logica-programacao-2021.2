/*
  Jessica tem sapateira com 5 sapatos.
*/

const prompt = require("prompt-sync")();

var sapato0 = "";
var sapato1 = "";
var sapato2 = "";
var sapato3 = "";
var sapato4 = "";

var numero = prompt("Qual o número da gaveta para guardar? ");
var calcado = prompt("Qual sapato você quer guardar? ");

if (numero == "0") {
  sapato0 = calcado;
} else if (numero == "1") {
  sapato1 = calcado;
} else if (numero == "2") {
  sapato2 = calcado;
} else if (numero == "3") {
  sapato3 = calcado;
} else if (numero == "4") {
  sapato4 = calcado;
}

numero = prompt("Qual o número da gaveta para ver? ");

if (numero == "0") {
  calcado = sapato0;
} else if (numero == "1") {
  calcado = sapato1;
} else if (numero == "2") {
  calcado = sapato2;
} else if (numero == "3") {
  calcado = sapato3;
} else if (numero == "4") {
  calcado = sapato4;
}

console.log("Na gaveta " + numero + " está guardado o calçado " + calcado);