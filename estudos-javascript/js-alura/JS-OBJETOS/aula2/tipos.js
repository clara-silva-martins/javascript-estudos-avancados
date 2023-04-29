//Arrays dentro de objetos

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["0123456789","7894561230"],
}

/*
É possível também guardar estrturas um pouco mais elaboradas

Uma forma de agrupar informações parecidas é com os arrays/listas

É possível também armazenar uma lista dentro de um objeto, é só dentro do valor, apos os dois pontos (:) da chave, adicionar um colchetes de array e separar o outro elemento por uma virgula. Adicionar como se fosse um segundo elemento no array.

É um array como qualquer outro so que esta guardado numa propriedade de um objeto
*/

console.log(cliente.telefone);
