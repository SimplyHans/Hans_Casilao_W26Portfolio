import React from "react";

const AcademicCredentials = () => {
  return (
    <div
      id="credentials"
      className="mb-15 2xl:mb-20 w-4/5 max-w-5xl mx-auto scroll-mt-28"
    >
      <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center mb-8">
        Academic credentials
      </h2>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h3 className="font-mono text-lg text-amber-300 mb-4">
          Certificates &amp; degrees
        </h3>
        <ul className="font-mono text-sm text-gray-200/85 space-y-3 list-disc pl-6 mb-10">
          <li>
            <span className="text-white">Advanced Diploma, Computer Programming &amp; Analysis</span>{" "}
            — George Brown College (Sept. 2023 - Current)
          </li>
          <li>
            Relevant coursework highlights: Object-Oriented Programming, Data Structures, Agile Software Development, Mobile Applicaiton Developement, Full Stack Development 
          </li>
        </ul>

         
      </div>
    </div>
  );
};

export default AcademicCredentials;
