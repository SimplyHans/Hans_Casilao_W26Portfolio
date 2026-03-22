import React from 'react'

const Tags = ({
    name,
    icon,
    type,
    }: {
       name: string
       icon?: React.ReactNode;
       type: string;
    }) => {
    
  return (
    <div>
      
      {type === "project" &&
      <h2 className="inline-block px-3.5 py-1.5 rounded-full bg-amber-700/25 backdrop-blur-md text-[0.6rem] font-mono text-amber-50 ">
        {name}
      </h2>}

      {type === "skill" &&
      <span className="">
        <h2 className="inline-flex gap-2 items-center px-2 py-1 rounded-lg  backdrop-blur-md text-lg font-mono text-amber-50">
          {icon}{name}
        </h2>
      </span>}
      
    </div>
    


  )
}

export default Tags