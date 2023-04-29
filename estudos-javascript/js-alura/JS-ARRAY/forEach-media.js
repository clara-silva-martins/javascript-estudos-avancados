const notas = [10, 6.5, 8, 7.5];

//forEach() é um metodo do array que precisa ser passados parametros
//é passado outra função dentro desse parametro que é uma função anonima que tbm é callback
//forEach também é uma estrutura de repetição, só que é metodo do array do js
//quando uma função é passada como parametro de outra função forEach, ai a função passada é chamada de callback, que significa chamar de volta
//função guardada na logica do js e vai ser chamada de volta em alguns momentos
///Vai ser chamada para cada elemento do array de notas, e toda vez que for chamada para cada elemento vai imprimir oq ta escrito no console log, por isso ele vai imprimir 4 vezes que são a quantidade de notas 
//nao somos nos que estamos utilizando a função anonima, não é a gente que define que define o valor desse parametro nota, quem define ele é a logica interna do javascript 
//em algum momento quando executar a função anonima ele vai passar o valor da nota correspondente que está sendo iterada lá
//mais de logica interna
//o parametro que for passado vai ser interpretado como nossa nota e pode ser utilizada do jeito que quiser
//função anonima como função pois a functicon nao tem nome apenas o parametro

let somaDasNotas = 0;

notas.forEach(function (valor) {
    somaDasNotas += valor;
});

const media= somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//Então é isso o forEach é um metodo do array que é usado para repetição. Dentro do seu parametro é colocado uma função anonima na qual é escolhido um parametro qualquer, e dentro da logica interna do javascript vai ler entender como o valor correspondente do array notas que está sendo iterada pelo javascript que é ele que utiliza a função anonima e define o valor desse parametro
// logica parecida com for of
// ele fornece diretamente o valor do elemento do array
//Sempre vai do inicio ao fim do array
//forEach tem a vantagem de poder passar mais de um parametro na função anonima, alem do valor do elemento, pode ter acesso a posição tambem ou o indice, e assim descobrir o valor do elemento e sua posição
//No forEach é obritagorio fornecer um parametro para esse metodo, que é uma função que recebe um elemento, essa função tem o nome de callback, e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o indice e o array atual