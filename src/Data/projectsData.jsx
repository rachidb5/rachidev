import blackjack from '../assets/blackjack.png';
import colorguess from '../assets/colorguess.png';
import meetpets from '../assets/meetpets.png';
import jokenpo from '../assets/jokenpo.jpeg'

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
    },
    {
        projectName: "MeetPets",
        description: "Evento fictício de adoção de animais com fim expandir e complementar o portfolio. Foi criada uma API com NodeJS, MongoDB e express em que o usuario efetuava o cadastro e recebia um QRcode que era o convite para o evento ",
        projectImg: meetpets,
        projectLink: 'https://meetpets-qrcode.herokuapp.com/',
        repository: 'https://github.com/rachidb5/meetpets-back',
        index: 'flex-lg-row-reverse' 
    },
    {
        projectName: "JoKenPo",
        description: "Implementação do clássico pedra, papel, tesoura para web usando HTML, CSS, javascript e VueJS. Foi me primeiro contato com o framework.",
        projectImg: jokenpo,
        projectLink: 'https://jokenpo-vue.vercel.app/',
        repository: 'https://github.com/rachidb5/jokenpo-vue',
        index: 'flex-lg-row' 
    }
]

export default projects;