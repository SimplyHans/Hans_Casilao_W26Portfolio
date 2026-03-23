import React from "react";
import Image from "next/image";
import MainButton from "./ui/MainButton";
import { RiArrowRightUpLine, RiGithubLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";

type Sample = {
  title: string;
  summary: string;
  tags: string[]; 
  imgUrl?: string;
  imgAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
};

const samples: Sample[] = [
  {
    title: "Inventory Management System",
    summary:
      "Collaborated with a team of three to develop an ASP.NET Core MVC application with Supabase, implementing user authentication and role-based authorization via Microsoft Identity, and building an admin interface for managing products and categories.",
    tags: ["ASP.NET Core", "C#", "Supabase"],
    imgUrl: "/InvManSystemPic.png",
    imgAlt: "Inventory management system interface",
    githubUrl: "https://github.com/SimplyHans/Inventory_Management",
    demoUrl: "https://invenify.onrender.com/",
  },
  {
    title: "Shift Flow (Capstone)",
    summary:
      "Led a team of 5 developers, assigning tasks and coordinating progress. Contributed to the frontend development and designed the UI, ensuring visual consistency and a cohesive user experience across all pages.",
    tags: ["ReactJS", "UX", "Capstone", "Frontend"],
    imgUrl: "/ShiftFlowUI.png",
    imgAlt: "Shift Flow capstone UI mockup",
    caseStudyUrl: "shift-flow",
  },
  {
    title: "Better Dunyia (Enactus)",
    summary:
      "Worked on the frontend, translating Figma designs into responsive React Native interfaces with TypeScript, fully connected to the backend to deliver complete functionality and a seamless user experience.",
    tags: ["Microsoft Azure", "TypeScript", "CI/CD"],
    imgUrl: "/betterdunyiatb.png",
  },
  {
    title: "GameBoxD",
    summary:
      "Created an iOS app for users to view games and their stats like play sessions. Users are able to also earn achievements through the app.",
    tags: ["XCode", "Swift"],
    imgUrl: "/gameboxdtb.png",
    githubUrl: "https://github.com/SimplyHans/GameBoxd-Mobile",
  },
  {
    title: "---",
    summary:
      "-",
    tags: ["-"],
  },
];

const AcademicSamples = () => {
  return (
    <div
      id="academic-samples"
      className="mb-15 2xl:mb-20 w-4/5 max-w-5xl mx-auto scroll-mt-28"
    >
      <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center mb-3">
        Academic work samples
      </h2>
      <p className="font-mono text-center text-sm text-gray-400 mb-8">
        Five representative samples aligned with coursework, teams, and independent
        practice (minimum five as required).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {samples.map((s) => (
          <article
            key={s.title}
            className="border-2 border-darkend-300 bg-gray-300/0 rounded-2xl p-5 flex flex-col"
          >
            {s.imgUrl ? (
              <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image
                  src={s.imgUrl}
                  alt={s.imgAlt ?? `${s.title} preview`}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            ) : null}
            <h3 className="font-mono font-bold text-lg text-white mb-2">{s.title}</h3>
            <p className="font-mono text-sm text-gray-200/85 leading-relaxed flex-grow mb-4">
              {s.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded-md bg-white/8 text-amber-200/90 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {s.githubUrl && (
                <a href={s.githubUrl} target="_blank" rel="noopener noreferrer">
                  <MainButton
                    title="GitHub"
                    icon={<RiGithubLine className="text-lg" />}
                    position="right"
                    border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
                    otherClasses="w-28 h-9 hover:text-black text-xs"
                  />
                </a>
              )}
              {s.demoUrl && (
                <a href={s.demoUrl} target="_blank" rel="noopener noreferrer">
                  <MainButton
                    title="Live demo"
                    icon={<RiArrowRightUpLine className="text-lg" />}
                    position="right"
                    border="bg-amber-300/25 border-amber-300/50 rounded-xl hover:bg-amber-300/70 hover:border-amber-300"
                    otherClasses="w-32 h-9 hover:text-black text-xs"
                  />
                </a>
              )}
              {s.caseStudyUrl && (
                <a href={`/casestudy/${s.caseStudyUrl}`}>
                  <MainButton
                    title="Case study"
                    icon={<IoMdBook className="text-lg" />}
                    position="right"
                    border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
                    otherClasses="w-36 h-9 hover:text-black text-xs"
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AcademicSamples;
