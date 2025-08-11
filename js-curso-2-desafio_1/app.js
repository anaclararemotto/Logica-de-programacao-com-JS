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