// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor 

// var valor1 = parseInt(prompt("Informe o primeiro valor: "));
// var valor2 = parseInt(prompt("Informe o segundo valor: "));

// valor1 = Number(valor1);
// valor2 = Number(valor2);

// while (valor2 <= 0) {
//     valor2 = prompt("O segundo valor deve ser maior que zero. Informe um novo valor:");
//     valor2 = Number(valor2);
// }


// var resultado = valor1 / valor2;
// alert(resultado);


// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

// var tempo = 30;
// function atualizarTempo() {
//   document.write(tempo + "<br>");
//   tempo--;

//   if (tempo < 0) {
//     document.write("EXPLOSÃO");
//     return;
//   }
//   setTimeout(atualizarTempo, 1000);
// }
// atualizarTempo();


// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
// Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (var n = 10; n >= 1; n--) {
//     document.write(n + "<br>");
// }


// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

// var soma = 0;
// var contador = 0;

// for (var i = 15; i <= 100; i++) {
//     soma = soma + i;
//     contador = contador + 1;
// }

// var media = soma / contador;

// alert( "A média aritmética é: " + media);


// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

// var n1 = parseInt(prompt("Insira o Menor número:"))
// var n2 = parseInt(prompt("Insira o Maior número:"))
// var soma = 0;
// var contador = 0;

// for (var i = n1; i <= n2; i++) {
//     soma = soma + i;
//     contador = contador + 1;
// }

// var media = soma / contador;

// alert("A média aritmética é: " + media);


// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

// var alunosAprovados = 0;
// var calcularNovoAluno = true;

// while (calcularNovoAluno) {
//   var nota1 = parseFloat(prompt("Informe a primeira nota: "));
//   var nota2 = parseFloat(prompt("Informe a segunda nota: "));

//   var media = (nota1 + nota2) / 2;

//   if (media >= 9.5) {
//     console.log("O aluno foi aprovado com média " + media.toFixed(2));
//     alunosAprovados++;
//   } else {
//     console.log("O aluno foi reprovado com média " + media.toFixed(2));
//   }

//   var resposta = prompt("Calcular a média de outro aluno? (S/N)");

//   if (resposta.toUpperCase() === "N") {
//     calcularNovoAluno = false;
//   }
// }
// alert("Foram aprovados " + alunosAprovados + " alunos.");

// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário

// var notas = [];
// var nota;
// var i = 0;
// var soma = 0;

// while (i < 6) {
//   nota = parseFloat(prompt("Informe a nota " + (i+1) + ": "));
//   if (nota >= 0 && nota <= 10) {
//     notas.push(nota);
//     soma += nota;
//     i++;
//   } else {
//     alert("Nota inválida. Informe uma nota entre 0 e 10.");
//   }
// }

// var media = soma / notas.length;

// alert("A média do aluno é: " + media.toFixed(2));

// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive).
// Considere que o N será sempre maior que ZERO.
// N  é um valor informado pelo usuário.

// let numero = parseInt(prompt("Informe o valor de N, que seja inteiro positivo: "));

// while (numero <= 0 || isNaN(numero)) {
//     numero = parseInt(prompt("Número invalido. Digite um número inteiro positivo: "));
// }

// for(let i = 1; i<= numero; i++) {
// document.write (`${i}, `);
// }


// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

// for(let i = 100; i<= 110; i++ ){
//     document.write (`${i}, `);
// }


// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N.
// N será informado pelo usuário.

// const N = prompt("Digite o valor de N: ");

// for (let i = 1; i <= N; i++) {
//     alert(`A tabuada do ${i}: `);
//     for(let t = 1; t <= 10; t++){
//         alert(`${i} x ${t} = ${i * t}`);

//     }
//     alert();
// }


// 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

// var dentroDoIntervalo = 0;
// var foraDoIntervalo = 0;

// for(let i = 1; i <=10; i++){
//     const valor = Number(prompt(`Digite o ${i} valor: `));
//     if(valor >= 24 && valor <= 42){
//         dentroDoIntervalo++;
//     }
//     else{
//         foraDoIntervalo++;
//     }
// }

// document.write(`${dentroDoIntervalo} Valores estão dentro do intevalo de 24 a 42 <br>`)

// document.write(`${foraDoIntervalo} Valores estão fora do intevalo de 24 a 42`);








