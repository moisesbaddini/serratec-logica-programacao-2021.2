

for (var i = 0; i < 10; i++) {
    console.log("o valor de i " + i);

    if (i == 5) {
      //i = 45;
      break;

      console.log("perceba que ficou meio transparente");
    }
}

console.log("fora do laço");
console.log("daqui o programa continua");


//continue
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("cheguei na metade");
        continue;
    }

    console.log("Estamos no valor de i:" + i);
}