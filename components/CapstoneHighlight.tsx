import React from "react";
import MainButton from "./ui/MainButton";
import { IoMdBook } from "react-icons/io";

const CapstoneHighlight = () => {
  return (
    <div
      id="capstone"
      className="mb-12 w-4/5 max-w-5xl mx-auto scroll-mt-28"
    >
      <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-transparent p-6 md:p-8">
        <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-2xl md:text-3xl mb-3">
          Capstone project
        </h2>
        <p className="font-mono text-sm text-gray-200/85 leading-relaxed mb-6 max-w-3xl">
          <strong className="text-white">Shift Flow </strong> is my capstone focus: a
          shift-management product combining UX research artifacts, requirements,
          planning, and implementation status. The full assignment summary,
          vision, business requirements, plan, analysis &amp; design, wireframes,
          status reports, and system implementation notes—is on the case study page.
        </p>
        <a href="/casestudy/shift-flow">
          <MainButton
            title="Open capstone documentation"
            icon={<IoMdBook className="text-lg" />}
            position="right"
            border="bg-amber-300/25 border-amber-300/50 rounded-xl hover:bg-amber-300/70 hover:border-amber-300"
            otherClasses="h-10 hover:text-black"
          />
        </a>
      </div>
    </div>
  );
};

export default CapstoneHighlight;
