const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");

//Declarei a função com nome exibeNomeENota com o parametro aluno
// Em seguida verifiquei com a condição if se o parametro aluno está incluido na lista aluno na const listaDeAlunosEMedias, se sim aparece um bloco, se não aparece outro. Por fim chamei a função para ela ser executada
//O includes vai saber se está realmente incluso, então retorna como true ou false
//Para saber a média de um aluno precisa saber a posição de onde o aluno está na lista para saber qual é a sua nota. Através do indexOf é possível saber a posição/ indice de onde um dado está na lista 