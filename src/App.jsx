import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skill from './component/Skill'
import Expe from './component/Experiance'
import Project from './component/Project'
import Contact from './component/Contac'
import Footer from './component/Foo'
import Education from './component/Education'
export default function App() {
  return (
    <div className='text-white'>
      <div></div>
      <Navbar />
      <Hero />
      <Skill />
      <Education/>
      <Expe />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
