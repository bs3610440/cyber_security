import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
export default function App() {
  return (
    <div className='text-white ' >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Navbar />
      <Hero />
    </div>

  )
}
