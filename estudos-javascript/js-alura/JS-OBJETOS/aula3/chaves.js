const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["0123456789","7894561230"],
};

cliente.enderecos = [ {
    rua: "R. São João",
    numero: 10,
    apartamento: true,
    complemento: "ap 934",
},
];

//Vai ser utilizado uma classe
//Conjunto de várias funções que vai ajudar a lidar com objeto
//Essa funçao vai retornar um array que vai retornar todas as chaves do objeto cliente
//nao da pra confiar no ordamento, o objeto nao tem questao de ordanamento entre suas propriedades
//Se for verdadeiro vai negar a expressao por causa do sinal de exclamação(!), para nao ser executado o bloco dentro de if
//Se for falso a expressão ai vai executar a expressao de erro

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado")
};