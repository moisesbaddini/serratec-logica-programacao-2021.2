var alunos = [];
var presenca = [];

alunos[0] = "Adrian";
presenca[0] = true;
alunos[1] = "Andre Luis";
presenca[1] = true;
alunos[2] = "Andre Silva";
presenca[2] = true;
alunos[3] = "Antonio";
presenca[3] = true;
alunos[4] = "Arthur";
presenca[4] = false;
alunos[5] = "Beatriz";
presenca[5] = true;
alunos[6] = "Bruno";
presenca[6] = true;
alunos[7] = "Carlos";
presenca[7] = false;
alunos[8] = "Carol";
presenca[8] = true;
alunos[9] = "Daniel";
presenca[9] = true;
alunos[10] = "Diego";
presenca[10] = true;
alunos[11] = "Eduardo";
presenca[11] = true;
alunos[12] = "Gil";
presenca[12] = true;
alunos[13] = "Guilherme";
presenca[13] = true;
alunos[14] = "Gustavo";
presenca[14] = true;
alunos[15] = "Gustavo Ponte";
presenca[15] = true;
alunos[16] = "Igor";
presenca[16] = true;
alunos[17] = "Karine";
presenca[17] = true;
alunos[18] = "Leandro";
presenca[18] = true;
alunos[19] = "Luana";
presenca[19] = true;
alunos[20] = "Luciana E";
presenca[20] = true;
alunos[21] = "Luciana M";
presenca[21] = true;
alunos[22] = "Marcela";
presenca[22] = true;
alunos[23] = "Marcos Antonio";
presenca[23] = true;
alunos[24] = "Marco Vinicios";
presenca[24] = true;
alunos[25] = "Mateus";
presenca[25] = true;
alunos[26] = "Natan";
presenca[26] = true;
alunos[27] = "Nuria";
presenca[27] = true;
alunos[28] = "Pedro Ricardo";
presenca[28] = true;
alunos[29] = "Pedro Henrique";
presenca[29] = true;
alunos[30] = "Rafael";
presenca[30] = true;
alunos[31] = "Raquel";
presenca[31] = true;
alunos[32] = "Rodrigo C";
presenca[32] = true;
alunos[33] = "Rodrigo de Paula";
presenca[33] = true;
alunos[34] = "Vanderson";
presenca[34] = true;
alunos[35] = "Vitor";
presenca[35] = true;
alunos[36] = "Viviane";
presenca[36] = true;

var qtde = alunos.length;
console.log("A quantidade alunos: " + qtde);

//Posição do aluno "nome"
var nome = "Raquel";
var cadeira = -1;

for (var i = 0; i < qtde; i++) {
    //critério de busca
    if (alunos[i] == nome) {
        cadeira = i;
        break;
    }
}

if (cadeira == -1) {
    console.log("Não encontrei o aluno " + nome + " na listagem.");
}
else {
    console.log("O aluno " + nome + " está na cadeira " + cadeira);
}

//O total de presentes
var total = 0;

for (var i = 0; i < presenca.length; i++) {
  //critério
  //pleonasmo, pois o valor em "presenca[i]" já é true ou false
  var presente = (presenca[i] == true);

  //if (presenca[i]) {
  if (presente) {
    total = total + 1;
  }
}

console.log("O total de presentes é " + total);

//O nome dos ausentes
//ahey

var ausentes = [];

for (let i = 0; i < alunos.length; i++) {
  //saber se está ausente, é o mesmo que negar a presença
  const ausente = ! presenca[i];
  //const ausente = presenca[i] == false;

  //critério de busca
  if (ausente) {
    nome = alunos[i];
    //ausentes.push(nome);
    ausentes[i] = nome;
  }
}

console.log("Os nomes dos ausentes abaixo:");
console.log(ausentes);