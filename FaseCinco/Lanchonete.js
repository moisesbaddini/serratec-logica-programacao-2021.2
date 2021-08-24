/*
:Lanchonete:
Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles
Item 1: B
Item 2: T
Adicionar molho: Não
[Cozinha]
Lanche com Bacon e Tomate, sem molho.
*/

console.log(":Lanchonete:");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles");
var item1 = prompt("Item 1: ");
var item2 = prompt("Item 2: ");

var compl1 = "";

switch (item1) {
  case "Q": compl1 = "Queijo"; break;
  case "B": compl1 = "Bacon"; break;
}

var compl2 = "";

switch (item2) {
  case "Q": compl2 = "Queijo"; break;
  case "B": compl2 = "Bacon"; break;
}

var teraCompl = (item1 == "A") || (item1 == "T") || (item2 == "A") || (item2 == "T");

if (teraCompl)
prompt("Adicionar molho: ");

"[Cozinha]"
"Lanche com Bacon e Tomate, sem molho."
