const notas = [7, 7, 8, 9];

//Crie um novo array com a nota 10 a mais, sem alterar o array original
// Dessa forma altera o array original
//Atribuição direta o js entende que a partir desse momento sao o msm é como se apontassem para o msm endereço da memória
// qualquer nova alteração vai alterar o array original

//const novasNotas = notas;
//operador do JavaScript que se chama spread operator ou operador de espalhamento, o que ele vai fazer é pegar todo o conteudo do array e vai espalhar todos seus valores nesse local questa sendo escrito, é como se copiasse o array original. Essa é a forma do JavaScript fazer uma cópia de um array

//const novasNotas = [...notas];
//novasNotas.push(10);

const novasNotas = [...notas, 10];

// Essa é uma forma de adicionar um novo elemento, sem precisar adicionar a linha de push.
// É bem flexivel essa sintaxe de espalhamento, pode ser no final ou no inicio separado por virgula
// É um operador útil para clonar/ copiar arrays


console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
