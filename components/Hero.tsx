"use client";
import React, { useEffect, useState } from 'react';
import MainButton from "./ui/MainButton";
import { FaArrowDown } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";


const Hero = () => {
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500); // 500ms = blinking speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen mb-20 2xl:mb-25">

      <div className="size-[520px] absolute rounded-full m-auto shadow-[0_0_80px_inset] shadow-amber-600/4 border border-amber-500/7 z-[-1]"></div>
      <div className="size-[740px] absolute rounded-full m-auto shadow-[0_0_80px_inset] shadow-amber-600/5 border border-amber-500/8 z-[-1]"></div>
      <div className="size-[1060px] absolute rounded-full m-auto shadow-[0_0_80px_inset] shadow-amber-600/4 border border-amber-500/7 z-[-1]"></div>
      <div className="size-[1380px] absolute rounded-full m-auto shadow-[0_0_80px_inset] shadow-amber-600/3 border border-amber-500/6 z-[-1]"></div>
      


      

      <div className="max-w-[89vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <img 
            src="./me.png"

            alt="Welcome Icon" 
            className="w-30 h-30 lg:w-34 lg:h-34 object-cover mx-auto block mb-2 rounded-full" 
        />

        <div className="flex flex-row gap-2 items-center justify-center mb-4">
          <div className="bg-green-300 w-2.5 h-2.5 rounded-full" ></div>
          <p className="font-mono text-sm">Available for Hire</p>
        </div>
        

        
        <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent tracking-widest text-4xl sm:text-3xl lg:text-5xl text-center mx-auto whitespace-nowrap font-black">
          Hans Casilao{showUnderscore ? <span>_</span> : <span>&nbsp;</span>}
        </h2>

        <p className="font-mono p-5 font-medium text-2x1 lg:text-1xl ">Software Developer & UX/UI Designer</p>

      </div>

      <div className="flex flex-row gap-4 mb-6">
        <a href="#academic-samples" title="View academic work samples">
          <MainButton 
            title="View samples" 
            icon={<FaArrowDown/>}  
            position="right" 
            border="rounded-2xl hover:border-amber-300 duration-200"
            otherClasses="mt-6 w-42 h-12 hover:text-amber-300 duration-200"
          />
        </a>
        <a href="mailto:hans.casilao@gmail.com" title='Contact Me'>
          <MainButton 
            title="Contact Me" 
            icon={<MdWavingHand className="text-lg"/>}  
            position="left" 
            border="bg-white rounded-2xl hover:bg-amber-300 duration-200"
            otherClasses="mt-6 w-42 h-12 text-black"
          />
        </a>
      </div>
      
      <div className="absolute bottom-4 mx-auto justify-center items-center flex flex-row gap-5">
        <a href="https://www.linkedin.com/in/hans-russell-casilao-41107a31b/" title='Linkedin' target="_blank">
          <MainButton 
            icon={<LiaLinkedinIn className="text-lg text-white/80"/>} 
            position="center" 
            border="bg-white/3 rounded-xl border-white/10"
            otherClasses="w-11 h-11 hover:bg-amber-500/20"
          />
        </a>

        <a href="https://github.com/SimplyHans" title='Github' target="_blank">
          <MainButton 
            icon={<VscGithub className="text-lg text-white/80"/>} 
            position="center" 
            border="bg-white/3 rounded-xl border-white/10"
            otherClasses="w-11 h-11 hover:bg-amber-500/20"
          />
        </a>
      </div>
      
    </div>
    

  )
}

export default Hero