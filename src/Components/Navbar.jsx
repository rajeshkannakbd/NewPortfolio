import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div className="text-white fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md px-6 md:px-20 py-4">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-28 md:w-auto" />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 ml-10 font-royal-body items-center">
          <li><a href="#home" className="hover:text-[#DA7C25]">Home</a></li>
          <li><a href="#about" className="hover:text-[#DA7C25]">About Me</a></li>
          <li><a href="#services" className="hover:text-[#DA7C25]">Services</a></li>
          <li><a href="#portfolio" className="hover:text-[#DA7C25]">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#DA7C25]">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a href="#contact">
            <button className="font-Figtree bg-gradient-to-r from-[#DA7C25] to-[#e90869] text-white px-6 py-2 rounded-full font-semibold hover:from-[#e90869] hover:to-[#E9A05C] transition-all duration-300 shadow-md">
              Hire Me
            </button>
          </a>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#111] rounded-xl p-6 flex flex-col gap-4 text-center font-royal-body">
          
          <li className="list-none">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>

          <li className="list-none">
            <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
          </li>

          <li className="list-none">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </li>

          <li className="list-none">
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>

          <li className="list-none">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="mt-4 bg-gradient-to-r from-[#DA7C25] to-[#e90869] px-6 py-2 rounded-full font-semibold">
              Hire Me
            </button>
          </a>

        </div>
      )}
    </div>
  );
};

export default Navbar;