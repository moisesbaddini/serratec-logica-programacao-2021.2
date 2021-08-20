/*
 Requisito:
 Criar um programa para saber se o carro está ligado ou desligado.
*/

var prompt = require("prompt-sync")();

//Entrada
console.log('Responda algumas perguntas com "sim" ou "não":');
var movimento = "sim";//prompt("O veículo está em movimento? ");
var barulho = "sim";//prompt("Está ouvindo barulho do motor? ");
var luzes = "sim";//prompt("As luzes do painel, ou farol, estão acesas? ");

//Processamento
//Curto circuito
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim");
//     ""    = false || (true && true);
//     ""    = false || true;
//     ""    = true;

//Saída
console.log("Concluímos que: Seu carro está ligado?", ligado);

var A = "A";
var B = "console";
//Textos vêm entre aspas para diferenciar de identificadores
var const nome if  //declarações
"var" "const" //expressão
