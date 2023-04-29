//Acessando dados com colhetes

const cliente = {
    nome: "Andre",
    idade: "32",
    cpf: "111122223333",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

//Os colchetes é são usados quando não temos acesso ao nome das propriedades ou seja as chaves da propriedade, por serem muitas

//Podemos utilizar o nome da propriedade como string dentro de colchetes para acessar as propriedades de um objeto de forma mais dinamica

//Situação em que não se tem o dado/nome/valor das chaves, mas que as chaves foram passadas, que é nome, idade, cpf e email

//Para buscar o valor da chave tem que usar o metodo array forEach() para percorrer a lista e achar o valor das chaves


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave)=>{
    console.log(`A chave é ${chave} tem valor ${cliente[chave]}`)
});

//laço de repetição forEach()

//o valor de chave é uma string, uma string dentro de colchetes, depois de um objeto e vai acessar uma propriedade

//Acessar uma chave que não tem valor vai aparecer //undefined


