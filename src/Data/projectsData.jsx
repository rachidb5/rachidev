import blackjack from '../assets/blackjack.png';
import colorguess from '../assets/colorguess.png'

const projects = [
    {
        projectName: "Blackjack",
        description: "Classico jogo de cassino também conhecido com 21 feito em react e usando uma API chamada deck of cards para renderizar as cartas",
        projectImg: blackjack,
        projectLink: 'https://blackjack-steel.vercel.app/',
        repository: 'https://github.com/rachidb5/Blackjack',
        index: 'flex-lg-row-reverse'
    },
    {
        projectName: "ColorGuess",
        description: "A proposta desse jogo, é brincar com com código rgb. O usuário recebe um codigo rgb e opções de cores para tentar acertar a qual dessas cores corresponde ao código oferecido. A tecnologias usadas são html, css e vanilla JS(Sem frameworks)",
        projectImg: colorguess,
        projectLink: 'https://color-guess-sooty.vercel.app/',
        repository: 'https://github.com/rachidb5/color-guess',
        index: 'flex-lg-row' 
    }
]

export default projects;