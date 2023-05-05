const clientes = require("./clientes.json");


    const listaClientesEnderecoIncompleto = clientes.filter((cliente) =>{
        if(cliente.endereco.apartamento === true){
          if(cliente.endereco.complemento === undefined){
            return cliente;
          }
        }
    });


    listaClientesEnderecoIncompleto.forEach(cliente => {
        console.log('Sr(a) ' + cliente.nome + ' por favor complete o seu endereço.');

        

    });