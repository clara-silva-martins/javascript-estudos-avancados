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
