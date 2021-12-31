import React from 'react';
import './Bg.css'
import Header from '../Components/Header';
import Context from '../Context/Context';
import { useContext } from 'react';
import DropdownHeader from '../Components/DropdownHeader';
import Footer from '../Components/Footer';
import ProjectCard from '../Components/ProjectCard';
import Data from '../Data/projectsData';
import { Carousel } from 'react-responsive-carousel';

function Main() {
  const { menu }= useContext(Context);
  console.log(Data)
  return (
    <div className="bg">
      <Header />
      {menu ? <DropdownHeader/>: null }
      {Data.map((p) => <ProjectCard 
         index={p.index}
         projectName={p.projectName}
         description={p.description}
         projectImg={p.projectImg}
         projectLink={p.projectLink}
         repository={p.repository}
         />
      )}
      <Footer />
    </div>
  )
}

export default Main;