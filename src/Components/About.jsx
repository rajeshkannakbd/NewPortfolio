import React from "react";
import themePattern from "../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className=" flex flex-col text-white pt-24">
      <div>
        <center>
          <h1 className=" text-2xl">About Me</h1>
        </center>
        {/* <img src={themePattern} alt="" /> */}
      </div>
      <div className=" flex pt-12 mx-8 ml-40 ">
        <div>
          <img
            className=" w-96 rounded-3xl"
            src="src/assets/WhatsApp Image 2026-03-04 at 1.56.53 PM.jpeg"
            alt=""
          />
        </div>
        <div className=" mx-20 text-lg">
          <h3>
            I'm a final yaer Btech Information Technology studenet passionate
            about software development especially in MERN stack and i can build
            scalabel applications, and I'm curenntly seeking for fulltime role
            or Inter to develop my skills and contribute the company{" "}
          </h3>
          <br />
          <h3>
            My passion for fullstack development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </h3>
        </div>
      </div>
      <div className=" flex justify-evenly p-20">
        <div className=" pt-16">
          <h1 className="  text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent text-center">
            3+
          </h1>
          <h2 className=" text-2xl">Years Of Experience</h2>
        </div>
        <div className="w-px h-64 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50"></div>
        <div className=" pt-16">
          <h1 className="  text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent text-center">
            3+
          </h1>
          <h2 className=" text-2xl">Years Of Experience</h2>
        </div>
        <div className="w-px h-64 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50"></div>
        <div className=" pt-16">
          <h1 className="  text-5xl font-bold bg-gradient-to-r from-[#e908c4] to-[#DA7C25] bg-clip-text text-transparent text-center">
            3+
          </h1>
          <h2 className=" text-2xl">Years Of Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
