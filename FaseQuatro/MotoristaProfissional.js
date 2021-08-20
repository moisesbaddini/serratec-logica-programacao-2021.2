/*
Requisito
Para saber se o motorista é profissional, ele precisa ser habilitado nas categorias:
A, B, e C.
*/

var prompt = require("prompt-sync")();

//Entradas
var A = prompt("Possui habilitação A? Digite s ou n ");
var B = prompt("Possui habilitação B? Digite s ou n ");
var C = prompt("Possui habilitação C? Digite s ou n ");

//Relacional é Binária: parzinho
//inválido
//var motoca = (A == "s", "S") || "S" || "Sim";

//! Primeiro particularizar, depois, generalizar.
var motoca = A == "s" || A == "S" || A == "Sim";
var carro = B == "s" || B == "S" || B == "Sim";
var vuc = C == "s" || C == "S" || C == "Sim";

//&& || lógicos

//Processamento
var resposta = motoca && carro && vuc;

//Saída
console.log("Você é motorista de verdade?", resposta);