const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas){
    somaDasNotas += nota
}

console.log(somaDasNotas);

//For of nao é tao flexivel mas é mais sucinta

//Como ele entendeu que tem que dividir o valor pela quantidade de posições??

//Bem mais curto e legível

//Para cada nota de notas quero fazer um incremento em somaDasNotas das notas em questao

// com esse for of que é for(let elemento of notas) consigo ver as notas, então seria ver os elementos de notas e executar o console dentro das chaves

// unica expressao

//adequado para usar junto com arrays

// no for classico é mais naual declarando variavel de controle, incrementa manualmente e sempre faz uma condiçao para executar

//no for of faz esses comandos automaticamente por debaixo dos panos

//quando diz que quer percorrer um array de notas , usa se o for of, do inicio ao fim

//vantagem q pode pegar o valor de elemento, o valor de cada item diretamente e dar um console.log etc

//ou até msm a soma de todas as notas
