// seleciona o h1 no html
// let titulo = document.querySelector("h1");
//inserta o texto na tag selecionada
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let paragrafo = document.querySelector(tag);
  paragrafo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto ? 'acertou' : 'Errou');
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
