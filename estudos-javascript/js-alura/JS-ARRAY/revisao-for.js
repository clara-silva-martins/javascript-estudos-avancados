// const lista = [1, 2, 3, 4, 5];

// for (let indice = 0; indice < lista.length; indice++) {
//  console.log(lista[indice]); 
// }

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) 

lista.forEach(numero => {
    soma += numero
   });

