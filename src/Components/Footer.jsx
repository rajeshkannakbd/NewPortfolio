import React from "react";

const Footer = () => {
  return (
     <div className="text-white mx-20 flex flex-col pb-24 gap-8">
      <div className="flex mx-32 justify-between">
        <div className="mr-48">
          <h1>Rajesh</h1>
          <br />
          <h3>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </h3>
        </div>
        <div className="flex h-10 items-center pt-16 pl-20 justify-center gap-4">
          <input type="text" placeholder="Enter Your Email" className="bg-slate-600 focus:outline-none p-3 rounded-full" />
          <button className='bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-2 rounded-full mr-52'>Subscribe</button>
        </div>
      </div>

      <hr className="border-white/30 mx-32" />
      
      <div className="flex justify-between mx-32">
        <div>
          <h3>© 2026 Alex Bennett. All rights reserved.</h3>
        </div>
        <div className="flex justify-between">
          <ul className="flex gap-14 mx-12">
            <li>Term of Services</li>
            <li>Privacy Policy</li>
            <li>Connect with me</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Footer;
