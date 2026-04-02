//03-Manipulando Textos
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha m número entre 1 e 10: ';

//04 - Criando uma função
// function verificarChute(){
//     console.log('O botão foi clicado!');
// }

// //05 - Manipulando conteúdo HTML com JavaScript
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Bem-Vindo ao mundo dev';

// //07-Hora Do Desafio
//Questão 2 - exibi a mensagem a hora do desafio
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

// Questão 3 - exibir a mensagem o botao foi clicado
// function exibirMensagem(){
//     console.log('O botao foi clicado');
// }

// Questão 4 - exibir a mensagem eu amo JS
// function exibirAlerta(){
//     alert('Eu amo JS');
// }

// // Questão 5 - criar um programa do nome da cidade do brasil
// function NomeDaCidade(){
//     let nomeDaCidade = prompt('Digite um nome da cidade que voce mais gosta: ');
//     alert(`Se já esteve em cidade ${nomeDaCidade} lembrei de voce`);
// }

// Questão 6 - criar um programa que somar dois numeros e exiba um resultado da soma
// function somandoDoisNumeros() {
//     let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
//     let segundoNumero = parseInt(prompt('Digite o segundo número'));
//     let resultado = primeiroNumero + segundoNumero;
//     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
// }

//02 Funções
//02 - Funções com parametros
//03 - Funções com retorno
//04 - Tipo booleano
// let numeroSecreto = gerarNumeroAleatorio();

// function exibirTextoNaTela(tag,texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1', 'Jogo do número secreto');
// exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100: ');

// function verificarChute(){

//     let chute = document.querySelector('input').value;
//     console.log(chute  == numeroSecreto);
// }
// function gerarNumeroAleatorio(){
//     return parseInt(Math.random() * 10 + 1);
// }

// //06 - Funções que verifica números
// //A resposta desta Questão é a letra D.A letra d é diferente da letra a.
// //Por que a letra A na linha 2 mostra que numero < 0
// function verificarNumero(numero) {
//   if (numero > 0) {
//     console.log("O número é positivo.");
//   } else if (numero < 0) {
//     console.log("O número é negativo.");
//   } else {
//     console.log("O número é zero.");
//   }
// }

//08 - Desafio:Hora da prática

// //Questão 1 - criar uma função que exibe na tela olá mundo
// function olaMundo(){
//     console.log('Olá Mundo');
// }
// olaMundo();

// //Questão 2 - criar uma função que exibe na tela "Ola , [nome]"
// function olaNome(nome){
//   console.log(`Olá ${nome}`);
// }

// olaNome("Viccenzo");

// //Questão 3 - criar uma função que exibe o dobro do numero
// function numeroDoDobro(numero){
//   return numero * 2;
// }

// let numero = numeroDoDobro(6);
// console.log(numero);

// //Questão 4 - Criar uma função que exibe tres soma da media
// function SomaDaMedia(a,b,c){
//   return (a + b + c) / 3;
// }
// let media1 = parseFloat(prompt("Digite o primeiro numero: "));
// let media2 = parseFloat(prompt("Digite o segundo numero: "));
// let media3 = parseFloat(prompt("Digite o terceiro numero: "));

// let resultado = SomaDaMedia(media1 , media2 , media3);
// console.log(media1,media2,media3);
// console.log('O resultado da media é: ' + resultado);
// let mediaDeTresNumero = SomaDaMedia(4,4,28);
// console.log(mediaDeTresNumero);

// //Questão 5 - Criar uma função que recebe dois números entre a e b e retorna maior deles
// function maiorNumeros(a, b){
//   return a < b ? a : b;
// }
// let maior = maiorNumeros(2,3);
// console.log(maior);

//Questão 6 - Criar uma função que recebe um numero
//como parâmetros e retorna a multiplicação por ele mesmo
function AoQuadrado(numero){
  return numero * numero;
}
let raizQuadrado = AoQuadrado(5-4+1);
console.log(raizQuadrado);
