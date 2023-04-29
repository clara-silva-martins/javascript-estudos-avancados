let compras = ["Cenoura", "Chuchu", "Batata", "Tomate", "Brocólis"];
let valor = [4.00, 2.00, 5.50, 6.00, 7.00];

let listaDeCompras = [compras, valor];

function listaMercado(verduras){
    if (listaDeCompras[0].includes(verduras)){

        let posicao = listaDeCompras[0].indexOf(verduras);

        let preco = listaDeCompras[1][posicao];

        console.log(`${verduras} está R$ ${preco} o kilo.`)

    } else {
        console.log(`Item não disponível`)

    }
}

listaMercado("Tomate");