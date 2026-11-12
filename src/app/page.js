"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import {
  FiCode,
  FiArrowRight,
  FiLink,
  FiMail,
  FiTerminal,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

export default function Home() {
  const [activeTab, setActiveTab] = useState("config");
  const [copied, setCopied] = useState(false);

  const projects = [
    {
      id: "notesphere",
      serial: "[01] // ARCHITECTURE • PRODUCTIVITY",
      name: "NoteSphere",
      description:
        "NoteSphere is a modern note-taking application built with React, Firebase, and Tailwind CSS. It provides a clean and intuitive interface for creating, organizing, and managing your notes with real-time synchronization.",
      github: "https://github.com/korayozdemirr/Notesphere",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    },
    {
      id: "react-todo",
      serial: "[02] // REAL-TIME • STATE ENGINE",
      name: "React TODO App",
      description:
        "A clean, fast task management app built with React, TypeScript, Tailwind CSS and Firebase with real-time sync. Engineered with optimistic UI updates and robust offline fallback states.",
      github: "https://github.com/korayozdemirr/React-Todo",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    },
  ];

  const handleCopyCode = () => {
    const snippet =
      activeTab === "config"
        ? `export const developer: FullStackProfile = {\n  name: "Koray Özdemir",\n  role: "Full-Stack Software Engineer",\n  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],\n  backend: ["Node.js", "ExpressJS", "MongoDB", "Firebase"],\n  devops: ["Git", "Docker", "AWS", "CI/CD"],\n  status: "Ready to ship"\n};`
        : `{\n  "service": "koray-portfolio-v2025",\n  "status": "operational",\n  "metrics": {\n    "lighthousePerformance": 100,\n    "uptime": "99.99%",\n    "responseLatency": "18ms"\n  }\n}`;
    navigator.clipboard?.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {/* Ambient Atmospheric Vertex Lights */}
      <div className="pointer-events-none fixed -top-40 left-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] -z-10" />

      <Header />

      {/* Main Content Canvas */}
      <main className="flex-grow max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg w-full py-space-xl md:py-space-2xl flex flex-col gap-space-2xl">
        {/* Hero Section (Code-First Asymmetric Engineering Layout — Strictly No Portrait Photo) */}
        <section
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center pt-space-md"
          id="about"
        >
          {/* Left Column: Copy & Bio */}
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container border border-outline-variant/30">
              <FiCode className="text-primary w-3.5 h-3.5" />
              <span className="text-primary font-label-mono-caps text-label-mono-caps tracking-wider">
                &lt;/&gt; FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-primary">Koray Özdemir</span>{" "}
              — crafting exceptional digital experiences.
            </h1>

            {/* Bio Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Specializing in building modern, high-performance web applications
              with React, Next.js, TypeScript, and Node.js. Focused on clean
              architecture, lightning-fast interfaces, and robust backend
              systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline-sm text-body-md font-semibold shadow-lg shadow-primary-container/25 hover:shadow-primary-container/40 transition-all active:scale-95"
                href="#projects"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/40 hover:border-primary/50 text-on-surface font-body-md font-medium hover:bg-surface-container-high transition-all active:scale-95"
                href="#contact"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Developer Connect Subrow */}
            <div className="flex items-center gap-space-lg pt-space-sm border-t border-outline-variant/20 w-full">
              <a
                className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-code-inline text-code-inline transition-colors"
                href="https://github.com/korayozdemirr"
                rel="noreferrer"
                target="_blank"
              >
                <FiCode className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-outline-variant/40">•</span>
              <a
                className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-code-inline text-code-inline transition-colors"
                href="https://linkedin.com/in/korayozdemir"
                rel="noreferrer"
                target="_blank"
              >
                <FiLink className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-outline-variant/40">•</span>
              <a
                className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-code-inline text-code-inline transition-colors"
                href="mailto:korayozdemirdev@gmail.com"
              >
                <FiMail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer IDE / Config Terminal (NO PHOTO) */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-xl bg-surface-container/70 backdrop-blur-xl border border-outline-variant/40 shadow-2xl overflow-hidden ambient-glow-blue">
              {/* Terminal Chrome / Header */}
              <div className="bg-surface-container-lowest px-4 py-3 flex items-center justify-between border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]/80" />
                </div>

                {/* Interactive Editor Tabs */}
                <div className="flex items-center gap-1 bg-surface-container-low px-1.5 py-0.5 rounded-md border border-outline-variant/20">
                  <button
                    type="button"
                    onClick={() => setActiveTab("config")}
                    className={`px-2 py-0.5 rounded font-label-mono-sm text-label-mono-sm flex items-center gap-1 transition-colors ${
                      activeTab === "config"
                        ? "text-primary bg-surface-container"
                        : "text-on-surface-variant/60 hover:text-on-surface"
                    }`}
                  >
                    <span className="text-[11px] text-primary">{`{}`}</span>
                    <span>koray.config.ts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-2 py-0.5 rounded font-label-mono-sm text-label-mono-sm transition-colors ${
                      activeTab === "telemetry"
                        ? "text-primary bg-surface-container"
                        : "text-on-surface-variant/60 hover:text-on-surface"
                    }`}
                  >
                    telemetry.json
                  </button>
                </div>

                {/* Copy & Terminal Action */}
                <div className="flex items-center gap-2 text-outline">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    title="Copy snippet"
                    className="hover:text-primary transition-colors"
                  >
                    {copied ? (
                      <FiCheck className="w-4 h-4 text-tertiary" />
                    ) : (
                      <FiCopy className="w-4 h-4" />
                    )}
                  </button>
                  <FiTerminal className="w-4 h-4" />
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-code-inline text-code-inline leading-relaxed overflow-x-auto bg-surface-container-lowest/60">
                {activeTab === "config" ? (
                  <>
                    <div className="text-on-surface-variant/50 font-label-mono-sm pb-2">
                      // FullStack Profile Definition v2.5
                    </div>
                    <pre className="text-on-surface">
                      <code>
                        <span className="text-[#c0c1ff] font-semibold">
                          export const
                        </span>{" "}
                        <span className="text-primary font-semibold">
                          developer
                        </span>
                        : <span className="text-tertiary">FullStackProfile</span>{" "}
                        = {"{\n"}
                        {"  "}
                        <span className="text-on-surface-variant">name</span>:{" "}
                        <span className="text-[#86efac]">
                          &quot;Koray Özdemir&quot;
                        </span>
                        ,{"\n"}
                        {"  "}
                        <span className="text-on-surface-variant">role</span>:{" "}
                        <span className="text-[#86efac]">
                          &quot;Full-Stack Software Engineer&quot;
                        </span>
                        ,{"\n"}
                        {"  "}
                        <span className="text-on-surface-variant">
                          frontend
                        </span>
                        : [{"\n"}
                        {"    "}
                        <span className="text-[#93c5fd]">
                          &quot;Next.js 15&quot;
                        </span>
                        ,{" "}
                        <span className="text-[#93c5fd]">
                          &quot;React 19&quot;
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-[#93c5fd]">
                          &quot;TypeScript&quot;
                        </span>
                        ,{" "}
                        <span className="text-[#93c5fd]">
                          &quot;Tailwind CSS&quot;
                        </span>
                        {"\n"}
                        {"  "}],{"\n"}
                        {"  "}
                        <span className="text-on-surface-variant">backend</span>
                        : [{"\n"}
                        {"    "}
                        <span className="text-[#fca5a5]">
                          &quot;Node.js&quot;
                        </span>
                        ,{" "}
                        <span className="text-[#fca5a5]">
                          &quot;ExpressJS&quot;
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-[#fca5a5]">
                          &quot;MongoDB&quot;
                        </span>
                        ,{" "}
                        <span className="text-[#fca5a5]">
                          &quot;Firebase&quot;
                        </span>
                        {"\n"}
                        {"  "}],{"\n"}
                        {"  "}
                        <span className="text-on-surface-variant">devops</span>:{" "}
                        [
                        <span className="text-[#fde047]">&quot;Git&quot;</span>,{" "}
                        <span className="text-[#fde047]">
                          &quot;Docker&quot;
                        </span>
                        ,{" "}
                        <span className="text-[#fde047]">&quot;AWS&quot;</span>,{" "}
                        <span className="text-[#fde047]">
                          &quot;CI/CD&quot;
                        </span>
                        ],{"\n"}
                        {"  "}
                        <span className="text-on-surface-variant">status</span>:{" "}
                        <span className="text-tertiary font-bold">
                          &quot;Ready to ship&quot;
                        </span>
                        {"\n"}
                        {"};"}
                      </code>
                    </pre>
                  </>
                ) : (
                  <>
                    <div className="text-on-surface-variant/50 font-label-mono-sm pb-2">
                      // Runtime System Telemetry &amp; Benchmarks
                    </div>
                    <pre className="text-on-surface">
                      <code>
                        {"{\n"}
                        {"  "}
                        <span className="text-[#93c5fd]">
                          &quot;service&quot;
                        </span>
                        :{" "}
                        <span className="text-[#86efac]">
                          &quot;koray-portfolio-v2025&quot;
                        </span>
                        ,{"\n"}
                        {"  "}
                        <span className="text-[#93c5fd]">
                          &quot;environment&quot;
                        </span>
                        :{" "}
                        <span className="text-[#86efac]">
                          &quot;production-edge&quot;
                        </span>
                        ,{"\n"}
                        {"  "}
                        <span className="text-[#93c5fd]">
                          &quot;metrics&quot;
                        </span>
                        : {"{\n"}
                        {"    "}
                        <span className="text-on-surface-variant">
                          &quot;lighthouseScore&quot;
                        </span>
                        : <span className="text-tertiary font-bold">100</span>,
                        {"\n"}
                        {"    "}
                        <span className="text-on-surface-variant">
                          &quot;uptime&quot;
                        </span>
                        :{" "}
                        <span className="text-[#fde047]">
                          &quot;99.99%&quot;
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-on-surface-variant">
                          &quot;edgeLatency&quot;
                        </span>
                        :{" "}
                        <span className="text-primary">&quot;18ms&quot;</span>
                        {"\n"}
                        {"  }\n"}
                        {"}"}
                      </code>
                    </pre>
                  </>
                )}
              </div>

              {/* Embedded Architecture Telemetry Bar */}
              <div className="bg-surface-container-low/90 px-4 py-2.5 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-2 text-label-mono-sm font-label-mono-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-tertiary">
                  <span className="h-2 w-2 rounded-full bg-tertiary inline-block animate-pulse" />
                  <span className="font-medium">System Online</span>
                </div>
                <div className="flex items-center gap-4 text-outline">
                  <span>
                    Architecture:{" "}
                    <span className="text-on-surface">Full-Stack</span>
                  </span>
                  <span>
                    UX: <span className="text-on-surface">Engineered</span>
                  </span>
                  <span>
                    Sync: <span className="text-primary">Real-Time</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          className="flex flex-col gap-space-lg pt-space-lg"
          id="projects"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
            <div>
              <div className="font-label-mono-caps text-label-mono-caps text-primary tracking-widest uppercase mb-1">
                Portfolio // Case Studies
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Featured Projects
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:gap-gutter-lg">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
