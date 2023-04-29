const nomes = ["Clara","Italo", "Eduardo"];

nomes.forEach(function (nome) {
    console.log(nome)
});

//Função anonima também pode usar a sintaxe da arrow function (ou função flecha)]
//Nesse caso então retiro a palavra function e coloco uma flecha ao lado do parenteses do parametro da função anonima
//Vai funcionar do mesmo jeito. Porém a arrow function é mais usada e mais sucinta
//Ctrl + ; para comentar tudo que for selecionado

nomes.forEach((nome) => {
    console.log(nome)
});

//Função callback de forma externa

function imprimeNome(nome){
    console.log(nome);
}
nomes.forEach(imprimeNome);

//Cuidado para nao colocar parenteses dentro do parametro, vai apenas passar a referencia dela sem executa la