
//Strings == Cadeia de caracteres
var texto = "uma string é um vetor!";

var trecho = texto[0];
console.log(trecho);

var tamanho = texto.length;
console.log("tamanho: " + tamanho);

//não é de quatro a seis; a partir de 4, seis caracteres
trecho = texto.substr(4, 6);
console.log(trecho);

//localizar o índice inteiro desse caractere no texto
var posicao = texto.indexOf(" ");
console.log("posição do primeiro espaço é " + posicao);

trecho = texto.toUpperCase();
console.log("tudo em maiusculas: " + trecho);
trecho = texto.toLowerCase();
console.log("tudo em minusculas: " + trecho);

var aluno = "Maria é muito chata e muito rica";
const antigo = "chata";
const novo = "legal";

var posicao = aluno.indexOf(antigo);
var trecho = aluno.substr(0, posicao);
console.log(trecho);
posicao += antigo.length;
var total = aluno.length;
trecho = trecho + novo + aluno.substr(posicao, total);
console.log(trecho);

/*
function substituir(texto, antigo, novo) {

}

substituir("a", "chata", "legal");
*/

var aluno = "Maria é muito chata e muito rica";
var trecho = aluno.replace("muito", "pouco");
console.log(trecho);

//dividir um texto em array
var maria = aluno.split("muito");
console.log(maria);