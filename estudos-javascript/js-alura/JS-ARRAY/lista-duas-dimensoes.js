const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}
A média desta aluna é: ${listaDeAlunosEMedias[1][1]}`);


// uma lista composta de outras listas
// o primeiro colchete é para escolher qual dos array dentro do array principal será acessado
// o segundo colchete  será usado para acessar a informação dentro do array escolhido.
//onde o [0] corresponde a variavel alunos da lista de alunos que irá ser acessada
// e o [1] corresponde a posição 1 da várival alunos que foi acessada anteriormente
// dentro da template string ainda é possível escrever novamente uma frase e usar o mesmo jeito, mostrar a posição da media que é [1] e depois mostrar a posição da nota de juliana

//console.log(listaDeAlunosEMedias);