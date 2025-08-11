// alert('Hello World!');

let numeroSecreto = 5;
console.log(numeroSecreto);

let chute;

let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (numeroSecreto != chute) {
  chute = prompt("Escolha um número entre 1 e 10:");

  //se o chute for igual ao numero secreto
  if (numeroSecreto == chute) {
    // console.log('Isso ai! Você descobriu o número secreto');
    alert(
      `Isso ai! Você descobriu o número secreto, que era ${numeroSecreto} com ${tentativas} tentativas`
    );
  } else {
    if (numeroSecreto > chute) {
      alert(`O numero secreto é maior que ${chute}`);
    } else {
      alert(`O numero secreto é menor que ${chute}`);
    }
    tentativas++;
  }
}

//EXERCICIOS
// alert('Boas vindas ao nosso site!');

// let nome = 'Lua';

// let idade = 25;

// let numeroDeVendas = 50;

// let saldoDisponivel = 1000;

// alert( 'Erro! Preencha todos os campos');

// let mensagemDeErro = 'Erro! Preencha todos os campos'
// alert(mensagemDeErro);

// let nomeInputado = prompt('Qual é o seu nome?');

// let idadeInputada = prompt('Qual é a sua idade?');
// if (idadeInputada >= 18) {
//     alert('Já pode tirar a Habilitação')
// }

//-----------------------------------------------

// let diaSemana = prompt("Que dia da semana é hoje?");
// if(diaSemana == 'sabado'){
//     alert(`Hoje é ${diaSemana}, então tenha um bom fim de semana!`);
// } else if (diaSemana == 'domingo') {
//     alert(`Hoje é ${diaSemana}, então tenha um bom fim de semana!`);
// } else {
//     alert(`Hoje é ${diaSemana}, tenha uma boa semana!`);
// }

// let numero = prompt("Digite um numero:");
// if (numero >= 0){
//     alert(`${numero} é um número positivo!`);
// } else {
//     alert(`${numero} é um número negativo`);
// }

// let pontuação = 100;
// if (pontuação >= 100) {
//     alert(`Sua pontuação é ${pontuação}. Parabens, você venceu!`)
// } else {
//     alert(`Sua pontuação é ${pontuação}. Tente novamente para ganhar`)
// }

// let saldoConta = 5000;
// alert(`Seu saldo em conta é de R$ ${saldoConta}.`);

// let nomeUsuário = prompt('Qual é o seu nome?');
// alert(`Boas vindas ${nomeUsuário}!`)

//-----------------------------------------------

// console.log("contador progressivo");
// let contador = 1;
// while (contador <=10 ) {
//     console.log(contador);
//     contador++;
// }

// console.log("contador regressivo");
// let contadorRegressivo = 10;
// while (contadorRegressivo >= 0 ) {
//     console.log(contadorRegressivo);
//     contadorRegressivo--;
// }

// console.log("contador regressivo a partir de um numero inputado");
// let numeroRegressivo = prompt("Informe um numero e verifique o console para ver a magica acontecer");
// while (numeroRegressivo >= 0){
//     console.log(numeroRegressivo);
//     numeroRegressivo--;
// }

// console.log("contador progressivo a partir de um numero inputado");
// let contadorProgressivo = 0;
// let numeroProgressivo = prompt("Informe um numero e verifique o console para ver a magica acontecer");
// while (contadorProgressivo <= numeroProgressivo){
//     console.log(contadorProgressivo);
//     contadorProgressivo++;
// }
