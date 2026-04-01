import React from 'react'

const GetInTouch = () => {
  return (
    <div className=' text-white pb-32 flex flex-col items-center mx-20 justify-center '>
      <div><h1 className=' text-5xl font-royal-head pb-24'>Get In Touch</h1></div>
      <div className=' flex gap-48'>
      <div className=' w-96 flex flex-col gap-6 text-lg pt-4'>
        <h1 className='  text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent'>Lets Talk</h1>
        <h3>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</h3>
        <h2 className=' text-xl py-4'>rajeshkannakbd@gmail.com</h2>
        <h2 className=' text-xl py-4'>7538821468</h2>
        <h2 className=' text-xl py-4'>Trichy,Tamilnadu</h2>
      </div>
      <div className=' flex flex-col gap-8'>
      <div className=' w-96'>
        <h2 className=' pb-2 text-lg'>Your Name</h2>
        <input type="text" placeholder='Enter Your Name' className=' rounded-lg w-full focus:outline-none bg-slate-700 rouded-lg p-6'   />
      </div>
      <div className=' w-96'>
        <h2 className=' pb-2 text-lg'>Your Email</h2>
        <input type="text" placeholder='Enter Your Email' className=' rounded-lg w-full focus:outline-none bg-slate-700 rouded-lg p-6'   />
      </div>
      <div className=' w-96'>
        <h2 className=' pb-2 text-lg'>Enter Your Message Here</h2>
        <input type="text" placeholder='Enter Your Message Here' className=' rounded-lg w-full focus:outline-none h-60 bg-slate-700 pt-4 px-4 pb-48 rouded-lg'   />
      </div>
      <button className=' bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-4 rounded-full mr-52'>Submit Now</button>
      </div>
      </div>
    </div>
  )
}

export default GetInTouch
