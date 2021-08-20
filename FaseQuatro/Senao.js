//pelo menos uma instrução será executada

/*
if (expressao)
  instrução_um;
else //(false)
  instrução_dois;
*/
var texto = "Maria";

/**/

var retorno = true;

/*
if (retorno)
  console.log()
  texto = "verdade"
  saudacao()
  if ()
*/


const limite = 8;
var qtde = 7;

var liberada = (qtde < limite);
var proximo = (qtde == 7);

//Encadeamento, aninhamento
if (liberada)
  if (proximo)
    console.log("Não deixe entrar se estiver acompanhado.");
  else
    console.log("Entrada liberada");
else
  console.log("Aguarde um pouco");

//E se quero mais instruções

/*
{
    comando1;
    comando2;
    comandoN;
}

if (liberada) {
    console.log("Entrada liberada");
    texto = "12345";
    console.log("Cuidado com o limite");
}
*/
const limite = 8;
var qtde = 6;
var liberada = (qtde < limite);
var proximo = (qtde == 7);

if (liberada)
  console.log("Entrada liberada");

if (proximo)
  console.log("Não deixe entrar se estiver acompanhado.");
else {
  console.log("Aguarde um pouco");
  console.log("Aguarde um pouco");
  console.log("Aguarde um pouco");
}
