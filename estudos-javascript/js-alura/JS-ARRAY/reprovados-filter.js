const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_,indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

/*
-Nesse método é necessário criar uma const para o novo array que vai surgir da operação, assim como o map.
-A diferença desse metodo para o forEach() e o map() é que nesse metodo entre chaves vai ser utilizado a const medias e o indice que é um dos parametros de filter, e a comparação. Dessa comparação que pode ser true ou false, se for true vai filtrar o nome do reprovado.
- A utilidade dela é que além de comparar, true ou false vai também filtrar o dado.
- dentro do parametro, se nao estiver usando o primeiro parametro, apenas o segundo, como é o caso usa o _ (underline)
-Deve ser retornado da função callback para que o metodo filter funcione, um booelano, pois quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, o elemento é descartado.
*/

