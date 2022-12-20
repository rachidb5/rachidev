import React from 'react';
import './Bg.css'
import Context from '../Context/Context';
import { useContext } from 'react';
import TecnologiesList from '../Components/TecnologiesList';
import Footer from '../Components/Footer';

function Main() {
  return (
    <div className="bg">
      <TecnologiesList />
      <Footer />
    </div>
  )
}

export default Main;