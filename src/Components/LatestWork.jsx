import React from 'react'

// 👉 Replace with your real images
import project1 from "../assets/Screenshot 2025-09-08 155117.png"
import project2 from "../assets/Screenshot 2025-08-16 234450.png"
import project3 from "../assets/Screenshot 2026-04-01 230314.png"
import project4 from "../assets/Screenshot 2026-04-01 230533.png"
import project5 from "../assets/Screenshot 2026-04-01 230726.png"
import project6 from "../assets/Screenshot 2026-04-01 231141.png"

const projects = [
  {
    title: "E-commerce Platform",
    desc: "Full-featured e-commerce web application with product listing, cart, and secure checkout system.",
    img: project1,
    github: "https://github.com/rajeshkannakbd/Ecommerce", // replace with exact repo if available
    live: "https://client-v2xl.onrender.com/",
    featured: true
  },
  {
    title: "E-commerce Admin Dashboard",
    desc: "Admin panel to manage products, orders, and users with analytics and real-time updates.",
    img: project2,
    github: "https://github.com/rajeshkannakbd/Ecommerce",
    live: "https://ecommerce-1-admin.onrender.com/",
    featured: true
  },
  {
    title: "Real-time Chat Application",
    desc: "Live chat app with real-time messaging, user authentication, and responsive UI.",
    img: project3,
    github: "https://github.com/rajeshkannakbd/ChatApp",
    live: "https://chat-app-client-phi-six.vercel.app/",
    featured: true
  },
  {
    title: "Blog Application",
    desc: "Dynamic blog platform with content management, authentication, and clean UI.",
    img: project4,
    github: "https://github.com/rajeshkannakbd/Blog_app",
    live: "https://blog-app-x4br.onrender.com/",
  },
  {
    title: "Employee Attendance Tracker",
    desc: "Web app to track employee attendance, manage records, and monitor productivity.",
    img: project5,
    github: "https://github.com/rajeshkannakbd/NewEmp",
    live: "https://newemp-3dgd.onrender.com/",
  },
  {
    title: "Daily Delivery Management SaaS",
    desc: "SaaS platform for managing daily deliveries, tracking orders, and optimizing logistics operations.",
    img: project6,
    github: "https://github.com/rajeshkannakbd/DeliverySaas",
    live: "https://milkagencysandyfrontend.onrender.com/dashboard", // add when deployed
  },
];

const LatestWork = () => {

  const sortedProjects = [...projects].sort((a, b) => b.featured - a.featured)

  return (
    <div className='text-white pb-20 md:pb-32 md:mx-16 px-6 md:px-0'>
      
      {/* Title */}
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl md:text-5xl font-royal-head pb-10 md:pb-14'>
          My Best Work
        </h1>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mx-20'>
        
        {sortedProjects.map((project, index) => (
          <div key={index} className='group cursor-pointer'>
            
            {/* Image */}
            <div className='relative'>
              <img 
                className='w-full rounded-lg h-52 md:h-60 object-cover transition-all duration-300 group-hover:scale-95 border-2 border-transparent group-hover:border-[#e908c4]' 
                src={project.img} 
                alt={project.title}
              />

              {project.featured && (
                <span className='absolute top-2 left-2 bg-gradient-to-r from-[#e908c4] to-[#DA7C25] text-xs px-2 py-1 rounded'>
                  Featured
                </span>
              )}
            </div>

            {/* Info */}
            <div className='mt-3 text-center md:text-left'>
              <h3 className='text-sm md:text-lg font-semibold'>
                {project.title}
              </h3>

              <p className='text-xs md:text-sm text-gray-400'>
                {project.desc}
              </p>

              {/* Buttons */}
              <div className='flex gap-4 mt-3 justify-center md:justify-start'>
                
                {/* Live Demo */}
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#e908c4]'
                >
                  Live Demo
                </a>

                {/* GitHub */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-sm px-3 py-1 border border-white rounded-full hover:bg-white hover:text-black transition'
                >
                  Code
                </a>

              </div>
            </div>

          </div>
        ))}

      </div>

      {/* View All
      <div className='pt-10 md:pt-11 flex items-center justify-center'>
        <a 
          href="https://github.com/rajeshkannakbd?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='rounded-full px-8 py-3 md:px-12 md:py-4 border-2 md:border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-105 text-sm md:text-base'>
            View All Projects →
          </button>
        </a>
      </div> */}

    </div>
  )
}

export default LatestWork