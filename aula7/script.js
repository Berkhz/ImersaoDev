var carta1 = {
  nome: "Rússia",
  atributos: {
    ataque: 8,
    defesa: 8,
    especial: 10
  }
};

var carta2 = {
  nome: "Ucrânia",
  atributos: {
    ataque: 7,
    defesa: 9,
    especial: 5
  }
};

var carta3 = {
  nome: "EUA",
  atributos: {
    ataque: 9,
    defesa: 9,
    especial: 10
  }
};

var carta4 = {
  nome: "Brasil",
  atributos: {
    ataque: 5,
    defesa: 9,
    especial: 4
  }
};

var carta5 = {
  nome: "Japão",
  atributos: {
    ataque: 8,
    defesa: 8,
    especial: 7
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];
}
  
  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  }

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();


function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += 
      "<input type='radio' name='atributo' 
    value='" + 
      atributo + 
      "'>"" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}


function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.lenght; i++) {
    if (radioAtributos[i].checked) {
      
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtribudoSelecionado()
}