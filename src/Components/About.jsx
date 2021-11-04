import React from "react";
import "./About.css";
import Rachidb from '../assets/rachidb.jpg'

export default function About(props) {
    return (
        <section id="sobre" className="container-responsive">
            <h1 className="display-2 text-white"> Sobre</h1>
            <div className="d-flex justify-content-xl-evenly mb-5 container-responsive">
                <div className="mb-5">
                    <img src={ Rachidb} alt="Roberto Bastos - Desenvolvedor Web" id="foto" className="foto-sobre" />
                </div>
                <div>
                    <p className="sobre-paragrafo mb-2">
                    Meu nome é Roberto Rachid Bastos, brasileiro e moro em Fortaleza-CE. 
                    Sou Estudante de Egenharia Mecatrônica, Pessoa estudante na <a href="https://www.betrybe.com/">
                    Trybe</a> e  desenvolvedor front-end/back-end e esse é meu portfólio. 
                    Aqui, você irá saber um pouco sobre mim e sobre o meu trabalho. 
                    Espero que você goste do que encontrar e ,caso eu possa te ajudar entre em contato comigo.                   
                    </p>
                    <a className="botao"  href="#contato">
                        Fala Comigo
                   </a>
                </div>
            </div>
        </section>
    )
}