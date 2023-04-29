const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet];

//Dessa forma retira o set(4) que aparece no inicio

const nomesAtualizados = [...new Set(nomes)];

//Dessa forma é mais direta, e o resultado é o mesmo

console.log(nomesAtualizados);

//Dessa forma ele exclui os valores repetidos da lista, do array

//Set significa conjunto
//new Set() é tipo criar um novo set ou um novo conjunto, o Set maiusculo é uma classe do javascript
//Os elementos de um Set não podem se repetir
// passar uma lista dentro dos parenteses ou seja um array dentro dos parenteses do Set

//const meuSet = new Set([1, 1, 2, 2, 3, 4, 4]);

//console.log(meuSet);

//Vai  retornar Set(4) {1, 2, 3, 4}