import React from "react";
import "./Card.css";


export default function Card(props) {

    return (
      <div class="gallery-card">
        <h4>{props.name}</h4>
        <img class="gallery-img" src={props.imagePath} alt={props.name} />
      </div>
    )
}