import React from 'react';
import './Bg.css'
import Header from '../Components/Header';
import Context from '../Context/Context';
import { useContext } from 'react';
import DropdownHeader from '../Components/DropdownHeader';
import About from '../Components/About';
import Footer from '../Components/Footer';

function Main() {
  const { menu }= useContext(Context);
  return (
    <div className="bg">
      <Header />
      {menu ? <DropdownHeader/>: null }
      <About />
      <Footer />
    </div>
  )
}

export default Main;