/*
  Jessica tem sapateira com 5 sapatos.
*/

const prompt = require("prompt-sync")();

//inicialização
var sapato = ["Sandalia", "Bota", "Rasteinha"];
var numero = 3;
var texto = "ola";

//sapato[0] = "Sandalia";
//sapato[1] = "Bota";
//sapato[2] = "Rasteirinha";
sapato[3] = "Tenis azul";
sapato[4] = "Scarpin";
sapato[5] = "Pantufa";

sapato[0] = "Chinelo";

var numero = prompt("Qual o número da gaveta para guardar? ");
var calcado = prompt("Qual sapato você quer guardar? ");

//Atribuição com uma posição numérica
//índice
sapato[numero] = calcado;

numero = prompt("Qual o número da gaveta para ver? ");

//recuperação por índice, por posição numérica
calcado = sapato[numero];

console.log("Na gaveta " + numero + " está guardado o calçado " + calcado);

//String sapato = new Array[50];
//sapato[43] = "rs";

var quantidade = 6;

//novo
quantidade++;

console.log("extensão, tamanho", sapato.length);

//qual a posição?
var posicao = sapato.length;//6
sapato[posicao + 1] = "Pantufa";

sapato[7]

//Outras linguagens
Integer vetor = new Array(40);
var vetor = [1, 2, 3, 4, 5];