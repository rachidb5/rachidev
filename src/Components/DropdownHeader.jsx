import React from "react";
import "./DropdownHeader.css";
import "./Header.css";
import { Link } from "react-router-dom";

export default function DropdownHeader(props) {
    return (
      <div className="dropdown ml-5">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link>Sobre</Link>
          </li>
          <li className="nav-item">
            <Link>Projetos</Link>
          </li>
          <li className="nav-item">
            <Link  to="/tecnologias">Tecnologias</Link>
          </li>
          <li className="nav-item">
            <Link>Contato</Link>
          </li>
        </ul>
      </div>
    )
}