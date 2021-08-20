{
  const prompt = require("prompt-sync")();

  const LIMITE_CLIENTES = 8;

  console.log("Tem uma pessoa na porta da loja querendo entrar.");
  var qtde = 8; //prompt("Quantas pessoas temos na loja agora? ");

  var permitir = qtde < LIMITE_CLIENTES;
  var texto = "Loja tá cheia";

  //valor true
  //A instrução a se verdadeiro executa; se é falso salta próxima linha.
  if (permitir)
    texto = "Pode permitir a entrada do cliente que está na fila";

  if (true)
    var segundacondicao = ";";

  console.log("console:", texto);
}
