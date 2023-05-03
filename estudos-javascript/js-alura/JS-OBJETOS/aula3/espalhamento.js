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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

ligaParaCliente(...cliente.telefone);


/*
É uma função externa, então não tem como alterar ela, a função tem dois parametros chamando o telefone comercial e outra chamando o telefone residencial. Por fim chama a funçao na posição de indice 0 e de indice 1, que são os dois numeros cadastrados.

Com o espalhamanto, ao invez de usar dessa forma escrevendo o indice, pode usar o metodo de espalhamento, que vai chamar a função do mesmo jeito. Essa sintaxe de espalhamento fez com que espalhasse o array no momento da chamada

Com arrays e funções é possivel fazer

Mas e com objetos? Também é possível usar a sintaxe de espalhamento com objetos tbm

*/

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

//Com essa sintaxe de espalhamento fica apenas um objeto, não deixa fragmentado, um objeto, depois uma lista com um objeto, todos compõe o mesmo, ou seja ele pega todo o conteudo do objeto e espalha todos os seus valores na chamada do console.log