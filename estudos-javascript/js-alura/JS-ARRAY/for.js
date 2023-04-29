const numeros = [100, 200, 300, 400, 500, 600];


// para o cógigo ser mais dinâmico em vez de na segunda expressão ser indice < 6 
//Substitui por numeros.length, que significa a quantidade de numeros da variável, que no caso são 6, por que pode ser um número maior que não se tem conhecimento

for (let indice = 0; indice < numeros.length; indice = indice + 1){
    console.log(numeros[indice]);
}

// entre chaves os dados que serão executados várias vezes
// e assim está a criada a estrtura inicial de um loop

//Primeira expressão: é executada apenas uma única vez, foi declarada a variável
// Segunda expressão: condição de execução
//Terceira expressão: é executada sempre ao final do bloco é o incremento

//Primeira expressão -> console.log -> Terceira expressão que vai incrementar -> Segunda que é condição da expressão -> se sim vai repetir novamente até ser executada as 6 vezes

// Cada executação do loop se chama ITERAÇÃO
// O console.log impre o indice 6 vezes, são 6 iterações

//O console.log(numeros[indice]); 
//Siginifica a const numeros na posiçao indice  que são as 6 vezes solicitados no indice do for