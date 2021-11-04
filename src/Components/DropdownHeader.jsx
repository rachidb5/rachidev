import React from "react";
import "./DropdownHeader.css";
import "./Header.css";
import { Link } from "react-router-dom";

export default function DropdownHeader(props) {
    return (
      <div className="dropdown ml-5">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <hr/>
            <Link to="/sobre">Sobre</Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/projetos">Projetos</Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/tecnologias">Tecnologias</Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/contato">Contato</Link>
            <hr/>
          </li>
        </ul>
      </div>
    )
}