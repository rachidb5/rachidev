import React from "react";
import "./Banner.css";
import BannerImg from '../assets/banner-img.png'


export default function Banner(props) {
 
    return (
        <section id="banner">
              
        <div class="d-flex justify-content-xl-around container-fluid">
            <div class="d-flex flex-colum banner-img-div">
                <img src={BannerImg} class="banner-img" alt="imagem do banner" />
            </div>
            <div class="align-self-center ml-auto mr-auto">
                    
                <h1 class="white">Olá, seja bem vindo</h1>
                <p class="white paragrafo-banner ml-auto mr-auto mb-3">
                 Meu nome é Rachid Bastos. Sou desenvolvedor front-end/back-end e mobile e esse é meu portfólio. 
                Aqui, você irá saber um pouco sobre mim e sobre meu trabalho.
                 Espero que você goste do que encontrar aqui :)
                 </p>                         
                 <p class="white mt-3 ml-5">Ou me adiciona aqui: 
                    <a href="https://www.linkedin.com/in/roberto-bastos-12b292125/" target="_blank">
                        <span class="fab fa-linkedin fa-lg text-light"></span>
                    </a>
                    <a href="https://github.com/rachidb5/" target="_blank">
                        <span class="fab fa-github fa-lg text-light"></span>
                    </a>
                    <a href="jordan.rachid@gmail.com" target="_blank">
                        <span className="fas fa-envelope-square fa-lg text-light"></span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5585998310570" target="_blank">
                        <span className="fab fa-whatsapp-square fa-lg text-light"></span>
                    </a>
                </p>
            </div>
        </div>
        <div className="gap"/>
    </section>

    )
}