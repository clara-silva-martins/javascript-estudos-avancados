 const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

 //const turma1 = alunos.slice(0, 10);

  // tem que ser até o 10 mesmo sendo 11 valores, pois nesse metodo nao conta a posição 10, só até a 9

 //console.log(turma1);

 //const turma2 = alunos.slice(10);

 // nao é necessário colocar a última posição, pois o js entende que quer pegar da posição 10 até o final, se nao colocaria 15 por exemplo e iria até a posição 14

 //console.log(turma2);

 //melhorias no cógido, para ele ser mais dinamico e não escrever um valor estático, sendo que podem ter inúmeros dados 

 const turma1 = alunos.slice(0, alunos.length / 2);
 const turma2 = alunos.slice(alunos.length / 2);

 console.log(turma1);
 console.log(turma2);



