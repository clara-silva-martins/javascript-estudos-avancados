const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        //const alunos = listaDeAlunosEMedias[0];

        //const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado!");
    }
}


exibeNomeENota("João");

//Em function foi criadas duas consts e atribuido o valor da terceira array listadealunosemedias a posição de alunos [0] e a posiçao de medias [1], isso é desestruturar uma lista, para tornar mais legivel e menos confuso.
//nomear as posiçoes de uma lista mais externa