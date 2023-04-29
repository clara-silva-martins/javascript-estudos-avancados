//Colocar um objeto dentro de um objeto, chama de aninhamento

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["0123456789","7894561230"],
}

/*
Para adicionar uma propriedade nova com um valor é simplesmente criar e atribuir o valor da seguinte forma:
 propriedade.endereco = " casa 5 cj 8 lote 89"

Para criar um objeto dentro de outro objeto é da mesma forma

Propriedade que guarda outro objeto

Usar o objeto para guardar as informações que tenham uma estrutura lógica como o endereço

Ajuda a organizar mais o código

*/

cliente.endereco = {
    rua: "R. São João",
    numero: 10,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco.numero);

//Também pode ser usado a notação de colchetes

console.log(cliente["endereco"]["complemento"]);

console.log(cliente["endereco"].rua)

