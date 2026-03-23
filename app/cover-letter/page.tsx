import React from "react";
import MainButton from "@/components/ui/MainButton";
import { RiArrowLeftLine } from "react-icons/ri";

export default function CoverLetterPage() {
  return (
    <main className="relative bg-[var(--color-custom-white)] min-h-screen mx-auto sm:px-10 py-20">
      <div className="max-w-3xl mx-auto w-4/5">
        <a href="/#about">
          <MainButton
            title="Back to portfolio"
            icon={<RiArrowLeftLine className="text-lg" />}
            position="left"
            border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
            otherClasses="mb-10 w-44 h-10 hover:text-black"
          />
        </a>

        <article className="font-mono text-sm text-gray-200/85 leading-relaxed space-y-4">
          <p className="text-white">
            Hans Casilao
            <br />
            Toronto, ON
            <br />
            hans.casilao@gmail.com
            <br />
            [Date]
          </p>

          <p>
            Hiring Manager
            <br />
            [Company Name]
            <br />
            [Company Address]
          </p>

          <p className="text-white font-semibold">
            Re: Application for Junior Software Developer / UX Engineer (hybrid product
            team)
          </p>

          <p>Dear Hiring Manager,</p>

          <p>
            I am writing to express my interest in a junior role where software delivery
            and user experience are treated as one problem—not two handoffs. My
            background combines freelance game UI design with academic and team
            development in React Native and ASP.NET Core, so I am comfortable moving
            from Figma and requirements conversations into typed components, APIs, and
            data models.
          </p>

          <p>
            At Enactus George Brown I helped translate prototypes into responsive React
            Native screens, prioritized reusable UI pieces, and adjusted layouts from
            structured feedback—experience that maps directly to agile product teams.
            Separately, on an inventory management project, I worked with Microsoft
            Identity, role-based admin flows, and Supabase-backed data, which sharpened
            my respect for security and clear authorization boundaries in the UI.
          </p>

          <p>
            I am especially drawn to [Company Name] because [add one specific sentence:
            product domain, tech stack, or team practice you researched]. I would
            welcome the chance to discuss how I can contribute to your roadmap while
            continuing to grow under senior engineers and designers.
          </p>

          <p>Thank you for your time and consideration.</p>

          <p>
            Sincerely,
            <br />
            Hans Casilao
          </p>

          <p className="text-xs text-darkend pt-6 border-t border-white/10">
            Template: replace bracketed fields, tighten the company paragraph with real
            research, and match the job title to each application.
          </p>
        </article>
      </div>
    </main>
  );
}
