
//Função: identificador; parâmetros; retorno

function bomDia() {
    //código que será executado no futuro
    return "Bom dia";
}

//chamada
var texto = bomDia();
console.log("saudacao: " + texto);

function multiplicar(numero) {
  return numero * 2;
}

var total = 2 + 2 + multiplicar(5);
console.log("total " + total);


//Calculadora com funcao
//minuendo subtraendo resto
//fator

function calcular(parcelaUm, operador, parcelaDois) {
    var conta = 0;

    switch(operador) {
        case "+": conta = parcelaUm + parcelaDois; break;
        case "-": conta = parcelaUm - parcelaDois; break;
        case "*": conta = parcelaUm * parcelaDois; break;
        case "/": conta = parcelaUm / parcelaDois; break;
    }

    return conta;
}

var resposta = calcular(2, "+", 2);
console.log("Resposta da conta: " + resposta);

resposta = calcular(2, "-", 2);
console.log("Resposta da conta: " + resposta);

resposta = calcular(2, "*", 2);
console.log("Resposta da conta: " + resposta);

resposta = calcular(2, "/", 2);
console.log("Resposta da conta: " + resposta);

//terceira abordagem: usar o retorno de uma função como parâmetro em outra chamada de função
resposta = calcular(multiplicar(3), "+", 3);
console.log("Resposta da conta: " + resposta);

var respostaMult = multiplicar(3);
resposta = calcular(respostaMult, "+", 3);

//quarta abordagem: desprezar
calcular(2, "*", 2);
