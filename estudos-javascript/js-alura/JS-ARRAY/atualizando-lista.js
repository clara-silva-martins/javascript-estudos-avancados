const nomes = ["João", "Ana", "Caio", "Lara"];

nomes.splice(0, 1, "Rodrigo");
nomes.splice(3,2, "Clara");

//nesse caso removeu a posição 0 e 1, adicionou o novo dado "rodrigo"
//na quarta linha volta ao código original ja com a inclusao do novo dado, remove a posição 2 e 3 e adiciona um novo dado

console.log(nomes)
