import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Context from '../Context/Context';
import { useContext } from 'react';
import Logo from '../assets/logo.png'


export default function Header(props) {
  const { menu, setMenu, language, setLanguage } = useContext(Context);
  function menuDropper() {
    setMenu(!menu);
    console.log(menu)
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <Link to="/">
          <span className="navbar-brand mt-2"><img src={Logo} alt="Logo" /></span>
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button" data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          onClick={() => menuDropper()}
          aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-toggler mt-3" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/sobre"><p className="white nav-link">{language ?'About':'Sobre'}</p></Link>
            </li>
            <li className="nav-item">
              <Link to="/projetos"><p className="white nav-link">{language ?'Projects':'Projetos'}</p></Link>
            </li>
            <li className="nav-item">
              <Link to="/tecnologias"><p className="white nav-link">{language ?'Technologies':'Tecnologias'}</p></Link>
            </li>
            <li className="nav-item">
              <Link to="/contato"><p className="white nav-link">{language ?'Contact':'Contato'}</p></Link>
            </li>
          </ul>
        </div>
        <div>
          <center>
            <div class="switch">
              <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" onChange={({ target: { checked } }) => {setLanguage(checked)}}/>
                <label for="language-toggle"></label>
                <span class="on">BR</span>
                <span class="off">EN</span>
            </div>
          </center>
        </div>
      </nav>
    </header>
  )
}