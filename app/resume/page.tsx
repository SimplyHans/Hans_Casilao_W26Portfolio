import React from "react";
import MainButton from "@/components/ui/MainButton";
import { RiArrowLeftLine } from "react-icons/ri";

export default function ResumePage() {
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

        <header className="mb-10 border-b border-white/15 pb-8">
          <h1 className="font-mono text-4xl font-bold text-white mb-2">Hans Casilao</h1>
          <p className="font-mono text-amber-200/90">Software Developer &amp; UX/UI Designer</p>
          <p className="font-mono text-sm text-gray-400 mt-4">
            hans.casilao@gmail.com ·{" "}
            <a
              href="https://www.linkedin.com/in/hans-russell-casilao-41107a31b/"
              className="hover:text-amber-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href="https://github.com/SimplyHans"
              className="hover:text-amber-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-mono text-lg text-amber-300 mb-3">Profile</h2>
          <p className="font-mono text-sm text-gray-200/85 leading-relaxed">
            Developer and designer focused on web and mobile experiences, secure
            full-stack patterns, and interfaces that stay consistent from Figma to
            production. Update this summary with your preferred elevator pitch.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-mono text-lg text-amber-300 mb-3">Education</h2>
          <p className="font-mono text-sm text-white font-semibold">
            George Brown College — Advanced Diploma, Computer Programming &amp; Analysis
          </p>
          <p className="font-mono text-xs text-gray-400">Expected completion: [your date]</p>
        </section>

        <section className="mb-10">
          <h2 className="font-mono text-lg text-amber-300 mb-3">Technical skills</h2>
          <p className="font-mono text-sm text-gray-200/85 leading-relaxed">
            Languages: HTML, CSS, JavaScript, C#, SQL · Frameworks: ASP.NET Core,
            React Native, Bootstrap, Tailwind · Data: MySQL, PostgreSQL, Supabase ·
            Tools: Git, Azure, Figma
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-mono text-lg text-amber-300 mb-3">Experience</h2>
          <div className="space-y-6">
            <div>
              <p className="font-mono text-sm text-white font-semibold">
                Mobile App Developer — Enactus George Brown
              </p>
              <p className="font-mono text-xs text-gray-400 mb-2">May 2025 – Aug. 2025</p>
              <ul className="font-mono text-sm text-gray-200/85 list-disc pl-5 space-y-1">
                <li>React Native + TypeScript UI from Figma; reusable components.</li>
                <li>Iteration from user testing and team feedback.</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-sm text-white font-semibold">
                Game UI Designer — Freelance
              </p>
              <p className="font-mono text-xs text-gray-400 mb-2">Dec. 2021 – Mar. 2024</p>
              <ul className="font-mono text-sm text-gray-200/85 list-disc pl-5 space-y-1">
                <li>UI/UX for 23+ clients; 250+ custom icons (Krita, Pixlr).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-lg text-amber-300 mb-3">Selected projects</h2>
          <ul className="font-mono text-sm text-gray-200/85 list-disc pl-5 space-y-2">
            <li>
              Inventory Management — ASP.NET Core MVC, Identity, Supabase (
              <a
                href="https://github.com/SimplyHans/Inventory_Management"
                className="text-amber-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              )
            </li>
            <li>Shift Flow (capstone) — UX, wireframes, implementation in progress.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
