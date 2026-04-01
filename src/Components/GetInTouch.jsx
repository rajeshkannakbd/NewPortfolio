import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const GetInTouch = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_s96cdab',
      'template_sueme5d',
      form.current,
      'WOIj-eUz-_2tq-fOK'
    )
    .then(() => {
      alert("Message sent successfully ✅")
      form.current.reset()
    })
    .catch(() => {
      alert("Failed to send message ❌")
    })
  }

  return (
    <div className='text-white pb-20 md:pb-32 flex flex-col items-center px-6 md:px-0 justify-center'>
      
      <div>
        <h1 className='text-3xl md:text-5xl font-royal-head pb-12 md:pb-24 text-center'>
          Get In Touch
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-12 md:gap-48 w-full md:w-auto'>
        
        {/* LEFT SIDE */}
        <div className='max-w-md flex flex-col gap-6 text-sm md:text-lg text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent'>
            Let’s Work Together
          </h1>

          <h3>
            I’m available for freelance projects. Send me a message and I’ll get back to you soon.
          </h3>

          <div>
            <h2>📧 rajeshkannakbd@gmail.com</h2>
            <h2>📞 7538821468</h2>
          </div>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 w-full md:w-96'>
          
          <input 
            type="text" 
            name="user_name"
            placeholder='Your Name' 
            required
            className='rounded-lg bg-slate-700 p-4'
          />

          <input 
            type="email" 
            name="user_email"
            placeholder='Your Email' 
            required
            className='rounded-lg bg-slate-700 p-4'
          />

          <textarea 
            name="message"
            placeholder='Your Message' 
            required
            className='rounded-lg bg-slate-700 p-4 h-40 resize-none'
          />

          <button type="submit" className='bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-4 rounded-full'>
            Send Message
          </button>

        </form>

      </div>
    </div>
  )
}

export default GetInTouch