import React from 'react'

const LatestWork = () => {
  return (
    <div className=' text-white pb-32'>
      <div className=' flex items-center justify-center'>
        <h1 className=' text-5xl font-royal-head pb-14'>Latest Work</h1>
      </div>
      <div className=' grid grid-cols-3 gap-4 mx-20'>
        <img className=' w-full rounded-lg h-60 p-4 hover:p-2 hover:border-2 border-[#e908c4] cursor-pointer object-cover ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      <img className=' w-full rounded-lg h-60 p-4 hover:p-2 object-cover hover:border-4 border-[#e908c4] cursor-pointer ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      <img className=' w-full rounded-lg h-60 p-4 hover:p-2 object-cover hover:border-4 border-[#e908c4] cursor-pointer ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      <img className=' w-full rounded-lg h-60 p-4 hover:p-2 object-cover hover:border-4 border-[#e908c4] cursor-pointer ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      <img className=' w-full rounded-lg h-60 p-4 hover:p-2 object-cover hover:border-4 border-[#e908c4] cursor-pointer ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      <img className=' w-full rounded-lg h-60 p-4 hover:p-2 object-cover hover:border-4 border-[#e908c4] cursor-pointer ' src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg" alt="" />
      
      </div>
      <div className=' pt-11 flex gap-4 items-center justify-center'>
        <button className=' rounded-full w-64 p-8 border-4 border-white flex items-center justify-center transition-all duration-300 hover:ml-4'>Show More<span className=''>-\</span></button>
      </div>
    </div>
  )
}

export default LatestWork
