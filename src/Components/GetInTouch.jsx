import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-white pb-20 md:pb-32 flex flex-col items-center px-6 md:px-0 justify-center'>
      
      {/* Title */}
      <div>
        <h1 className='text-3xl md:text-5xl font-royal-head pb-12 md:pb-24 text-center'>
          Get In Touch
        </h1>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row gap-12 md:gap-48 w-full md:w-auto'>
        
        {/* Left Side */}
        <div className='max-w-md flex flex-col gap-6 text-sm md:text-lg pt-2 md:pt-4 text-center md:text-left'>
          
          <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent'>
            Let’s Work Together
          </h1>

          <h3>
            I’m available for freelance projects and open to full-time opportunities. 
            If you have an idea, project, or need a developer to build your website, 
            feel free to reach out — I’d love to help bring your vision to life.
          </h3>

          <div className='pt-2'>
            <h2 className='py-2'>📧 rajeshkannakbd@gmail.com</h2>
            <h2 className='py-2'>📞 7538821468</h2>
            <h2 className='py-2'>📍 Trichy, Tamil Nadu</h2>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className='flex flex-col gap-6 w-full md:w-auto'>
          
          <div className='w-full md:w-96'>
            <h2 className='pb-2 text-sm md:text-lg'>Your Name</h2>
            <input 
              type="text" 
              placeholder='Enter Your Name' 
              className='rounded-lg w-full focus:outline-none bg-slate-700 p-4 md:p-6'
            />
          </div>

          <div className='w-full md:w-96'>
            <h2 className='pb-2 text-sm md:text-lg'>Your Email</h2>
            <input 
              type="email" 
              placeholder='Enter Your Email' 
              className='rounded-lg w-full focus:outline-none bg-slate-700 p-4 md:p-6'
            />
          </div>

          <div className='w-full md:w-96'>
            <h2 className='pb-2 text-sm md:text-lg'>Your Message</h2>
            <textarea 
              placeholder='Tell me about your project...' 
              className='rounded-lg w-full focus:outline-none bg-slate-700 p-4 md:p-6 h-40 md:h-52 resize-none'
            />
          </div>

          <button className='bg-gradient-to-r from-[#e908c4] to-[#DA7C25] px-6 py-3 md:p-4 rounded-full text-sm md:text-base hover:scale-105 transition-all duration-300'>
            Send Message
          </button>

        </div>

      </div>
    </div>
  )
}

export default GetInTouch