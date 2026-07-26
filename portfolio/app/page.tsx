'use client';

import { AnimatedGreeting } from "@/components/animatedGreeting";
import { Button, ButtonLink } from "@/components/button";
import ExpertiseCard from "@/components/expertiseCard";
import { Modal } from "@/components/modal";
import ProjectRow, { ProjectType } from "@/components/projectRow";
import TiltCard from "@/components/tiltCard";
import TimelineRow, { TimelineType } from "@/components/timelineRow";
import { Braces, Cloud, Cpu, Gauge, GitBranch, Layers, Shield } from "lucide-react";
import { useState } from "react";

const experienceData: TimelineType[] = [
  {
    id: "uni",
    year: "2025 — Present",
    title: "Software Engineering B.Eng",
    description: "Deepening my knowledge of algorithms, data structures, and low-level system design.",
    organization: "University"
  },
  {
    id: "nexieon",
    year: "2023 — Present",
    title: "Software Engineer",
    description: "Founder and Principal Engineer of Nexeion, a software venture studio architecting high-performance custom software.",
    organization: "Nexieon"
  },
  {
    id: "omac",
    year: "2018",
    title: "One Million Arab Coders - Udacity",
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
    id: "codelang",
    title: "Codelang Core",
    description: "A custom programming language and interpreted architecture designed from the ground up.",
    techStack: ["C#", ".NET", "Interpreters"],
    githubUrl: "https://github.com/ibrahimfaisal07/Codelang",
    index: 0,
    imgUrl: './codelang.png'
  },
  {
    id: "evaengine",
    title: "EvaEngine",
    description: "A custom 2D game engine built entirely from scratch for web-based gaming experiences.",
    techStack: ["JavaScript", "HTML5 Canvas", "Game Dev"],
    githubUrl: "https://github.com/ibrahimfaisal07/2dGameEngineJS",
    index: 1,
    imgUrl: './evaengine.png'
  },
  {
    id: "typhoon",
    title: "Typhoon.NET",
    description: "A high-performance web framework for C# mimicking the routing and middleware architecture of Express.js.",
    techStack: ["C#", ".NET", "Systems Design"],
    githubUrl: "https://github.com/ibrahimfaisal07/TyphoonDotNET",
    index: 2,
    imgUrl: './typhoon.png'
  },
  {
    id: "sqai",
    title: "SqAI",
    description: "An artificial intelligence classifier built entirely in TypeScript. Designed to categorize and process data structures efficiently without relying on black-box external APIs.",
    techStack: ["TypeScript", "Machine Learning", "Algorithms"],
    githubUrl: "https://github.com/ibrahimfaisal07/SqAI",
    index: 3,
    imgUrl: './sqai.png'
  }
];

const expertiseData = [
  {
    id: "fullstack",
    title: "Full-Stack Web Engineering",
    description: "Interfaces that feel inevitable. Building scalable, responsive applications with React, Next.js, and TypeScript.",
    icon: <Layers strokeWidth={1.5} size={28} />,
    className: "md:col-span-2" // Spans two columns
  },
  {
    id: "architecture",
    title: "System Architecture",
    description: "C# and .NET environments, custom programming languages, and robust backend logic.",
    icon: <Cpu strokeWidth={1.5} size={28} />,
    className: "md:col-span-1" // Standard square
  },
  {
    id: "database",
    title: "Database & Cloud",
    description: "Relational and NoSQL database design via SQL, MongoDB, and modern BaaS platforms like Supabase.",
    icon: <Cloud strokeWidth={1.5} size={28} />,
    className: "md:col-span-1"
  },
  {
    id: "engines",
    title: "Custom Engines & Tooling",
    description: "Building 2D game engines from scratch and crafting developer tools for better architecture.",
    icon: <Braces strokeWidth={1.5} size={28} />,
    className: "md:col-span-2"
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "Strict typing, clean architecture, and building systems designed to handle edge cases gracefully.",
    icon: <Shield strokeWidth={1.5} size={28} />,
    className: "md:col-span-1"
  },
  {
    id: "performance",
    title: "Performance",
    description: "Optimizing game loops, reducing API latency, and ensuring smooth, 60fps UI interactions.",
    icon: <Gauge strokeWidth={1.5} size={28} />,
    className: "md:col-span-1"
  },
  {
    id: "version",
    title: "Version Control",
    description: "Collaborative Git workflows, reproducible builds, and seamless continuous integration.",
    icon: <GitBranch strokeWidth={1.5} size={28} />,
    className: "md:col-span-1"
  }
];

