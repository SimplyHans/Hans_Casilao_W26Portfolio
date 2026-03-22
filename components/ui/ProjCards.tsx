import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainButton from "./MainButton";
import Tags from "./Tags"
import { RiGithubLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";

const ProjCards = ({title, desc="Description...", tags = [], imgUrl, githubUrl, demoUrl, category, caseStudyUrl}:{
    title: string;
    desc?: string;
    tags?: string[];
    imgUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    category: string;
    caseStudyUrl?: string;
    }) => {
  return (
    <div 
        className="w-full max-w-md  mb-8 border-2 border-darkend-300 bg-gray-300/0 rounded-2xl p-2.5">
        {imgUrl && (
          <Image 
            src={imgUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full h-auto object-contain rounded-lg"
            loading="lazy"
            unoptimized
          />
        )}
        

        <h2 className="font-mono font-bold text-lg mx-4 mt-3 mb-1 text-white">{title}</h2>



        <p className="mb-3 mx-4 text-sm whitespace-pre-line leading-snug text-gray-200/85" style={{ lineHeight: "1.8" }}>{desc}</p>


        {tags.length > 0 &&
          <div className="m-3 mb-4 flex flex-wrap gap-2 max-w-100">
                {tags?.map((tag, index) => (
                  <Tags key={index} name={tag} type="project"/>
                ))}
            </div>
        }
        <div className="flex flex-row justify-between">
          {githubUrl &&
            <a href={githubUrl} target="_blank" className="">
                <MainButton
                    title="Github" 
                    icon={<RiGithubLine className="text-lg"/>}  
 
                    position="right" 
                    border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
                    otherClasses=" w-27 h-10 hover:text-black"
                />
            </a>
          }
          {category == "uiux" && caseStudyUrl && (
            <Link href={`/casestudy/${caseStudyUrl}`}>
                <MainButton
                    title="Case Study" 
                    icon={<IoMdBook className="text-lg"/>}  

                    position="right" 
                    border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
                    otherClasses=" w-35 h-10 hover:text-black"
                />
            </Link>
          )}

            {demoUrl && 
              <a href={demoUrl} target="_blank">
                <MainButton
                title="Live Demo" 
                icon={<RiArrowRightUpLine className="text-lg"/>}  
                position="right" 
                border="bg-amber-300/25 border-amber-300/50 rounded-xl hover:bg-amber-300/70 hover:border-amber-300"
                otherClasses=" w-30 h-10 hover:text-black"
                />
              </a>
            }

        </div>

    </div>
  )
}

export default ProjCards