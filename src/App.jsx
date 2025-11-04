import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skill from './component/Skill'
import Expe from './component/Experiance'
import Project from './component/Project'
import Contact from './component/Contac'
import Footer from './component/Foo'
export default function App() {  
  return (
    <div className='text-white'>
<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>  

<Navbar/>
<Hero/>
<Skill/>
<Expe/>
<Project/>
<Contact/>
<Footer/>

  </div>
  )
}