const dailyDrivers = [
  "TypeScript",
  "C# / .NET",
  "Next.js",
  "Node.js",
  "Supabase",
  "MongoDB",
  "Flutter"
];

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "ibrafaisal2007@gmail.com";
    
    // 1. Copy to the user's clipboard
    await navigator.clipboard.writeText(email);
    
    // 2. Show the "Copied" success state on the button for 2 seconds
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);

    // 3. Automatically open their default email app (Mail, Outlook, Gmail, etc.)
    window.location.href = `mailto:${email}`;
  };

  return <>
    {/* ================= CONTACT MODAL ================= */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Let's build something."
      >
        <div className="flex flex-col gap-3">
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Feel free to reach out for collaborations, full-time roles, or just to chat about systems engineering.
          </p>

          {/* Email Option */}
          <a 
            href="mailto:ibrafaisal2007@gmail.com" 
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-800/60 bg-gray-900/30 hover:bg-gray-800 hover:border-gray-600 transition-all group"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">Email</span>
              <span className="text-xs text-gray-400">ibrafaisal2007@gmail.com</span>
            </div>
          </a>

          {/* LinkedIn Option */}
          <a 
            href="https://www.linkedin.com/in/ibrahim-faisal-a131b4339/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-800/60 bg-gray-900/30 hover:bg-gray-800 hover:border-gray-600 transition-all group"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">LinkedIn</span>
              <span className="text-xs text-gray-400">Connect professionally</span>
            </div>
          </a>

          {/* GitHub Option */}
          <a 
            href="https://github.com/ibrahimfaisal07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-800/60 bg-gray-900/30 hover:bg-gray-800 hover:border-gray-600 transition-all group"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">GitHub</span>
              <span className="text-xs text-gray-400">View source code</span>
            </div>
          </a>

        </div>
      </Modal>
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
            
            <Button variant="glass"
              onClick={() => setIsContactModalOpen(true)} 
              className="btn-glass text-sm"
            >
              GET IN TOUCH
            </Button>

            {/* Resume Link */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors flex items-center gap-2"
            >
              RESUME
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
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

        {/* View All Projects / GitHub CTA */}
        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center text-center">
          <ButtonLink href="https://github.com/ibrahimfaisal07" target="_blank" variant="glass">
            EXPLORE THE FULL GITHUB
          </ButtonLink>
        </div>

      </section>

      {/* ================= EXPERTISE / STACK SECTION ================= */}
      <section id="stack" className="w-full max-w-7xl px-8 md:px-12 mt-32 md:mt-48">
        
        {/* Section Header with Flex Line */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-blue-500 text-sm">§</span>
          <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium whitespace-nowrap">
            Expertise / Systems I Build
          </span>
          <div className="h-[1px] flex-grow bg-gray-800/80"></div>
        </div>

        {/* Bento Grid (Mapped from Array) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseData.map((item) => (
            <ExpertiseCard 
              key={item.id}
              title={item.title} 
              description={item.description}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>

        {/* Bottom "Daily Drivers" Bar (Mapped from Array) */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-[var(--blue-border)] bg-[#0c1015]/80 backdrop-blur-sm">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
            Daily Drivers
          </span>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase font-medium">
            {dailyDrivers.map((driver) => (
              <span key={driver}>{driver}</span>
            ))}
          </div>
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

        {/* Email Copy Pill */}
        <div className="flex items-center justify-between p-1.5 pl-6 glass-panel rounded-full max-w-sm w-full mx-auto mb-8 shadow-2xl shadow-blue-900/10 hover:border-blue-500/50 transition-colors">
          <span className="text-sm font-medium text-white tracking-wide">
            ibrafaisal2007@gmail.com
          </span>
          <Button 
            variant="primary" 
            onClick={handleCopyEmail}
            className={`!text-xs !py-2 transition-all duration-300 ${
              isCopied 
                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/50' 
                : 'btn-white'
            }`}
          >
            {isCopied ? 'COPIED ✓' : 'COPY EMAIL'}
          </Button>
        </div>

        {/* Social Links (Uses your ButtonLink with the 'icon' variant) */}
        <div className="flex items-center gap-4">
          <ButtonLink href="https://github.com/ibrahimfaisal07" target="_blank" variant="icon" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </ButtonLink>
          <ButtonLink href="https://www.linkedin.com/in/ibrahim-faisal-a131b4339/" target="_blank" variant="icon" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </ButtonLink>
        </div>
      </section>

    </main>
  </>;
}