import React from "react";
import MainButton from "@/components/ui/MainButton";
import { RiArrowRightUpLine, RiFilePdfLine } from "react-icons/ri";

const pdfSections = [
  { label: "Project summary", href: "/projectsummary-capstone.pdf" },
  { label: "Project vision", href: "/projectvision-capstone.pdf" },
  { label: "Project / business requirements", href: "/project-business-requirements.pdf" },
  { label: "Project plan", href: "/project-plan.pdf" },
  { label: "Requirements analysis and design", href: "/requirements-analysis-and-design.pdf" },
  { label: "Status reports", href: "/status-reports.pdf" },
  { label: "System implementation", href: "/system-implementation.pdf" },
];

export default function CapstoneShiftFlow() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <section className="mb-8">
        <h2 className="font-mono text-xl md:text-2xl text-amber-300 mb-4 border-b border-white/10 pb-2">
          Capstone sections
        </h2>
        <p className="font-mono text-sm text-gray-300 mb-6">
          Each section opens its PDF document in a new tab.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {pdfSections.map((section) => (
          <a
            key={section.label}
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${section.label} PDF`}
          >
            <MainButton
              title={section.label}
              icon={<RiFilePdfLine className="text-lg" />}
              position="right"
              border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
              otherClasses="w-full h-11 hover:text-black justify-start px-3"
            />
          </a>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="font-mono text-xl md:text-2xl text-amber-300 mb-4 border-b border-white/10 pb-2">
          Wireframes / mockups
        </h2>
        <a
          href="https://www.figma.com/design/Ck8DQQauI0vwb5KC0P7FXJ/Shift-Management?t=NrIW71InZ6THYD2t-1"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Shift Management wireframes in Figma"
        >
          <MainButton
            title="Open wireframes in Figma"
            icon={<RiArrowRightUpLine className="text-lg" />}
            position="right"
            border="bg-amber-300/25 border-amber-300/50 rounded-xl hover:bg-amber-300/70 hover:border-amber-300"
            otherClasses="h-11 hover:text-black"
          />
        </a>
      </section>
    </div>
  );
}
