import React from 'react';
import './Bg.css'
import Header from '../Components/Header';
import Context from '../Context/Context';
import { useContext } from 'react';
import DropdownHeader from '../Components/DropdownHeader';
import Form from '../Components/Form';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function Main() {
  const { menu, language }= useContext(Context);
  return (
    <div className="bg">
      <h1 className="titulo-listas text-light" id="tecnologias">{language ? 'Contact':'Contato'}</h1>
        <Form />
        <div className="space" />
      <Footer />
    </div>
  )
}

export default Main;