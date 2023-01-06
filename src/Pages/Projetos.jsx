import React from 'react';
import './Bg.css'
import Header from '../Components/Header';
import Context from '../Context/Context';
import { useContext } from 'react';
import DropdownHeader from '../Components/DropdownHeader';
import Footer from '../Components/Footer';
import ProjectCard from '../Components/ProjectCard';
import { projects, projectsEn } from '../Data/projectsData';

function Main() {
  const { menu, language }= useContext(Context);
  return (
    <div className="bg">

    <h1 className="titulo-listas text-light" id="tecnologias">Projetos</h1>
      {language ? projectsEn.map((p) => <ProjectCard 
         index={p.index}
         projectName={p.projectName}
         description={p.description}
         projectImg={p.projectImg}
         projectLink={p.projectLink}
         repository={p.repository}
         />
      ):projects.map((p) => <ProjectCard 
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