/*
No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
*/

const prompt = require("prompt-sync")();

const poesia = `Razão de ser

Escrevo. E pronto.
Escrevo porque preciso
preciso porque estou tonto.
Ninguém tem nada com isso.
Escrevo porque amanhece.
E as estrelas lá no céu
Lembram letras no papel,
Quando o poema me anoitece.
A aranha tece teias.
O peixe beija e morde o que vê.
Eu escrevo apenas.
Tem que ter por quê?`;


var resposta = prompt("Deseja ler uma poesia? S ou N ");

while (resposta == "S") {
  console.log(poesia);
  resposta = prompt("Deseja apreciar novamente? ");
}

console.log("Fim");