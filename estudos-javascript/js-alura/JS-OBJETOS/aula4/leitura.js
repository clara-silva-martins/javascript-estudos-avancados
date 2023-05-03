/* Interação com o arquivo json cliente 
Esse formato é muito utilizado quando se tem um conjunto de configurações ou um padrão que vc quer colocar no código e que vc vai querer acessar em outros lugares.

Essa notação nos permite transformar um objeto em uma string e transmitir esses dados pelo ar ou para um site ou para outros lugares num formato em que todas as strings sao transmitidas

Transformar um objeto em algo mais facil de manipular por outros sistemas que nao seja um codigo de javascript 
*/

const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//A função require é oq o node ou ambiente permite usar para puxar um código de algum outro lugar
//Ta puxando um arquivo json e transformando em um objeto usavel
// Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, iremos ver que essa função também pode ser utilizada para reaproveitar códigos que estão em outros arquivos, também chamados de módulos.

//Objeto chamado json que é global no node chamando a função stringify, que vai fazer com que transforme um objeto em uma string em um formato json, atraves da função JSON.stringify()


const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

//Vai mostrar a const dados em formato string e dps chamar o tipo vai aparecer string
//Sendo uma string nao da para interagir com ela, na forma que normalmente interagiria com objetos. Se realmente fosse um objeto ele daria a chave e o valor do objeto, mas é uma string. Por isso o resultado é 'undefined'

//Para que transformar o objeto em uma string?
/*

É muito comum querer transmitir ou salvar uma informação. É mais facil e simples transmitir algo em texto. do que seria um objeto javascript, um codigo js que é feito para rodar dentro de do js

Transformar uma string de volta em um objeto

o objeto json tem outra funçao que é o parse seria algo como traduzir ou adequar, vai ler a string e tentar montar novamente o objeto

*/

    const objetoCliente = JSON.parse(clienteEmString);

    console.log(objetoCliente);