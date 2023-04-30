/*
Um objeto literal, é criado a partir da notação literal, usando as chaves {}, no qual são passados valores dentro das chaves. E que se atribui uma variável para acessar seu valor posteriormente.  Por exemplo:
*/

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

/*
Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele.
*/

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*
Nesse caso não foi feito uma cópia, mas o objPersonagem2 serviu como referencia ao objeto original, por isso que uma alteração feita em qualquer um desses objetos vai mudar todos. Ou seja quando trabalha com objetos, faz referencia ao objeto, mas nao cria um copia. Se fosse em tipos primitivos seria possivel alterar o valor e manter o original nessa forma de atribuição.

- Para manter o valor do primeiro objeto original sem ser feita essa referencia, no qual ambos os valores mudam. Pode-se usar o método Object.create()
*/

const objPersonagemm = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento


/*
O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

*/ 