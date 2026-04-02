// // 02 - Documentação sobre listas
// // 03 - Implementação a lista
// // 04 - Limitando os numeros sorteados
// let listaDeNumeroSorteados = [];
// let limiteDeBalões = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;
// function exibirTextoNaTela(tag,texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }
// function exibirMensagemInicial() {
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
// }
// exibirMensagemInicial();
// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1', 'Acertou!');
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
//         exibirTextoNaTela('p',mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if(chute > numeroSecreto){
//             exibirTextoNaTela('p', 'O numero secreto é maior');
//         } else{
//             exibirTextoNaTela('p', 'O numero secreto é menor');
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * limiteDeBalões + 1);
//     let quantidadeElementoNaListaDeBaloes = listaDeNumeroSorteados.length;

//     if(quantidadeElementoNaListaDeBaloes == 10){
//         listaDeNumeroSorteados = [];
//     }
//     if(listaDeNumeroSorteados.includes(numeroEscolhido)){
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumeroSorteados.push(numeroEscolhido);
//         console.log(listaDeNumeroSorteados);
//         return numeroEscolhido;
//     }
// }
// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = '';
// }
// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
// }

// // // 05 - Manipulação de listas em JavaScript
// // let listaCompras = [];

// // listaCompras.push("Maçã");
// // listaCompras.push("Arroz");
// // listaCompras.push("Leite");
// // listaCompras.push("Pão");
// // listaCompras.push("Carne");

// // console.log(listaCompras.length);
// // console.log(listaCompras[3]);

// // //06 - Para saber mais vamos ler mais sobre lista
// // // variavel fruta = indice(0) , indice(1), indice(2), indice(3)
// // let frutas = ["Maçã" , "Uva" , "Laranja","Morango"];

// // console.log(frutas[0]);
// // console.log(frutas[1]);
// // console.log(frutas[2]);
// // console.log(frutas[3]);
// // // frutas.push("Morango");
// // frutas.pop();
// // console.log(frutas);


// // let resultado = Number(prompt('Digite um numero: '));
// // let numero = [1,2,3,4,5];

// // for(let i = 1; i < numero.length; i++){
// //     resultado *= numero[i];
// // }

// // console.log(resultado);

// // let numero = 1;
// // let resultado = [1,2,3,4,5];
// // let contador = 1;

// // while(numero < resultado.length){
// //     contador *= resultado[numero];
// //     numero++;
// // }

// // console.log(contador);

// // // Questão 1 - crie uma lista vazia com o nome lista generica
// // let listaGenerica = [];

// // console.log(listaGenerica);

// // Questão 2 - crie uma lista linguagens de programação
// let linguagensDeProgramação = ['JavaScript','C','C++','kotlin' ,'Python'];

// console.log(linguagensDeProgramação[0]);

// // Questão 3 - adicione as lista linguagens de programação os seguintes elementos: 'Java','Ruby','GoLang';
// let LinguagensDeProgramação = ['Java' , 'Ruby' , 'GoLang'];

// LinguagensDeProgramação.push('Java','Ruby','Golang');

// Questão 4
// let LinguagensDeProgramação = ['JavaScript', 'Python', 'GoLang'];
// console.log(LinguagensDeProgramação[0]);
// Questão 5
// let LinguagensDeProgramação = ['JavaScript', 'Python', 'GoLang'];
// console.log(LinguagensDeProgramação[1])
// Questão 6
// let LinguagensDeProgramação = ['JavaScript','Python','GoLang'];
// console.log(LinguagensDeProgramação[2]);

// Exercicio Condicionais if
//Exercicio 1
// let angulo = Number(prompt('Digite um angulo: '));
// if(angulo < 90){
//     console.log('O angulo é reto');
// } else if(angulo > 90){
//     console.log('O angulo é agudo');
// } else if (angulo == 90){
//     console.log('O angulo é obtuso');
// }

// //Exercicio 2 - Calcular o conceito da nota A, B , C ,D e F
// let nota = parseFloat(prompt('Digite a nota: '));
// if(nota >= 9.0){
//     console.log('Conceito A');
// } else if(nota < 9.0 && nota >= 8.0){
//     console.log('Conceito B');
// } else if(nota < 8.0 && nota >= 7.0){
//     console.log('Conceito C');
// } else if(nota < 7.0 && nota >= 6.0){
//     console.log('Conceito D');
// } else if(nota < 6.0){
//     console.log('Conceito F');
// }

// // Exercicio 3 - Calcular Tres lados de um triangulo
// let lado1 = parseFloat(prompt('Digite numero um: '));
// let lado2 = parseFloat(prompt('Digite numero dois: '));
// let lado3 = parseFloat(prompt('Digite numero tres: '));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//     console.log('Os numeros pode formar um triangulo');
// } else{
//     console.log('Os numeros nao pode formar um triangulo');
// }

// // Questão 23 - Calcular o valor de um bonus
// let horaExtra = parseFloat(prompt('Digite a quantidade de hora extra: '));
// let faltas = parseFloat(prompt('Digite quabtidade de falta: '));
// let pontos = horaExtra - 2/3 * faltas;

// if(pontos > 40){
//     console.log('');
// }