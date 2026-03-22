"use client"

import React from 'react'
import ProjCards from "./ui/ProjCards";
import MainButton from './ui/MainButton';

const projects = [
  {
    title:"Inventory Management",
    desc:"I collaborated with a team of three to create an inventory management system using ASP.NET Core with the MVC framework and Supabase, coding primarily in JetBrains Rider. The system featured user authentication and role authorization through Microsoft Identity. We developed an admin interface that allowed users to create, edit, and delete products, as well as create new product categories.",
    imgUrl:"/InvManSystemPic.png",
    githubUrl:"https://github.com/SimplyHans/Inventory_Management",
    demoUrl:"https://invenify.onrender.com/",
    tags:["ASP.NET Core", "C#", "Bootstrap", "Microsoft Identity", "Supabase", "Azure", "SendGrid"],
    category:"code"
  },
    {
    title:"Shift Flow (Capstone)",
    desc:"Worked on prototyping and developing a shift-management website, including full wireframing, UI design, and layout planning. Project is currently in progress with a case study coming soon.",
    imgUrl:"/ShiftFlowUI.png",
 
    tags:["Figma", "User Interface Design", "User Experience Design"],
    category:"uiux",
    caseStudyUrl:"shift-flow"
  },
]

const Project = () => {
  const [filter, setFilter] = React.useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);


  return (
    <div id="projects" className="mb-20 2xl:mb-25 w-4/5 max-w-5xl mx-auto">
        <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center mb-[-5px]">Featured Projects</h2>

        <div className="relative flex justify-center items-center flex-row gap-2 mb-6">
          <MainButton 
            title="All" 
            position="center" 
            border="bg-[#2a2a33] hover:bg-white rounded-xl duration-200 border-none"
            otherClasses="mt-6 w-20 h-10 text-white hover:text-black"
            clickFunction={()=> setFilter("all")}
          />
          <MainButton 
            title="Code" 
            position="center" 
            border="bg-[#2a2a33] hover:bg-white rounded-xl duration-200 border-none"
            otherClasses="mt-6 w-23 h-10 text-white hover:text-black"
            clickFunction={()=> setFilter("code")}
          />
          <MainButton 
            title="UX / UI" 
            position="center" 
            border="bg-[#2a2a33] hover:bg-white rounded-xl duration-200 border-none"
            otherClasses="mt-6 w-27 h-10 text-white hover:text-black"
            clickFunction={()=> setFilter("uiux")}
          />
        </div>

        {/* <p className="font-stretch-50% text-center mb-6 text-lightish text-sm">Demonstrating key milestones and inventive approaches in real-world development scenarios.</p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p,index)=>
            <ProjCards
              key={`${p.title}-${p.category}-${index}`}
              title={p.title}
              desc={p.desc}
              imgUrl={p.imgUrl}
              githubUrl={p.githubUrl}
              demoUrl={p.demoUrl}
              tags={p.tags}
              category={p.category}
              caseStudyUrl={p.caseStudyUrl}
            />
          )
          ) : (
            <div className="col-span-full">
              <p className="text-[#ababba] font-mono text-center">No projects available for this filter at the moment. Try again later.</p>
            </div>
          )}
        </div>
        
    </div>
  )
}

export default Project