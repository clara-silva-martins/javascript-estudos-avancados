const itens = ["Blusas", "Shorts", "Calças", "Casaco", "Calcinhas", "Biquinis"];
const quantidade = [3, 2, 2, 1, 7, 4];

const levarPraViagem = [itens, quantidade];

function itensPraViagem(roupas){
    if (levarPraViagem[0].includes(roupas)){

        const indice = levarPraViagem[0].indexOf(roupas);

        const quantos = levarPraViagem[1][indice];

        console.log(`Vou levar para para viagem ${quantos} ${roupas}.`)

    } else{

        console.log(`Esse item não está na lista vou precisar comprar.`)

    }
}

itensPraViagem("Blusas");

