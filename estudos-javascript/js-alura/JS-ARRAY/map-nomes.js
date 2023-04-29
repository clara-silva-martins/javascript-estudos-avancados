const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

console.log(nomesPadronizados);

//o map() serve para reescrever os elementos de um array, e fazer concionais dentro do map()
// tudo que está dentro da arrow function é retornar um valor, ou seja, pode omitir o return e as chaves do corpo da função

const nomesPadronizadoss = nomes.map((nome) => nome.toUpperCase());