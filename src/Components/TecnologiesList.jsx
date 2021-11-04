import React from "react";
import "./TecnologiesList.css";
import Card from './Subcomponentes/Card';
import Data from '../Data/tecnologiasData';


export default function TecnologiesList(props) {

    return (
      <section id="listas-secao" class="container-white">
        <h1 class="titulo-listas" id="tecnologias">Tecnologias</h1>

        <section class="gallery white d-flex justify-content-between">
           {Data.map(tecnologie => <Card name={tecnologie.title} imagePath={tecnologie.img}/>)}
        </section>
      </section>
    )
}