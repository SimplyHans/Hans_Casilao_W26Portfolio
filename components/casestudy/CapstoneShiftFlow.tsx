import React from "react";
import Image from "next/image";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 scroll-mt-28">
      <h2 className="font-mono text-xl md:text-2xl text-amber-300 mb-4 border-b border-white/10 pb-2">
        {title}
      </h2>
      <div className="font-mono text-sm md:text-base text-gray-200/85 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function CapstoneShiftFlow() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <Section title="Project summary">
        <p>
          Shift Flow is a capstone initiative to design and build a shift-management
          experience for teams that need reliable scheduling, clear handoffs, and a
          single place to see who is working when. The project spans discovery,
          requirements, UX artifacts, and an evolving implementation aligned with
          academic milestones.
        </p>
      </Section>

      <Section title="Project vision">
        <p>
          We envision a product where managers spend less time fixing schedule
          conflicts and staff spend less time guessing their responsibilities. Long
          term, the vision is a calm, trustworthy interface—fast on mobile, honest
          about permissions, and extensible enough to plug into payroll or HR tools
          later without rewriting the core flows.
        </p>
      </Section>

      <Section title="Project / business requirements">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-300">BR-1:</strong> Authenticated users can
            view and manage shifts they are allowed to see (role-based visibility).
          </li>
          <li>
            <strong className="text-gray-300">BR-2:</strong> Supervisors can create,
            edit, and publish shift blocks with at least one validation rule (e.g.
            overlap detection or minimum rest—finalize per stakeholder interview).
          </li>
          <li>
            <strong className="text-gray-300">BR-3:</strong> Employees receive a clear
            summary of upcoming shifts and changes (in-app first; notifications as
            stretch goal).
          </li>
          <li>
            <strong className="text-gray-300">BR-4:</strong> Audit-friendly history or
            logging of material schedule changes for accountability.
          </li>
          <li>
            <strong className="text-gray-300">BR-5:</strong> Responsive layouts for
            phone and desktop breakpoints defined in the design system.
          </li>
        </ul>
      </Section>

      <Section title="Project plan">
        <p>
          Phases follow the academic term: (1) discovery and requirements sign-off,
          (2) information architecture and low-fidelity flows, (3) high-fidelity UI and
          component library, (4) vertical slice implementation (auth + one core flow),
          (5) integration, test pass, and demo hardening. Each phase ends with a short
          status report and backlog grooming for the next sprint.
        </p>
      </Section>

      <Section title="Requirements analysis and design">
        <p>
          Stakeholders include supervisors scheduling staff and employees checking
          shifts. Key constraints are accuracy (no double-booking), clarity (timezone
          and role labels), and performance on low-end phones. The analysis model
          separates organization, user roles, shift templates, and assigned instances
          so the schema can grow without breaking the UI. Non-functional requirements
          include accessible color contrast for primary actions and keyboard-focus
          order on web.
        </p>
      </Section>

      <Section title="Wireframes / mockups">
        <p>
          Low-fidelity wireframes mapped the primary journeys: sign-in, dashboard,
          create shift, and swap/request change. High-fidelity mockups refined
          typography, spacing, and component states. Representative UI is shown below;
          add additional frames from Figma exports as your assets are finalized.
        </p>
        <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/ShiftFlowUI.png"
            alt="Shift Flow UI mockup"
            width={1200}
            height={675}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </Section>

      <Section title="Status reports">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-300">Sprint 1:</strong> Requirements draft and
            competitive scan complete; risks around role rules documented.
          </li>
          <li>
            <strong className="text-gray-300">Sprint 2:</strong> Wireframes approved
            for core flows; open questions on notification scope deferred.
          </li>
          <li>
            <strong className="text-gray-300">Current:</strong> High-fidelity UI in
            progress; implementation spike started on auth and layout shell—update this
            list after each instructor checkpoint.
          </li>
        </ul>
      </Section>

      <Section title="System implementation">
        <p>
          The implementation stack and repository structure should match your course
          requirements (e.g. React/Next.js, ASP.NET, or other approved framework).
          Document the runtime, hosting target, environment variables, and how roles are
          enforced server-side—not only in the UI. As code lands, replace this
          paragraph with: repo link, architecture diagram reference, key endpoints, and
          test approach (manual test matrix or automated suite).
        </p>
        <p>
          Planned modules: authentication and session handling, shift CRUD API,
          role-based route guards, dashboard aggregation queries, and deployment
          pipeline notes (CI if applicable).
        </p>
      </Section>
    </div>
  );
}
