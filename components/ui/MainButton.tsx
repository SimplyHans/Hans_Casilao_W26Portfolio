import React from 'react';

const MainButton = ({
  title,
  icon,
  position,
  border = 'rounded-full border-white',
  otherClasses,
  clickFunction
}: {
  title?: string;
  icon?: React.ReactNode;
  position: string;
  border?: string;
  otherClasses?: string;
  clickFunction?: ()=> void;
}) => {
  
  return (
    <button
      className={`relative cursor-pointer inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg bg-transparent font-semibold duration-200 ${otherClasses}`}
      onClick={clickFunction}
    >
      {/* Gradient Border */}
      <span className={`absolute inset-0 border-2 duration-200 ${border}`}></span>
      
      {/* Button Content */}
      <span className="font-mono relative flex items-center justify-center text-xs pointer-events-none">
        {position === 'left' && <span className="mr-2">{icon}</span>}
        {position === 'center' && <span>{icon}</span>}
        {title}
        {position === 'right' && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default MainButton;
