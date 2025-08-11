
function saudacao() {
    console.log('Olá mundo');
    
}
saudacao()

function exibirNome(nome){
    console.log(`Olá, ${nome}`)
}
exibirNome('clara')

function calcularDobro(numero){
    return numero *2
}
let resultadoDobro = calcularDobro(8);
console.log(resultadoDobro);

function calculaMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let resultadoMedia = calculaMedia(5,8,9);
console.log(resultadoMedia);

function encontraMaior(num1, num2){
    return num1 > num2 ? num1 : num2;
}
let resultadoMaior = encontraMaior(2, 15);
console.log(resultadoMaior);

function calculaQuadrado(numero) {
    return numero * numero;  
}
let resultadoQuadrado = calculaQuadrado(7);
console.log(resultadoQuadrado);
