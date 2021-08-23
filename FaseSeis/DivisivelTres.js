
for (var i = 1; i < 10; i++) {
    console.log("i: " + i);

    for (var j = 1; j < 10; j++) {
    
      var mult = i * j;
      console.log("mult: " + mult);

      if (mult % 3 == 0)
        break;
    }

  console.log("fim do i " + i);
}