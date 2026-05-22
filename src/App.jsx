import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx'
import Skill from './component/Skill.jsx'
import Project from './component/Project.jsx'
import Education from './component/Education.jsx'
import Contact from './component/Contac.jsx'


export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Skill />
      <Project/>
      <Education />
      <Contact />
    </div>
  );
}