import { AnimatedGreeting } from "@/components/animatedGreeting";
import { Button, ButtonLink } from "@/components/button";
import ProjectRow, { ProjectType } from "@/components/projectRow";
import TiltCard from "@/components/tiltCard";
import TimelineRow, { TimelineType } from "@/components/timelineRow";

const experienceData: TimelineType[] = [
  {
    id: "nexieon",
    year: "2024 — Now",
    title: "Software Engineer",
    description: "Building full-stack applications and architecting modern web solutions.",
    organization: "Nexieon"
  },
  {
    id: "uni",
    year: "2025 — Now",
    title: "Software Engineering B.S.",
    description: "Deepening my knowledge of algorithms, data structures, and low-level system design.",
    organization: "University"
  },
  {
    id: "omac",
    year: "2022",
    title: "One Million Arab Coders",
    description: "Graduated from the comprehensive programming initiative, solidifying foundational computer science concepts.",
    organization: "Certification"
  },
  {
    id: "start",
    year: "2017",
    title: "Wrote my first line of code",
    description: "Started tinkering with code at age 9. Half a lifetime of building things for the joy of it.",
    organization: "Origin"
  }
];

const projectsData: ProjectType[] = [
  {
    id: "evaengine",
    title: "EvaEngine",
    description: "A custom 2D game engine built entirely from scratch for web-based gaming experiences.",
    techStack: ["JavaScript", "HTML5 Canvas", "Game Dev"],
    githubUrl: "https://github.com/ibrahimfaisal07/evaenginejs",
    index: 0
  },
  {
    id: "codelang",
    title: "Codelang Core",
    description: "A custom programming language and compiler architecture designed from the ground up.",
    techStack: ["C#", ".NET", "Compilers"],
    githubUrl: "https://github.com/ibrahimfaisal07/Codelang",
    index: 1
  },
  {
    id: "typhoon",
    title: "Typhoon.NET",
    description: "A high-performance web framework for C# mimicking the routing and middleware architecture of Express.js.",
    techStack: ["C#", ".NET", "Systems Design"],
    githubUrl: "https://github.com/ibrahimfaisal07/TyphoonDotNET",
    index: 2
  },
  {
    id: "nexilearn",
    title: "NexiLearn LMS",
    description: "A full-stack Learning Management System tailored for streamlined educational delivery.",
    techStack: ["TypeScript", "Next.js", "Full-Stack"],
    githubUrl: "https://github.com/ibrahimfaisal07/NexiLearn",
    index: 3
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 pb-24 overflow-hidden">
      {/** ***************** HERO SECTION *************** */}
      <section className="w-full max-w-7xl px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

        {/* Left Column: Typography & Hook */}
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-4xl md:text-5xl font-light leading-snug">
            <span className="text-blue-500 block mb-4 text-3xl"><AnimatedGreeting /></span>
            I engineer <strong className="font-bold text-white">systems, engines, and applications.</strong>
            <span className="italic text-2xl md:text-3xl text-gray-400 mt-4 block">
              Coding since I was <span className="text-accent font-semibold not-italic">9</span>.
            </span>
          </h1>

          <p className="max-w-md text-lg text-[var(--text-muted)] leading-relaxed">
            I'm Ibrahim, an 18-year-old software engineering student with a deep curiosity
            for how technology works under the hood. From writing custom game engines and
            language compilers to building full-stack scalable apps, I love tackling complex
            logic across the entire stack.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <ButtonLink href="#work" variant="white">
              VIEW SELECTED WORK ↗
            </ButtonLink>

            <ButtonLink href="#contact" variant="glass">
              GET IN TOUCH
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="relative w-full aspect-square glass-panel rounded-[2rem] overflow-hidden flex items-center justify-center border-[var(--blue-border)] bg-[#0B131F]/50">

          {/* 
            The Spline component automatically handles the WebGL canvas, 
            resizing, and the mouse-tracking interactivity. 
          */}
          <div className="w-full flex items-center justify-center">
            <TiltCard />
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK SECTION ================= */}
      <section id="work" className="w-full max-w-7xl px-8 md:px-12 mt-32 md:mt-48">

        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[1px] w-12 bg-gray-700"></div>
            <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
              Selected Work / 2016 — 2026
            </span>
            <div className="h-[1px] w-12 bg-gray-700"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Selected work across <br />
            <span className="italic font-light text-gray-400">the entire stack.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-32 md:gap-24">
          {projectsData.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="w-full max-w-7xl px-8 md:px-12 mt-32 md:mt-48">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-blue-500 text-sm">§</span>
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
                Experience / A Chronology
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Half my life, <br />
              <span className="italic font-light text-gray-400">writing code.</span>
            </h2>
          </div>

          {/* Right Column: Timeline List */}
          <div className="flex flex-col border-t border-gray-800/50 mt-8 lg:mt-0">
            {experienceData.map((item) => (
              <TimelineRow key={item.id} item={item} />
            ))}
          </div>

        </div>
      </section>
      {/* ================= CONNECT SECTION ================= */}
      <section id="connect" className="w-full px-8 md:px-12 mt-32 md:mt-48 mb-24 flex flex-col items-center text-center">

        {/* Tiny Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-blue-500 text-sm">§</span>
          <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
            Connect / 2026
          </span>
        </div>

        {/* Massive Typography Hook */}
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8] mb-2">
          LET'S
        </h2>
        {/* The WebkitTextStroke property creates the hollow outlined text effect */}
        <h2
          className="text-7xl md:text-[10rem] font-light tracking-tighter italic uppercase leading-[0.8] mb-12"
          style={{ WebkitTextStroke: '2px #94A3B8', color: 'transparent' }}
        >
          BUILD.
        </h2>

        {/* Subtext */}
        <p className="max-w-lg text-lg text-[var(--text-muted)] leading-relaxed mb-12">
          Full-time roles, contract engagements, or an unusually interesting
          problem — I'd love to hear about it.
        </p>

        {/* Email Copy Pill (Uses your Button component) */}
        <div className="flex items-center justify-between p-1.5 pl-6 glass-panel rounded-full max-w-sm w-full mx-auto mb-8 shadow-2xl shadow-blue-900/10 hover:border-blue-500/50 transition-colors">
          <span className="text-sm font-medium text-white tracking-wide">
            ibrahimfaisal07@gmail.com
          </span>
          <Button variant="primary" className="btn-white !text-xs !py-2">
            COPY EMAIL
          </Button>
        </div>

        {/* Social Links (Uses your ButtonLink with the 'icon' variant) */}
        <div className="flex items-center gap-4">
          <ButtonLink href="https://github.com/ibrahimfaisal07" target="_blank" variant="icon" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </ButtonLink>
          <ButtonLink href="https://linkedin.com" target="_blank" variant="icon" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </ButtonLink>
        </div>
      </section>

    </main>
  );
}