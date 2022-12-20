import React, { useContext } from "react";
import "./About.css";
import Rachidb from "../assets/rachidb.jpeg";
import Context from "../Context/Context";

export default function About(props) {
  const { language } = useContext(Context);
  return (
    <section id="sobre" className="container-responsive">
      <h1 className="titulo-listas text-light" id="tecnologias">
        {language ? 'About':'Sobre'}
      </h1>
      <div className="d-flex justify-content-xl-evenly mb-5 container-responsive">
        <div className="mb-5 img-container">
          <img
            src={Rachidb}
            alt="Roberto Bastos - Desenvolvedor Web"
            id="foto"
            className="foto-sobre"
          />
        </div>
        <div>
          {language ? (
            <p className="sobre-paragrafo mb-2">
              My name is Rachid Bastos. I am a front-end developer from Brazil
              and this is my personal website. Here you can get to know my work
              and learn more about me. I hope you will like what you find here
            </p>
          ) : (
            <p className="sobre-paragrafo mb-2">
              Meu nome é Roberto Rachid Bastos, brasileiro e moro em
              Fortaleza-CE. Sou Estudante de Egenharia Mecatrônica, e
              desenvolvedor front-end/back-end e esse é meu portfólio. Aqui,
              você irá saber um pouco sobre mim e sobre o meu trabalho. Espero
              que você goste do que encontrar e ,caso eu possa te ajudar entre
              em contato comigo.
            </p>
          )}
        </div>
      </div>
      <div className="divider" />
    </section>
  );
}
