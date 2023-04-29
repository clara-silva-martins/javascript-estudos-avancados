//Acessando dados com operador ponto

const cliente = {
    nome: "Andre",
    idade: "32",
    cpf: "111122223333",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os tres primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)

//Operador de ponto para retornar o valor de uma propriedade

//Chamar métodos desse valor recebido

//Por exemplo chamei uma substring de qual valor começa e em qual termina

//As strings também tem metodos e a substring é um metodo da string

//Pode buscar um valor de uma propriedade e manipular 