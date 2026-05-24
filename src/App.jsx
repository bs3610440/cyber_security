import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx'
import Skill from './component/Skill.jsx'
import Project from './component/Project.jsx'
import Education from './component/Education.jsx'
import Contact from './component/Contac.jsx'


export default function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>

         <Route path="/" element={<Home/>} />
          <Route path="/skill" element={<Skill/>} />
         <Route path="/project" element={<Project/>} />
         <Route path="/education" element={<Education/>} />
         <Route path="/contact" element={<Contact/>} />
      
      </Routes>
      </BrowserRouter>
  );
}