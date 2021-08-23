/*
Aguardando a resposta certa
Na promoção relâmpago da rádio 90FM, os cinco primeiros ouvintes que mandarem um WhatsApp durante o programa ao vivo, ganham um par de ingressos para o cinema!
*/

//para (<inicializacao>; <condicao>; <final>)
//  <instrucao>;

for (var i = 0; i < 5; i += 2) {
  //prompt("Qual a resposta?");

  //Variável de exibição, iniciando em 1 ao invés de zero
  var nro = i + 1;
  console.log("Parabéns ouvinte " + nro + "! ganhou um par de ingressos para Jumanji");
}

console.log("Nossos 5 ouvintes são show!");