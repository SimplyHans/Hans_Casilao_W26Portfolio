import React from "react";
import MainButton from "./ui/MainButton";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="mb-15 2xl:mb-20 w-4/5 max-w-5xl mx-auto scroll-mt-28"
    >
      <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center mb-8">
        Personal Data &amp; Bio
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-mono text-lg text-amber-300 mb-4">Personal data</h3>
          <dl className="font-mono text-sm text-gray-200/90 space-y-3">
            <div>
              <dt className="text-darkend">Name</dt>
              <dd>Hans Casilao</dd>
            </div>
            <div>
              <dt className="text-darkend">Email</dt>
              <dd>
                <a
                  href="mailto:hans.casilao@gmail.com"
                  className="hover:text-amber-300 underline-offset-2 hover:underline"
                >
                  hans.casilao@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-darkend">LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/hans-russell-casilao-41107a31b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 underline-offset-2 hover:underline"
                >
                  linkedin.com/in/hans-russell-casilao-41107a31b
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-darkend">GitHub</dt>
              <dd>
                <a
                  href="https://github.com/SimplyHans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 underline-offset-2 hover:underline"
                >
                  github.com/SimplyHans
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-darkend">Focus</dt>
              <dd>Software development, UX/UI design</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open resume (PDF)"
            >
              <MainButton
                title="Resume"
                icon={<FaFileAlt className="text-lg" />}
                position="right"
                border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
                otherClasses="w-full sm:w-36 h-10 hover:text-black"
              />
            </a>
            <a
              href="/cover-letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open cover letter (PDF)"
            >
              <MainButton
                title="Cover letter"
                icon={<RiArrowRightUpLine className="text-lg" />}
                position="right"
                border="bg-amber-300/25 border-amber-300/50 rounded-xl hover:bg-amber-300/70 hover:border-amber-300"
                otherClasses="w-full sm:w-40 h-10 hover:text-black"
              />
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-lg text-amber-300 mb-3">Bio</h3>
            <p className="font-mono text-sm text-gray-200/85 leading-relaxed">
              I am a software developer and UX/UI designer who enjoys turning ambiguous
              problems into clear interfaces and reliable systems. My work spans mobile
              and web from React Native prototypes with student teams to full-stack
              tools built with ASP.NET Core and modern data stores. I care about
              accessibility, consistency in design systems, and code that teammates can
              extend without friction.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-lg text-amber-300 mb-3">
              Philosophy / career goal
            </h3>
            <blockquote className="font-mono text-sm italic text-amber-200/90 border-l-2 border-amber-400/60 pl-4 mb-4">
              &ldquo;We are the facilitators of our own creative evolution.&rdquo;
              <span className="block not-italic text-darkend mt-1">- Bill Hicks</span>
            </blockquote>
            <p className="font-mono text-sm text-gray-200/85 leading-relaxed mb-4">
              I take that idea seriously in a practical sense: growth is not something
              that happens to us between assignments. It is the sum of deliberate
              choices in how we learn, how we listen to users, and how we ship. Past
              freelance UI work taught me to negotiate real constraints with clients;
              my current studies and team projects push me to document assumptions,
              test earlier, and align interfaces with backend security and data models.
            </p>
            <p className="font-mono text-sm text-gray-200/85 leading-relaxed">
              Looking ahead, I want roles where I can keep bridging design and
              engineering. Owning requirements from sketch to deployment, mentoring
              peers on reusable components, and staying reflective about what each
              release actually changed for the people using it. That reflective habit,
              paired with strong communication, is how I intend to keep evolving as a
              practitioner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
