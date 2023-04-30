//Lista com objetos ou Objetos dentro de uma lista

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["0123456789","7894561230"],
}

cliente.enderecos = [ {
    rua: "R. São João",
    numero: 10,
    apartamento: true,
    complemento: "ap 934",
},
];

//Adicionou um novo endereço com push, sendo esse novo endereço um objeto por esta entre chaves

cliente.enderecos.push({
    rua: "São José",
    numero: 2,
    apartamento: false,
    complemento: "ap 501"
});

//Agora é possível usar qualquer método de array, nesse caso o filter onde está filtrando o endereço e apartamento que é true

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) =>  endereco.apartamento === true 
);

console.log(cliente.enderecos);

console.log(listaApenasApartamentos);