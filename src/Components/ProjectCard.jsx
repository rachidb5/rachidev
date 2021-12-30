import React from "react";
import { useState } from "react";
import "./ProjectCard.css";


export default function ProjectCard(props) {
    const [i, setI] = useState('flex-lg-row-reverse');
    const { index } = props;
    return (
        <div className="project-container container col-xxl-8 px-4 py-5 mt-3">
        <div className={`row ${props.index} align-items-center g-5 py-5`}>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={props.projectImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{props.projectName}</h1>
            <p className="lead text-dark fw-bold">{props.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-2">
                <a href={props.projectLink} className="px-4 me-md-2" target="_blank">
                    <div className="d-flex row with-linear-gradient">
                        <span>
                            Ver Projeto
                        </span>
                    </div>
                </a>           
                <a href={props.repository} target="_blank">
                    <div className="d-flex row with-linear-gradient">
                        <span>
                            <span className="fab fa-github fa-lg pl-2"></span>Ir Para Repositório
                        </span>
                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    )
}