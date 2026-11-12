"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiBox } from "react-icons/fi";

const skillLayers = [
  {
    title: "Frontend",
    layer: "LAYER 01",
    icon: FiCode,
    accentText: "text-primary",
    accentBar: "bg-primary",
    items: [
      { label: "React • Next.js 15", percent: 95 },
      { label: "TypeScript", percent: 90 },
      { label: "Tailwind CSS • UI Tokens", percent: 95 },
    ],
    tags: ["SSR/SSG", "Framer Motion", "Web Vitals"],
  },
  {
    title: "Backend",
    layer: "LAYER 02",
    icon: FiServer,
    accentText: "text-tertiary",
    accentBar: "bg-tertiary",
    items: [
      { label: "Node.js • ExpressJS", percent: 92 },
      { label: "MongoDB • NoSQL", percent: 88 },
      { label: "Firebase • Cloud Firestore", percent: 90 },
    ],
    tags: ["REST APIs", "Authentication", "WebSockets"],
  },
  {
    title: "Tools & DevOps",
    layer: "LAYER 03",
    icon: FiBox,
    accentText: "text-secondary",
    accentBar: "bg-secondary",
    items: [
      { label: "Git • Version Control", percent: 96 },
      { label: "Docker • Containers", percent: 82 },
      { label: "AWS • Vercel Deployment", percent: 86 },
    ],
    tags: ["GitHub Actions", "Linux CLI", "Jest / Vitest"],
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-space-lg pt-space-lg" id="skills">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
        <div>
          <div className="font-label-mono-caps text-label-mono-caps text-primary tracking-widest uppercase mb-1">
            Capabilities // Engineering Stack
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            My Skills — Technologies I Work With
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          A targeted stack built for precision, speed, and architectural scale
          across the modern web stack.
        </p>
      </div>

      {/* 3-Column Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {skillLayers.map((group, idx) => {
          const IconComponent = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/30 p-space-lg flex flex-col justify-between gap-space-lg hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-lg bg-surface-container-high ${group.accentText}`}
                    >
                      <IconComponent className="w-[20px] h-[20px]" />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">
                    {group.layer}
                  </span>
                </div>

                {/* Skill Progress Bars */}
                <div className="flex flex-col gap-3 font-code-inline text-body-sm">
                  {group.items.map((skill) => (
                    <div key={skill.label} className="flex flex-col gap-1">
                      <div className="flex justify-between text-on-surface">
                        <span>{skill.label}</span>
                        <span className={`${group.accentText} font-medium`}>
                          {skill.percent}%
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`${group.accentBar} h-full rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Micro Tags */}
              <div className="flex flex-wrap gap-1.5 font-label-mono-sm text-label-mono-sm pt-space-sm border-t border-outline-variant/20">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
