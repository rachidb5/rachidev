import React from "react";
import "./DropdownHeader.css";
import "./Header.css";
import { Link } from "react-router-dom";

export default function DropdownHeader(props) {
    return (
      <div className="dropdown ml-5">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link><p className="white nav-link">Sobre</p></Link>
          </li>
          <li className="nav-item">
            <Link><p className="white nav-link">Projetos</p></Link>
          </li>
          <li className="nav-item">
            <Link  to="/tecnologias"><p className="white nav-link">Tecnologias</p></Link>
          </li>
          <li className="nav-item">
            <Link><p className="white nav-link">Contato</p></Link>
          </li>
        </ul>
      </div>
    )
}