const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas =  notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

   const media = somaDasNotas / notasDaSala.length;

   return media;

}

console.log(`A média da sala Javascript é  ${calculaMedia(salaJS)}`);
console.log(`A média da sala Javascript é  ${calculaMedia(salaJava)}`);
console.log(`A média da sala Javascript é  ${calculaMedia(salaPython)}`);

// podem ser passado depois do primeiro parametro que é a função callback, vem o segundo paramentro que é o 0 ou qualquer outro elemento
// ele faz o papel da soma das notas, vai somando um atrás do outro acumulando os valores
// retornar para função callback o acumulador + nota
// notasDaSala é o parametro da função
// acumular e nota sao os parametros de reduce