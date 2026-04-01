import React from 'react'
import profileImg from "../assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg"

const Hero = () => {
  return (
    <div className='text-white flex flex-col gap-6 md:gap-8 mx-6 md:mx-10 items-center justify-center mt-20 pt-12 md:pt-12 md:mt-20 text-center'>
      
      {/* Profile Image */}
      <div>
        <img 
          className='rounded-full w-40 h-40 md:w-60 md:h-60 object-cover p-2 bg-yellow-100' 
          src={profileImg} 
          alt="Rajesh Kanna Profile"
        />
      </div>

      {/* Heading */}
      <div className='text-2xl md:text-4xl font-royal-head leading-snug'>
        <h1>
          <span className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent'>
            I'm Rajesh Kanna,
          </span>
          <br />
          Full Stack Developer Building Modern, High-Performance Websites
        </h1>
      </div>

      {/* Description */}
      <div className='max-w-xl md:max-w-3xl text-sm md:text-lg font-royal-body'>
        <h3>
          I help businesses and startups build fast, responsive, and user-friendly web applications. 
          As a Full Stack Developer with real-world project experience, I specialize in creating 
          websites that not only look great but also deliver results. 
          <br className='hidden md:block' />
          Available for freelance projects and full-time opportunities.
        </h3>
      </div>

      {/* Buttons */}
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-10 mt-2'>
        <a href="#contact">
        <button className='bg-gradient-to-r from-[#DA7C25] to-[#e908c4] hover:from-[#e908c4] hover:to-[#DA7C25] rounded-full px-6 py-3 text-sm md:text-base'>
          Hire Me
        </button></a>
        <a href="/RajeshKanna(FullStack Developer)-Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className='flex text-white items-center gap-3 justify-center bg-gradient-to-r from-[#DA7C25] to-[#e908c4] hover:from-[#e908c4] hover:to-[#DA7C25] rounded-full px-6 py-3 text-sm md:text-base'>
          View Resume
          <svg className='size-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
          </svg>
        </button></a>

      </div>
    </div>
  )
}

export default Hero