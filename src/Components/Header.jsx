import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'


export default function Header(props) {
 
    return (
      <header>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <Link>
          <span className="navbar-brand mt-2"><img src={ Logo } alt="Logo"/></span>
        </Link>  
          <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-toggler mt-3" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link><p className="white nav-link">Sobre</p></Link>
              </li>
              <li className="nav-item">
                <Link><p className="white nav-link">Projetos</p></Link>
              </li>
              <li className="nav-item">
                <Link><p className="white nav-link">Tecnologias</p></Link>
              </li>
              <li className="nav-item">
                <Link><p className="white nav-link">Contato</p></Link>
              </li>
            </ul>
          </div>
        </nav>
  </header>
    )
}