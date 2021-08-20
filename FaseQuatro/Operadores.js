
//Relacionais

var aluno = "";

var presente = (aluno != "");

console.log("Aluno está presente?");
console.log(presente);

//Lógicos

//Boolean
var maria = true;
var carol = true;

//Quero saber se AMBOS alunos estão presentes
var estaoPresentes = maria && carol;
//var estaoPresentes = (true && true);

console.log("estao presentes?", estaoPresentes);

//Operador OU
//Quando QUALQUER dos valores é verdade

var servidorDragao = false;
var serverGuerrilha = false;

var entrar = servidorDragao || serverGuerrilha;

console.log("estou conectado no discord?", entrar);

/*
P       Q      &&
true  | true  | true
true  | false | false
false | true  | false
false | false | false
*/

/*
P | Q | e equivalente a multiplicação (x * .)
1 | 1 | 1
1 | 0 | 0
0 | 1 | 0
0 | 0 | 0
*/

/*
P    | Q     | ||
------+-------+----
true  | true  | true
true  | false | true
false | true  | true
false | false | false

//Disjunção ou ||

P | Q | ou (soma, mais, +)
1 | 1 | 1 (2) (não é zero)
1 | 0 | 1
0 | 1 | 1
0 | 0 | 0
*/

//Negação not não ! bang exclamação

P     | not
true  | false
false | true

var prof = true;
var serverGalera = ! prof;

console.log("Posso entrar no server de geral?", serverGalera);

/*
P | not (equivalente a -)
0 | - 0
1 | - 1
*/
// * -1

//var resposta = true && true && true;
//var motoristaProfissional = A e B e C;

var moto = true;
var carro = true;
var vuc = false;

var motoristaProfissional = (moto && carro) && vuc;
            ""            = (true         ) && vuc;
            ""            = true            && vuc;
            ""            = false;

console.log("É motorista profissional?", motoristaProfissional);

