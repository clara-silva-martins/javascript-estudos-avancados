const pessoa = {
    nome: "Luma", 
    profissão: "Engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222333444"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

//Isso não pode fazer, retribuir um valor para a variável const. Mas se for um objeto dentro da variável const pode manipular esse objeto, só não pode reatribuir. No caso adicionar e manipular e alterar o valor como acima, é possível. Agora reatribuir como exemplo abaixo não pode.

const novaPessoa = {
    nome: "Pedro",
}

pessoa = novaPessoa

//A palavra reservada const não permite reatribuir um objeto inteiro