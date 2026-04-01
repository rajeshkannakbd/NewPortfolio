import React from "react";

const Footer = () => {
  return (
    <div className="text-white px-6 md:px-0 md:mx-20 flex flex-col pb-16 md:pb-24 gap-8">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 md:mx-20">
        
        {/* Left */}
        <div className="md:mr-48 text-center md:text-left max-w-md">
          <h1 className="text-2xl font-semibold">Rajesh Kanna</h1>
          <br />
          <h3 className="text-sm md:text-base text-gray-300">
            Full Stack Developer building modern, responsive, and high-performance 
            web applications. I help businesses and startups create impactful 
            digital experiences.
          </h3>
        </div>

        {/* Right (Newsletter / Contact CTA) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:pt-10">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-slate-600 focus:outline-none px-4 py-3 rounded-full w-full sm:w-auto"
          />
          <button className='bg-gradient-to-r from-[#e908c4] to-[#DA7C25] px-6 py-3 rounded-full text-sm md:text-base'>
            Get Updates
          </button>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-white/30 md:mx-20" />
      
      {/* Bottom Section */}
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