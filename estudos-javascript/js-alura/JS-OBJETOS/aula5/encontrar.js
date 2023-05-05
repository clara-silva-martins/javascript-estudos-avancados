const dadosClientes = require("./clientes.json");

//console.log(dadosClientes);

//metodo find() de array

//pegar o item dentro dessa chave e comparar se é igual o valor que estamos procurando

function encontrar(lista, chave, valor){
    // return lista.find((item) => item[chave] === valor);
    //É a mesma coisa, é um metodo de array que vai saber se o valor está incluido. No exemplo de cima vai ver se é igual o valor que foi passado
    return lista.find((item) => item[chave].includes(valor));

}

const encontrado = encontrar(dadosClientes, "nome", "Kirby");

const encontrado2 = encontrar(dadosClientes, "telefone", "19918820860");

console.log(encontrado);