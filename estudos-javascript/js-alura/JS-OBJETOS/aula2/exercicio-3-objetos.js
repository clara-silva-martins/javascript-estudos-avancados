const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   };

    cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
   }];

    cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
   });

   cliente.animalEstimacao.push({
    nome: "Lana",
    raca: "Cão",
    vacinado: false
   });

   const listaDeCaes = cliente.animalEstimacao.filter((animal) => animal.raca === "Gato");

   console.log(listaDeCaes)

   listaDeCaes.forEach((cachorro) => console.log(cachorro.nome));