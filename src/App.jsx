import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Tech from './component/Tech'
// import Expe from './component/Expe'
// import Project from './component/Project'
// import Contact from './component/Contact'
// import Footer from './component/Footer'
export default function App() {
  return (
    <div className='text-white'>
<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>  

<Navbar/>
<Hero/>
<Tech/>
{/* <Expe/>
<Project/>
<Contact/>
<Footer/> */}

  </div>
  )
}
