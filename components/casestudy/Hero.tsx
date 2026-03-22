"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MainButton from "../ui/MainButton";
import { FaArrowDown } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";


const Hero = ({imgUrl} : {imgUrl:string}) => {
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500); // 500ms = blinking speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mb-20 2xl:mb-25">
        {imgUrl && (
          <Image 
            src={imgUrl} 
            alt="Case Study Hero Image"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        )}
    </div>
  )
}

export default Hero