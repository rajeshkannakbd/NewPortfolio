import React from "react";
import themePattern from "../assets/theme_pattern.svg";
import profile from "../assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg";

const About = () => {
  return (
    <div className="flex flex-col text-white pt-16 md:mx-44 md:pt-24 px-6 md:px-0">
      
      {/* Title */}
      <div>
        <center>
          <h1 className="text-2xl md:text-3xl font-semibold">About Me</h1>
        </center>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center pt-10 md:pt-12 gap-10 md:gap-16 md:mx-20">
        
        {/* Image */}
        <div>
          <img
            className="w-64 md:w-96 rounded-3xl"
            src={profile}
            alt="Rajesh Kanna"
          />
        </div>

        {/* Text */}
        <div className="text-sm md:text-lg text-center md:text-left max-w-xl">
          <h3>
            I’m a passionate Full Stack Developer specializing in the MERN stack, 
            focused on building scalable and high-performance web applications. 
            I help businesses and startups turn their ideas into modern, responsive 
            digital products.
          </h3>

          <br />

          <h3>
            With hands-on experience in real-world projects, I bring strong problem-solving 
            skills, clean code practices, and a commitment to delivering quality results. 
            I’m currently open to freelance projects and full-time opportunities.
          </h3>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 p-10 md:p-20">
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent">
            7+
          </h1>
          <h2 className="text-lg md:text-2xl">Projects Completed</h2>
        </div>

        <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50"></div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent">
            2+
          </h1>
          <h2 className="text-lg md:text-2xl">Years of Learning & Building</h2>
        </div>

        <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50"></div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent">
            100%
          </h1>
          <h2 className="text-lg md:text-2xl">Commitment to Quality</h2>
        </div>

      </div>
    </div>
  );
};

export default About;