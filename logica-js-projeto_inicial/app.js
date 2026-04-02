// alert('Boas-Vindas ao jogo do número Secreto');
// let numeroSecreto = 10;
// console.log(numeroSecreto)
// let chute = prompt('Escolha um número entre 1 a 10');

// if (chute == numeroSecreto){
//     alert(`Isso aí! voces descobriu o número secreto ${numeroSecreto}`);
// } else{
//     alert('Voce errou :( ');
// }

// let senhaDoSistema = "senhaTeste!";
// let senha = prompt("Digite a senha do sistema: ");
// if(senha == senhaDoSistema){
//     alert("Acesso ao Sistema garantido");
// } else {
//     alert("Senha incorreta!tente novamente");
//}

// //1
// alert("Boas-Vindas ao nosso site!");
// //2
// let nome = "lua";
// //3
// let idade = 25;
// //4
// let numeroDeVendas = 50;
// //5
// let saldoDisponivel = 1000;
// //6
// alert("Erro!Preencha todos os campos");
// //7
// let mensagemDeErro = "Erro!Preencha todos os campos";
// alert(mensagemDeErro);
// //8
// let nomes = prompt("Digitar o nome do usuario: ");
// //9
// let idades = prompt("Digitar a idade: ");
// //10
// let Idade = ("Digitar a idade: ");
// if(Idade >= 18){
//     alert("Pode tirar a habilitação");
// }

// alert('Bem-vindo ao jogo do número secreto')
// let chute = prompt('Escolha um numero entre 1 ae 10: ')
// let numeroSecreto = 4
// console.log(chute == numeroSecreto)
// if(chute == numeroSecreto){
//     alert("Acertou")
// } else{
//     alert("O numero secreto era " + numeroSecreto + " , mas voce escolheu " + chute)
// }

// let idade = prompt("Digite sua idade: ");
// if(idade >= 18){
//     console.log("Voce é maior de idade.");
// } else {
//     console.log("Voce é menor de idade.");
// }


// alert('Bem-Vindo ao jogo do numero secreto')
// let chute = prompt('Escolha um número entre 1 a 10: ')
// console.log("O valor do chute: " , chute );
// let numeroSecreto = 4
// console.log("O resultado da comparação: ", chute == numeroSecreto)
// if(chute == numeroSecreto){
//     alert("Acertou")
// } else{
//     console.log("O valor do numero secreto era: " , numeroSecreto);
//     alert("O numero secreto era " + numeroSecreto)
// }

//1 dia da semana
// let DiaDaSemana = prompt("Digitar o dia da semana: ")
// if(DiaDaSemana == "Sábado"){
//     alert("Bom Fim de semana!");
// } if(DiaDaSemana == "Domingo"){
//     alert("Bom Fim de semana");
// } else{
//     alert("Boas Semana!");
// }

//2 digitar numero positivo ou numero negativo
// let numero = prompt("Digitar numero positivo ou numero negativo: ")
// if(numero > 0){
//     alert("O numero e positivo");
// } else{
//     alert("O numero e negativo");
// }

//3 criar sistema de pontuação do jogo
// let PontuaçãoDoJogo = 105
// if(PontuaçãoDoJogo >= 100){
//     alert('Parabens, voce venceu!')
// } else{
//     alert('Tente novamente para ganhar')
// }

//4 criar programa de saldo disponivel
// SaldoDaConta = 451
// alert(`O seu salario e: R${SaldoDaConta} `)

//5 criar programa para saber seu nome
// let nome = prompt("Digitar seu nome: ")
// alert(`O seu nome e ${nome}`);

// alert('Boas Vindas ao jogo do numero secreto');
// // numero secreto está ligado ao chute
// let numeroSecreto = parseInt(Math.random() * 10 + 1);
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;
// //enquanto chute não for igual ao numero secreto
// while(chute != numeroSecreto){
//     chute = prompt('Escolha um numero secreto entre 1 e 10: ');
//     //Se chute for igual ao número secreto
//     if(chute == numeroSecreto){
//         break;
//     } else {
//         if(chute > numeroSecreto){
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         //tentativas = tentativas + 1;
//         tentativas++;
//     }
// }
// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} 
// ${palavraTentativa}.`);
// if(tentativas > 1){
//     alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else{
//     alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

