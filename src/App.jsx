import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import LatestWork from './Components/LatestWork'
import GetInTouch from './Components/GetInTouch'
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className=' bg-black w-full h-full'>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <LatestWork />
    <GetInTouch />
    <Footer />
    </div>
  )
}

export default App
