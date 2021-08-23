/*
A primeira letra

O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.
*/

const prompt = require("prompt-sync")();

var nome = "string";
var vogal = false;

do {
  nome = prompt("Qual a primeira letra do seu nome? ");

  if (nome == "") break;

  //Processamento
  /*
  switch (nome) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        vogal = true;
        break;
    default:
        vogal = false;
  }
  */

  //identificador, parâmetros, retorno
  nome = nome.toUpperCase();
  var pri = nome.substr(0, 1);

  vogal = (pri == "A") || (pri == "E") || (pri == "I") || (pri == "O") || (pri == "U");

  //Saída
  if (vogal)
    console.log("Sua entrevista será segunda");
  else
    console.log("Sua entrevista será terça-feira");

} while (nome != "");

console.log("RH deseja um ótimo dia!");