import React from 'react'
import profileImg from "../assets/about_profile.svg"

const Hero = () => {
  return (
    <div className=' text-white flex flex-col gap-8 mx-10 items-center justify-center mt-24'>
      <div>
      <img className=' rounded-full w-60 object-cover p-2 bg-yellow-100 h-60' src='src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg' alt="" /></div>
      <div className=' text-4xl text-center font-royal-head'>
         <h1><span className=' text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent'>I'm Rajesh Kanna,</span>
          <br></br> FullStack Developer Based in Trichy</h1>
      </div>
      <div className=' mx-80 text-center -mt-4 font-royal-body'>
        <h3>I am a Final year Information Technolgy student and, I am currently working as a FullStack developer with real time projects and seeking for full time oppurtunity and Freelance Web Developer</h3>
      </div>
      <div className=' flex justify-between gap-20'>
        <button className=' bg-gradient-to-r  from-[#DA7C25] to-[#e908c4] hover:from-[#e908c4]  hover:to-[#DA7C25] rounded-full p-3 '>Connect With Me</button>
        <button className=' flex text-white items-center gap-3 justify-center  bg-gradient-to-r from-[#DA7C25]  to-[#e908c4]  hover:from-[#e908c4] hover:to-[#DA7C25] rounded-full p-3 '>My Resume<svg className=' size-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></button>
      </div>
    </div>
  )
}

export default Hero
