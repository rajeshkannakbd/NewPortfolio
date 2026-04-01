import React from "react";

const Services = () => {
  return (
    <div className=" text-white flex flex-col items-center justify-center pb-28">
      <div className=" ">
        <h1 className=" text-2xl pb-12 ">My Services</h1>
      </div>
      <div className=" flex gap-20">
        <div className="  rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-1 text-2xl font-royal-body">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] w-96 text-white p-6 rounded-[calc(1rem-1px)]">
            <h3 className=" p-3">01</h3>
            <h2>Frontend Development</h2>
            <h5 className=" text-sm">Full stack web apps, The combination of the frontend and bakend that gives the full working web apps</h5>
            <h4 className=" pt-4">Read More</h4>
          </div>
        </div>
        <div className="  rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-1 text-2xl font-royal-body">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] w-96 text-white p-6 rounded-[calc(1rem-1px)]">
            <h3 className=" p-3">02</h3>
            <h2>Backend Development</h2>
            <h5 className=" text-sm">Full stack web apps, The combination of the frontend and bakend that gives the full working web apps</h5>
            <h4 className=" pt-4">Read More</h4>
          </div>
        </div>
        <div className="  rounded-lg bg-gradient-to-r from-[#e908c4] to-[#DA7C25] p-1 text-2xl font-royal-body">
          <div className="bg-black hover:bg-gradient-to-r hover:from-[#e908c4] hover:to-[#DA7C25] w-96 text-white p-6 rounded-[calc(1rem-1px)]">
            <h3 className=" p-3">03</h3>
            <h2>FullStack Development</h2>
            <h5 className=" text-sm">Full stack web apps, The combination of the frontend and bakend that gives the full working web apps</h5>
            <h4 className=" pt-4">Read More</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
