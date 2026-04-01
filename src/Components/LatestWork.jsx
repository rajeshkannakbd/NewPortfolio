import React from 'react'
import project from "../assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg"

const LatestWork = () => {
  return (
    <div className='text-white pb-20 md:pb-32 md:mx-16 px-6 md:px-0'>
      
      {/* Title */}
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl md:text-5xl font-royal-head pb-10 md:pb-14'>
          Latest Work
        </h1>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 md:mx-20'>
        
        {[1,2,3,4,5,6].map((_, index) => (
          <div key={index} className='group cursor-pointer'>
            
            <img 
              className='w-full rounded-lg h-52 md:h-60 object-cover transition-all duration-300 group-hover:scale-95 border-2 border-transparent group-hover:border-[#e908c4]' 
              src={project} 
              alt="Project"
            />

            {/* Optional project text (adds value) */}
            <div className='mt-2 text-center md:text-left'>
              <h3 className='text-sm md:text-lg font-semibold'>
                Web Project
              </h3>
              <p className='text-xs md:text-sm text-gray-400'>
                Responsive and modern UI built for performance.
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className='pt-10 md:pt-11 flex items-center justify-center'>
        <button className='rounded-full px-8 py-3 md:px-12 md:py-4 border-2 md:border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-105 text-sm md:text-base'>
          View More →
        </button>
      </div>

    </div>
  )
}

export default LatestWork