function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplicacao(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplicacao(soma(2,4), soma(3,5)))

//console.log(soma(2,2))

function nomeIdade(nome,idade){
    return `meu nome é ${nome}, tenho ${idade} anos.`;
}

//console.log(nomeIdade("Clara",24))