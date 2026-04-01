import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return alert("Enter email");

    const templateParams = {
      user_email: email
    };

    emailjs.send(
      "service_s96cdab",
      "template_fe93kuv",
      templateParams,
      "WOIj-eUz-_2tq-fOK"
    )
    .then(() => {
      alert("Email sent successfully ✅");
      setEmail("");
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <div className="text-white px-6 md:px-0 md:mx-20 flex flex-col pb-16 md:pb-24 gap-8">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:mx-20">
        
        {/* Left */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-2xl font-semibold">Rajesh Kanna</h1>
          <h3 className="text-sm text-gray-300 mt-2">
            Full Stack Developer building modern web applications.
          </h3>
        </div>

        {/* Right (Email Form) */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-slate-600 px-4 py-3 rounded-full w-full sm:w-auto focus:outline-none"
          />

          <button 
            type="submit"
            className='bg-gradient-to-r from-[#e908c4] to-[#DA7C25] px-6 py-3 rounded-full'>
            Subscribe
          </button>
        </form>

      </div>

      {/* Divider */}
      <hr className="border-white/30 md:mx-20" />
      
      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:mx-20 text-center md:text-left">
        
        <div>
          <h3 className="text-sm md:text-base">
            © 2026 Rajesh Kanna. All rights reserved.
          </h3>
        </div>

        <div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
            <li className="cursor-pointer hover:text-[#DA7C25]">Terms of Service</li>
            <li className="cursor-pointer hover:text-[#DA7C25]">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#DA7C25]">Contact</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;