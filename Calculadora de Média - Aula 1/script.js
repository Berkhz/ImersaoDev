const nome = "Kauan";

const notaDoPrimeiroBimestre = 6.5;
const notaDoSegundoBimestre = 8.5;
const notaDoTerceiroBimestre = 10;
const notaDoQuartoBimestre = 4;

const notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

const notaSecundaria = notaFinal.toFixed(1)

console.log("Aqui está sua nota " + nome);
console.log(notaSecundaria);