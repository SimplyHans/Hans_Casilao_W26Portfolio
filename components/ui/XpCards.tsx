import React from 'react'
import { BsFillCalendarDateFill } from "react-icons/bs";


const XpCards = ({startDate, endDate, pos, company, desc = [], imgs = []}:{
    startDate: string;
    endDate: string;
    pos: string;
    company: string;
    desc: string[];
    imgs?: string[];
}) => {
  return (
    <div className="mb-9">
        <div className="justify-start items-center flex gap-1 text-center text-gray-400 text-sm mb-1">
            <BsFillCalendarDateFill/>
            <p>{startDate} - {endDate}</p>
        </div>

        <h2 className="font-mono font-bold text-2xl">{pos}</h2>
        <p className="font-mono text-md mb-2 text-gray-300">{company}</p>

        <ul className="list-disc pl-6 mb-4">
            {desc?.map((des, index) => (
                <li key={index}>{des}</li>
            ))}
        </ul>

        <div className="relative overflow-hidden max-w-6xl mx-auto">
            <div className="absolute left-0 top-0 h-full w-24 z-10"
              style={{backgroundImage: 'linear-gradient(to right, var(--background), transparent)'}}>
            </div>
            <div className="absolute right-0 top-0 h-full w-24 z-10"
              style={{backgroundImage: 'linear-gradient(to left, var(--background), transparent)',}}>
            </div>
            
            <div className="flex flex-row scroll-loop w-max gap-4">
                {[...imgs, ...imgs]?.map(((img, index) =>
                    <img key={index} src={img} className="w-65 md:w-100 h-auto object-fill rounded-lg"></img>
                ))}
            </div>
        </div>

    </div>
  )
}

export default XpCards