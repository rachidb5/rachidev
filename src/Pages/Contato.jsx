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
  const { menu }= useContext(Context);
  return (
    <div className="bg">
      <Header />
      {menu ? <DropdownHeader/>: null }
        <Form />
        <div className="space"/>
      <Footer />
    </div>
  )
}

export default Main;