//5-Contador 1
// let contador = 1;
// while(contador < 4){
//     console.log('Executando a iteração ' + contador);
//     contador = contador + 1;

// }

// //6-Loop Infinito
// //criar um programa que calcula quantidade calculo da media
// let qtdNumeros = prompt("Digite a quantidade de números para o cálculo da média: ");
// let soma = 0;
// let contador = qtdNumeros;
// while(contador > 0){
//     let numero = parseInt(prompt("Digite o numero: "));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;
// console.log(media);

//07 - Desafio hora da prática
//1 - crie um contador que começa 1 e vá ate o 10
// let contador = prompt("Digite um numero: ");
// while(contador <= 10){
//     console.log(contador);
//     contador++;
// }

//2 - Crie um contador que começa 10 e vá a ate o 0
// let Contador = 10;
// while(Contador >= 0){
//     console.log(Contador);
//     Contador--;
// }

//3 - Crie um programa de contagem regressiva
// let numeroMaximo = prompt("Digita um numero para a contagem regressiva: ");
// while(numeroMaximo >= 0){
//     console.log(numeroMaximo);
//     numeroMaximo--;
// }

//4 - crie um programa de contagem regressiva. peça um numero e conte 0 até esse numero
// let numeroMaximos = prompt("Digite um numero para a contagem regressiva: ")
// contadore = 0
// while(contadore <= numeroMaximos){
//     console.log(contadore)
//     contadore++;
// }

//08 - Para saber mais: operadores lógicos
//AND(&&)
// let idade = 25;
// let possuiCarteira = true;
// //se idade é maior que 18 e possui carteira...
// if(idade > 18 && possuiCarteira){
//     console.log("Pode dirigir!");
// } else {
//     console.log("Não pode dirigir.");
// }

// //OR(||)
// let temMaçã = false;
// let temBananas = true;
// //se tem maçã ou tem banana...
// if(temMaçã || temBananas){
//     console.log("Você tem frutas");
// } else{
// }

// //Questão 1
// console.log("Boas-Vindas");
// //Questão 2
// let nome = ('Viccenzo');
// console.log(`Olá , ${nome}!`);
// //Questao 3
// let nomes = ('Viccenzo');
// alert(`Olá , ${nome}`);
//Questao 4
// let linguagem = prompt("Qual a linguagem de prgramação que você mais gosta? ");
// console.log(linguagem);
//Questao 5
// let valor1 = 12;
// let valor2 = 12;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
// //Questao 6
// let Valor1 = 34;
// let Valor2 = 23;
// let Resultado = Valor1 - Valor2;
// console.log(`a diferença ${Valor1}  e ${Valor2} é igual a ${Resultado}`)
// // //Questao 7
// // let idade = prompt('Digite a sua idade: ')
// // if(idade > 17){
// //     console.log('Você é maior de idade.')
// // } else{
// //     console.log('Você é menor de idade.')
// // }
// // //Questao 8
// // let numero = prompt("Digite um numero: ");
// // if(numero > 0){
// //     console.log("O numero é positivo.")
// // } else if(numero < 0){
// //     console.log("O numero é negativo.")
// // } else {
// //     console.log("O numero é zero.");
// // }
// // //Questao 9
// // let numeros = 1;
// // while(numero <= 10){
// //     console.log(numeros);
// //     numeros++;
// // }
// // //Questao 10
// // let nota = 8;
// // if(nota >= 7){
// //     console.log("Aprovado");
// // } else{
// //     console.log("Reprovado");
// // }
// // //Questao 11
// // let Numero = Math.random();
// // console.log(Numero);
// // //Questao 12
// // let Numeros = parseInt(Math.random() * 10) + 1;
// // console.log(Numeros);
// // //Questao 13
// // let numeroInteiro = parseInt(Math.random() * 1000) + 1;
// // console.log(numeroInteiro);
