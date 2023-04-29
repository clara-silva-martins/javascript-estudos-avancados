// const notas = [10, 9.5, 8, 7, 6];

// const umPonto = 1;

// //Adicionar um ponto extra a cada nota

// notas.forEach((notaMaispontoExtra) =>{
//     umPonto + notaMaispontoExtra;
// });

// const notasNovas = notas + umPonto;

//precisa do indice

const notas = [10, 9.5, 8, 7, 6];

const notasNovas =  notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1 ;
})

console.log(notasNovas);

//o map() é uma estrutura de repetiçoes, um metodo para fazer repetições, elevai executar essa funçao callback para cada um dos elementos e para cada uma irá reescrever o valor dela, atribuir um novo valor
//o map() é muito apropriado para reescrever arrays
//o map() não altera o array originala
//condicional dentro do map() poderia ser if e else, mas vai ser operador ternário
//para nao deixar que ultrapassem a nota 10, foi usado uma condição com operador ternário, que significa, se nota for maior ou igual a 10 a nota tem que ser somente 10, se não é nota mais 1
//A diferença de forEach() para map() é que o map() permite reescrever o array






