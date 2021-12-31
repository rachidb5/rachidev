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
            <Link to="/sobre">
              <span className='text-light'>Sobre</span></Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/projetos">
            <span className='text-light'>Projetos</span></Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/tecnologias"><span className='text-light'>Tecnologias</span></Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link to="/contato"><span className='text-light'>Contato</span></Link>
            <hr/>
          </li>
        </ul>
      </div>
    )
}