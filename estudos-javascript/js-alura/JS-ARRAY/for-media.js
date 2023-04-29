const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//Nessa variável soma todas as notas dentro do for

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

//Dentro das chaves chama a variável das somas das notas que é zero, += que soma com notas na posição i que é 0.
// Então quando o cógido é executado primeiro começa i na posição 0 dentro do for, depois somaDasNotas += notas na posição 0, que é o 10 na posição 0
//Segunda etapa é a condição que se for true continua o código e incremente, fazendo que avance para a posição 1.
//Assim na posição 1 é somaDasNotas += nota 6.5 na posição 1, a segunda etapa é a condição que satisfaz e incremente ao 10 entao fica 10 + 6.5 e segue até terminar todos os números do array

//O somaDasNotas += notas[i];
//Significa na verdade que vai ser incrementado nessa variável somaDasNotas notas na posição i, no caso começa em 0 vai ser 10, e o valor de somaDasNotas passa a ser 10 até repetir novamente e incrementar 10 que é somaDasNotas + a nota da posição 1 que é 6.5 e assim por diante.