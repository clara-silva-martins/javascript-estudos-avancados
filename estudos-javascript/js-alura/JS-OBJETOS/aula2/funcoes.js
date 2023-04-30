const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["0123456789","7894561230"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(50);

//Chamar o comportamento para ele ser executado, depois de descrever ele



//Propriedades que guardam funções
//Função que faz a verificação se a pessoa ja possui saldo para fazer uma compra
//Valor que o cliente vai pagar
//Palavra reservada this.saldo que significa isso referente ao objeto atua, ou a instancia do objeto atual