    const bestTVShows = [
        { title: 'Rectify', metascore: 99, userScore: 8.2 },
        { title: 'The Larry Sa', metascore: 99, userScore: 4.8 },
        { title: 'Murder One', metascore: 99, userScore: 4.6 },
        { title: 'Breaking Bad', metascore: 99, userScore: 9.7 },
        { title: 'The Office (UK)', metascore: 98, userScore: 8.4 }
    ]
    
let message = 'Segundo o site Metacritic, as 5 melhores séries já feitas são:'

let novaMensagem = ''
let fraseInicio = ''


bestTVShows.forEach((serie) => {

    novaMensagem = novaMensagem.concat( "- " + serie.title + " com metascore em " + serie.metascore + " e user score em " + serie.userScore + "." + '\n') 
     
})

fraseInicio = fraseInicio.concat(message)

console.log(fraseInicio);
console.log(novaMensagem);