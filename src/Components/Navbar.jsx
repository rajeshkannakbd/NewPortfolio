import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className=' text-white flex justify-between items-center  mx-20 pt-3'>
      <div><img src={logo} alt="" /></div>
      <div>
      <ul className=' flex gap-16 ml-10 font-royal-body' >
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className=' flex justify-center'>
      <button class=" font-Figtree bg-gradient-to-r from-[#DA7C25] to-[#e90869] text-white px-6 py-2 rounded-full font-semibold hover:from-[#e90869] hover:to-[#E9A05C] transition-all duration-300 shadow-md">
        Contact With Me</button>
      </div>
    </div>  
  )
}

export default Navbar
