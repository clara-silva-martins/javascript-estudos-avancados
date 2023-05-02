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

for (let chave in cliente) {
    let tipo =  typeof cliente[chave];
    if ( tipo !== 'object' && tipo != 'function' ){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]} `);
    } 
}