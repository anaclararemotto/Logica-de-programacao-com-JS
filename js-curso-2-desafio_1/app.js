//EXERCICIOS

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole() {
    console.log('O botão foi clicado');    
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('Digite uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    let valor1 = parseFloat(prompt('Digite um numero:'));
    let valor2 = parseFloat(prompt('Digite outro numero:'));
    let resultado = valor1 + valor2;
    alert(`o resultado da soma de ${valor1} e ${valor2} é igual a ${resultado}`)
}

function calculaIMC(altura, peso) {
  imc = peso / (altura * altura);

  console.log(`Seu IMC é equivalente a: ${imc}`);
}

calculaIMC(1.9, 80);

function calculaFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

let numero = 5;
let resultado = calculaFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function converteParaDolar(dolar, valor) {
  resultado = dolar * valor;
}

let dolar = 4.8;
let valor = 5;
let resultadoConvercao = converteParaDolar(dolar, valor);
console.log(`${valor} é igual a ${resultado} dolares`);

// function converterDolarParaReal(valorEmDolar) {
//   let cotacaoDolar = 4.80;
//   let valorEmReais = valorEmDolar * cotacaoDolar;
//   return valorEmReais.toFixed(2);
// }

// // Exemplo de uso
// let valorEmDolar = 50;
// let valorEmReais = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

function calcularAreaPerimetroRetangulo(altura, largura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);

  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 5;
let largura = 3;

calcularAreaPerimetroRetangulo(altura, largura);

function calcularAreaPerimetroCirculo(raio) {
  let pi = 3.14;

  let perimetro = 2 * pi * raio;
  let area = Math.PI * raio * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

raio = 5;
calcularAreaPerimetroCirculo(raio);

function mostrarTabuada(numero) {
    // i = 1; enquanto i for menor ou igual a 10, i incrementa
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
    
  }
}

let numeroTabuada = 5;
mostrarTabuada(numeroTabuada)

let listaGenerica = [];
console.log(listaGenerica);

let linguagensDeProgramação = [ 'JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramação);
linguagensDeProgramação.push('Ruby', 'Java', 'GoLang');
console.log(linguagensDeProgramação);

let listaNomes = ['Pedro', 'Tiago', 'João'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
let ultimoNome = listaNomes[listaNomes.length -1];
console.log(ultimoNome);

