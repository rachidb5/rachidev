import React from 'react';
import './Bg.css'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

function Main() {
  return (
    <div className="bg">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default Main;