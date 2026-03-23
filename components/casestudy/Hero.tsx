"use client";
import React from 'react';
import Image from 'next/image';

const Hero = ({imgUrl} : {imgUrl:string}) => {

  return (
    <div className="relative w-full mb-8">
        {imgUrl && (
          <Image 
            src={imgUrl} 
            alt="Case Study Hero Image"
            width={1200}
            height={600}
            className="w-full h-36 md:h-48 lg:h-56 object-cover rounded-xl"
            priority
            unoptimized
          />
        )}
    </div>
  )
}

export default Hero