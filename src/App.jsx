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
    <div className='bg-black w-full h-full'>
      
      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <LatestWork />
      </div>

      <div id="contact">
        <GetInTouch />
      </div>

      <Footer />

    </div>
  )
}

export default App