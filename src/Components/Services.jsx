import React, { useState } from "react";

const Services = () => {
    const [activeService, setActiveService] = useState(null);
  return (
    <div className="text-white flex flex-col items-center justify-center md:mx-28  pb-20 md:pb-28 px-6 md:px-0">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl pb-10 md:pb-12 font-semibold">
          My Services
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        
        {/* Card 1 */}
        <div className="rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-[1px] text-lg md:text-2xl font-royal-body w-full md:w-auto">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] text-white p-6 rounded-[calc(1rem-1px)] transition-all duration-300">
            <h3 className="p-2 text-sm md:text-base">01</h3>
            <h2 className="text-xl md:text-2xl font-semibold">Frontend Development</h2>
            <h5 className="text-sm mt-2 text-gray-300">
              I build modern, responsive, and user-friendly interfaces that deliver 
              smooth user experiences across all devices.
            </h5>
            <h4 className="pt-4 cursor-pointer text-sm md:text-base" onClick={() => setActiveService("frontend")}>Learn More →</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-[1px] text-lg md:text-2xl font-royal-body w-full md:w-auto">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] text-white p-6 rounded-[calc(1rem-1px)] transition-all duration-300">
            <h3 className="p-2 text-sm md:text-base">02</h3>
            <h2 className="text-xl md:text-2xl font-semibold">Backend Development</h2>
            <h5 className="text-sm mt-2 text-gray-300">
              I develop secure, scalable backend systems, APIs, and databases to power 
              fast and reliable web applications.
            </h5>
            <h4 className="pt-4 text-sm cursor-pointer md:text-base" onClick={() => setActiveService("backend")}>Learn More →</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-[1px] text-lg md:text-2xl font-royal-body w-full md:w-auto">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] text-white p-6 rounded-[calc(1rem-1px)] transition-all duration-300">
            <h3 className="p-2 text-sm md:text-base">03</h3>
            <h2 className="text-xl md:text-2xl font-semibold">Full Stack Development</h2>
            <h5 className="text-sm mt-2 text-gray-300">
              Complete web solutions from frontend to backend — helping you launch 
              fully functional, high-performance applications.
            </h5>
            <h4 className="pt-4 text-sm cursor-pointer md:text-base" onClick={() => setActiveService("fullstack")}>Learn More →</h4>
          </div>
        </div>

      </div>
      {activeService && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
    <div className="bg-[#111] p-6 rounded-xl max-w-lg text-center">
      
      <h2 className="text-2xl font-semibold mb-4">
        {activeService === "frontend" && "Frontend Development"}
        {activeService === "backend" && "Backend Development"}
        {activeService === "fullstack" && "Full Stack Development"}
      </h2>

      <p className="text-gray-300 mb-6">
        {activeService === "frontend" && "I create responsive UI using React, Tailwind, and modern frameworks ensuring fast performance and great user experience."}
        {activeService === "backend" && "I build scalable APIs, authentication systems, and databases using Node.js, Express, and MongoDB."}
        {activeService === "fullstack" && "I deliver complete web solutions including frontend, backend, deployment, and performance optimization."}
      </p>

      <button 
        onClick={() => setActiveService(null)}
        className="bg-gradient-to-r from-[#e908c4] to-[#DA7C25] px-6 py-2 rounded-full"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
    
  );
};

export default Services;