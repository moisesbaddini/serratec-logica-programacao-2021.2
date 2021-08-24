/*
  As linhas de ônibus da capital são identificadas por números. A empresa "Pão de açucar" opera 8 linhas.
  O passageiro irá digitar o número do ônibus que está vindo, e o programa mostra o nome da linha/trajeto.
*/

const linhas = [];
linhas[0] = "10: Rosário x Pimenteiras";
linhas[1] = "20: Perpétuo x Fonte Santa";
linhas[2] = "30: Caleme x Alto";
linhas[3] = "40: Pimentel x Vale Paraíso";
linhas[4] = "50: Vila Muqui x Várzea";
linhas[5] = "60: Comary x Meudon";
linhas[6] = "70: Rodoviária x Vale Alpino";
linhas[7] = "80: Centro x Canoas";

const prompt = require("prompt-sync")();

var numero = prompt("Digite o número do ônibus que está vindo: ");

var onibus = parseInt(numero) / 10 - 1;

var linha = linhas[onibus];

console.log("Esse ônibus tem o trajeto: " + linha);