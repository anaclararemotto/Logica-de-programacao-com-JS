// alert('Hello World!');
alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;

let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (numeroSecreto != chute) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

  //se o chute for igual ao numero secreto
  if (numeroSecreto == chute) {
    // console.log('Isso ai! Você descobriu o número secreto');
    break;
  } else {
    if (numeroSecreto > chute) {
      alert(`O numero secreto é maior que ${chute}`);
    } else {
      alert(`O numero secreto é menor que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(
  `Isso ai! Você descobriu o número secreto, que era ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);

// if (tentativas > 1){
//     alert(
//           `Isso ai! Você descobriu o número secreto, que era ${numeroSecreto} com ${tentativas} tentativas`
//         );

// } else {
//     alert(
//           `Isso ai! Você descobriu o número secreto, que era ${numeroSecreto} com ${tentativas} tentativa`
//         );
// }

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

// let diaSemana = prompt('Que dia da semana é hoje?');
// if(diaSemana == 'sabado'){
//     alert(`Hoje é ${diaSemana}, então tenha um bom fim de semana!`);
// } else if (diaSemana == 'domingo') {
//     alert(`Hoje é ${diaSemana}, então tenha um bom fim de semana!`);
// } else {
//     alert(`Hoje é ${diaSemana}, tenha uma boa semana!`);
// }

// let numero = prompt('Digite um numero:');
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

// console.log('contador progressivo');
// let contador = 1;
// while (contador <=10 ) {
//     console.log(contador);
//     contador++;
// }

// console.log('contador regressivo');
// let contadorRegressivo = 10;
// while (contadorRegressivo >= 0 ) {
//     console.log(contadorRegressivo);
//     contadorRegressivo--;
// }

// console.log('contador regressivo a partir de um numero inputado');
// let numeroRegressivo = prompt('Informe um numero e verifique o console para ver a magica acontecer');
// while (numeroRegressivo >= 0){
//     console.log(numeroRegressivo);
//     numeroRegressivo--;
// }

// console.log('contador progressivo a partir de um numero inputado');
// let contadorProgressivo = 0;
// let numeroProgressivo = prompt('Informe um numero e verifique o console para ver a magica acontecer');
// while (contadorProgressivo <= numeroProgressivo){
//     console.log(contadorProgressivo);
//     contadorProgressivo++;
// }
//-----------------------------------------------

//DESAFIO FINAL

// console.log('Boas vindas!');

// let nome = 'Ana Clara';
// console.log(`Boas vindas ${nome}!`);

// alert(`Olá, ${nome}!`);

// let linguagemProgramacao = prompt('Qual é a linguagem de programação que você mais gosta?');
// console.log(linguagemProgramacao);

// let valor1 = 8;
// let valor2 = 6;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// let resultado2 = valor1 - valor2;
// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado2}`);

// let idade = prompt('Informe sua idade:');
// if (idade >= 18) {
//     console.log('Você é maior de idade');
// } else {
//     console.log('Você é menor de idade');
// }

// let numero = prompt('Informe um numero');
// if (numero == 0){
//     console.log('O numero é zero');
// } else if (numero > 0){
//     console.log(`O numero ${numero} é positivo`);
// } else{
// console.log(`O numero ${numero} é negativo`);
// }

// let contador = 1;
// while (contador <=10 ) {
//     console.log(contador);
//     contador++;
// }

// let nota = 7;
// if(nota >= 7){
//     console.log('Aprovado!');
// } else {
//     console.log('Reprovado!');
// }

// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);

// let numeroInteiro = parseInt (Math.random() * 10 + 1);
// console.log(`Numero inteiro de 1 a 10: ${numeroInteiro}`);

// let numeroInteiro2 = parseInt (Math.random() * 1000 + 1);
// console.log(`Numero inteiro de 1 a 1000: ${numeroInteiro2}`);

