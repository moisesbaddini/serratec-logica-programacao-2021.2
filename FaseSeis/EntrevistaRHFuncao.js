/*
A primeira letra

O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.
*/

const prompt = require("prompt-sync")();

var nome = "string";
var vogal = false;
var pri = "";

//declaração da função
//identificador, parâmetros, retorno

/* Boolean letraMaiuscula () { código aqui } */

//Parâmetro: é uma variável da função que será preenchida externamente
function dizLetraVogal (letra) {
  //programação da função que um dia será executada, no futuro
  console.log("função foi chamada");

  var resposta = (letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U");
  return resposta;
}

function obterPrimeiraLetra () {
  nome = nome.toUpperCase();
  return nome.substr(0, 1);
}

do {
  nome = prompt("Qual a primeira letra do seu nome? ");

  //Chamada a função: par de parênteses na frente do identificador

  if (nome == "") break;

  //chamada da função
  var teste = obterPrimeiraLetra();
  vogal = dizLetraVogal(teste);

  if (vogal)
    console.log("Sua entrevista será segunda");
  else
    console.log("Sua entrevista será terça-feira");

} while (nome != "");

console.log("RH deseja um ótimo dia!");