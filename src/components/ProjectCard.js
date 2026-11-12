"use client";

import { motion } from "framer-motion";
import {
  FiTerminal,
  FiCheckCircle,
  FiFileText,
  FiArrowUpRight,
  FiCheck,
  FiRefreshCw,
} from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const isNoteSphere = project.id === "notesphere";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/30 p-space-lg flex flex-col justify-between hover:border-primary/40 transition-all group"
    >
      <div className="flex flex-col gap-space-md">
        {/* Monospace Serial Header */}
        <div className="flex items-center justify-between text-label-mono-sm font-label-mono-sm text-outline">
          <span className="text-primary font-semibold">{project.serial}</span>
          {isNoteSphere ? (
            <FiTerminal className="w-[18px] h-[18px] text-outline group-hover:text-primary transition-colors" />
          ) : (
            <FiCheckCircle className="w-[18px] h-[18px] text-outline group-hover:text-primary transition-colors" />
          )}
        </div>

        {/* Synthetic Engineering UI Mockup Window (Code-First, No Photos) */}
        {isNoteSphere ? (
          <div className="rounded-lg bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-inner">
            {/* Window Chrome */}
            <div className="bg-surface-container-low px-3 py-2 border-b border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant/80 ml-2">
                  NoteSphere App — Cloud Workspace
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-label-mono-sm bg-tertiary/10 text-tertiary border border-tertiary/30">
                Synced (0ms)
              </span>
            </div>
            {/* Mock Editor Area */}
            <div className="p-4 flex flex-col gap-3 font-code-inline text-body-sm">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2 text-on-surface font-semibold">
                  <FiFileText className="text-primary w-4 h-4 shrink-0" />
                  <span className="truncate">System Distributed Cache.md</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-surface-variant text-[11px] text-on-surface-variant">
                    #Architecture
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-variant text-[11px] text-on-surface-variant">
                    #Redis
                  </span>
                </div>
              </div>
              <div className="space-y-1.5 text-on-surface-variant/80">
                <p className="text-primary font-medium">
                  ## High-Throughput Node Invalidation
                </p>
                <p>
                  • Multi-region write replication verified across 3
                  availability zones.
                </p>
                <p>
                  • Optimistic mutations with automatic rollback on network
                  failure.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-inner">
            {/* Window Chrome */}
            <div className="bg-surface-container-low px-3 py-2 border-b border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant/80 ml-2">
                  TaskEngine // Live State Dispatcher
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-primary font-label-mono-sm text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
                <span>75% Velocity</span>
              </div>
            </div>
            {/* Mock Kanban Task List */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-code-inline text-body-sm">
              <div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] text-tertiary">
                  <span>TASK-841</span>
                  <FiCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-on-surface font-medium text-xs">
                  Implement Optimistic Update Handler
                </span>
                <span className="text-[10px] text-outline">
                  Firebase Realtime listener
                </span>
              </div>
              <div className="p-2.5 rounded bg-surface-container-low border border-primary/30 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] text-primary">
                  <span>TASK-842</span>
                  <FiRefreshCw className="w-3.5 h-3.5" />
                </div>
                <span className="text-on-surface font-medium text-xs">
                  Offline IndexedDB Fallback
                </span>
                <span className="text-[10px] text-outline">
                  Background service sync
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Title & Description */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {project.name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom: Tech Stack Chips & Action */}
      <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex flex-wrap gap-1.5 font-label-mono-sm text-label-mono-sm">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface-variant border border-outline-variant/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-1.5 text-primary hover:text-primary-container font-code-inline text-code-inline font-medium group/link"
          href={project.github}
          rel="noreferrer"
          target="_blank"
        >
          <span>View on GitHub</span>
          <FiArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
