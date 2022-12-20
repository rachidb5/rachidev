import React from 'react';
import './Bg.css'
import Context from '../Context/Context';
import { useContext } from 'react';
import About from '../Components/About';
import Footer from '../Components/Footer';

function Main() {
  return (
    <div className="bg">
      <About />
      <Footer />
    </div>
  )
}

export default Main;