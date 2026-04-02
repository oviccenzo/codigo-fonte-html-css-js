// // 02 - Verificando o chute
// // 03 - Contando tentativas
// // 04 - Botão reiniciar
// // 05 - Reiniciando o Jogo
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag , texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1', 'Jogo do número secreto 2.0!');
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// function exibirMensagemInicial(){
    
//     exibirTextoNaTela('h1', 'Jogo do número secreto 2.0!');
//     exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// }

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     if(chute == numeroSecreto){
//         exibirTextoNaTela('h1' , 'Acertou');
//         //Condição ? se_for_verdadeiro : se_for_falsa
//         let palavraTentativa = tentativas > 1 ? ' tentativas ' : ' tentativa ';
//         let mensagemTentativa = `Você acertou o número com ${tentativas} ${palavraTentativa}`;
//         exibirTextoNaTela('p', mensagemTentativa);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if(chute > numeroSecreto){
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p' , 'O número secreto é maior');
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gerarNumeroAleatorio() {

//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo(){
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo(){
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled' , true);
// }

//06 - Calculadora de Média e Situação do Aluno
// let nota1 = parseFloat(prompt('Digite numero um: '));
// let nota2 = parseFloat(prompt('Digite numero dois: '));
// let nota3 = parseFloat(prompt('Digite numero tres: '));
// let nota4 = parseFloat(prompt('Digite numero quatro: '));

// function verificarAprovação(media) {
//     //Condição ? se_for_verdadeiro : se_for_falsa é o operador ternário
//     //media >= 5 ? " Aprovado " : "Reprovado"
//     return media >= 5 ? " Aprovado " : " Reprovado ";
// }

// function calcularMedia(){
//     // Media é calculada e depois returna na linha 8 para saber se maior que 5
//     let media = (nota1 + nota2 + nota3 + nota4) / 4;
//     return media;
// }

// let media = calcularMedia();
// console.log(`A soma da media das quatro nota é: ${media}`);
// console.log(verificarAprovação(media));


//07 - Desafio: hora da prática
// Questão 1 - Criar um programa que Calcular o imc de uma pessoa
// function imc(altura,peso){
//     let imc = peso * (altura / altura);
//     return imc;
// }
//

// function imc(altura, peso){
//     let imc = peso / (altura * altura);
//     return imc;
// }

// let peso = parseFloat(prompt('Digite o peso: '));
// let altura = parseFloat(prompt('Digite a altura: '));
// let resultadoDoImc = imc(peso,altura);
// console.log(`O imc de uma pessoa é: ${resultadoDoImc.toFixed(2)}`);
  

// Questão 2 - Criar um programa que calcular o fatorial
// function valorFatorial(n){
//     let fatorial = 1;
//     for(let i = 2; i <= n; i++){
//         fatorial *= i;
//     }
//     return fatorial;
// }

// let numero = Number(prompt('Digite um numero: '));
// console.log(valorFatorial(numero));

//
// //Questão 3 - Criar um programa que converte dolar em equivalente a reias
// function valorDaCotação(valorEmDolar) {
//     let dolar = 4.8;
//     let valor = dolar * valorEmDolar;
//     return valor.toFixed(2);
// }

// let valorEmDolar = parseFloat(prompt('Digite um numero: '));
// let valorEmReais = valorDaCotação(valorEmDolar);
// console.log(`O valor de ${valorEmDolar} equivalem a R$ ${valorEmReais} `);

//Questão 4 - Criar um programa que calcular aréa e o perímetro de um circular
// function CalcularAreaRetangulaDeUmaSala(altura,largura){

//     let area = altura * largura;
//     let peri = 2 * (largura + altura);

//     alert(`A altura da sala da area é: ${area} metro ao quadrado`);
//     alert(`O perimetro da sala é: ${peri} metros`);
// }

// let altura = 4;
// let largura = 8;
// CalcularAreaRetangulaDeUmaSala(altura,largura);
//Questão 5 - Criar um programa que calcular area é a perimetro circular de uma sala
// // utilizando seu raio como parâmetro. considere PI = 3.14π
// function CalcularAreaCircularDeUmaSala(raio) {
//     let area = Math.PI * raio * raio;
//     let peri = 2 * Math.PI * raio;

//     console.log(`A area circular da sala é:  ${area.toFixed(2)}`);
//     console.log(`O perimetro da sala é:  ${peri.toFixed(2)}`);
// }

// let raio = Number(prompt('Digite um numero: '));
// CalcularAreaCircularDeUmaSala(raio);

// //Questão 6 - Criar um programa que calcula um numero da tabuada como parâmetro

// function tabuada(numero){
//     for(i = 1; i <= 10; i++){
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }
// let numero = prompt('Digite um numero: ');
// tabuada(numero);

//Exemplo 1
// Template strings ou template literals
// const palavra = 'interpolada';
// console.log(`Minha template literal ${palavra}`);

// Exemplo 2
// Tag é a função chamada atraves da utilização da template literals
// minhaFunction = (texto) => {
//     console.log(texto);
// }
// minhaFunction( `texto como parâmetro` );

//Exemplo 3: template literals e é o parametro sendo um array
//nao funciona dar o erro ao cumpilar
// minhaFunction([`Texto como parâmetro`]);
// minhaFunction`texto como parametro`;

// Exemplo 4: do uso template literals é a capacidade de interpolar
// minhaFunction = (arrayDeStrings , palavra) => {
//     console.log(`${arrayDeStrings[0]} ${palavra} ${arrayDeStrings[1]} `);
// }
// const palavra = 'alura';
// minhaFunction`Eu estudo na${palavra}todos os dias`;

// //Exemplo 5: uso da string quebrada ao meio
// minhaFunction = (arrayDeStrings, palavra) => {
//     console.log(`${arrayDeStrings[0]} ${palavra} ${arrayDeStrings[1]}`);
// }
// const palavra = ' alura ';
// minhaFunction([`Eu estudo na ` , ` todos os dias `] ,palavra);

// //Exemplo 6: uso do valores interpolado passado como array
// minhaFunction = (arrayDeStrings, palavra, periodo) => {
//     console.log(`${arrayDeStrings[0]} ${palavra} ${arrayDeStrings[1]} ${periodo}`);
// }
// const palavra = 'alura';
// const periodo = 'semana';
// //As duas chamadas são equivalentes!
// minhaFunction`Eu estudo ${palavra} todos os dias da ${periodo}`;
// minhaFunction([`Eu estudo na `, ` todos os dias `], palavra, periodo);

//Exemplo 7: uso da tag strong passado atraves de cifrão e abre e feche colchete -> simbolo ${}
// e destacar uma fresa em negrito (tag strong)
// function negrito(arrayStrings, ...valores){
//     return arrayStrings.reduce((acumulador, string, i) => {
//         return `${acumulador} ${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`
//     }, '');
// }

// const nome = 'Paulo Scalercio';
// const redeSocial = '@PauloScalercio';
// console.log(negrito `${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e voce pode encontrá-lo nas rede sociais procurado por ${redeSocial}`);

