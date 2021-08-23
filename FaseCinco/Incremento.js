//Incremento
/*
var numero = 0;

numero = 1;
console.log(numero);
//incremento
numero = numero + 1;
console.log(numero);
numero = numero + 1;
console.log(numero);

//contagem, contadora
numero++;
console.log(numero);

numero = numero + 3;
console.log(numero);

//decremento
numero--;
console.log(numero);
*/

var numero = 15;
//isso
var resposta = numero++;
//é equivalente a isso
var resposta = numero;
numero = numero + 1;

console.log("ult numero", numero);
console.log("resposta", resposta);

var novo = numero + 1;
numero++;

++numero;
console.log("++antes", numero);

var total = ++numero;
console.log("total", total);
 console.log('numero', numero);

 ++antes == incrementa primeiro, retorna depois
 depois++ == retorna primeiro, incrementa depois.

//soma abreviação

var num = 0;

//isso
num = num + 3;
//é equivalente a isso
num += 3;

var texto = "Olá ";
texto += "zepa";

//operador colado na atribuição
texto = texto + "zepa";

num = num - 5;
//significa "ele mesmo"
num -= 5;
num++;

num += 3;

