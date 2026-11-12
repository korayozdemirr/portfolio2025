"use client";

import { useState } from "react";
import { FiTerminal, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#projects");

  const navLinks = [
    { title: "About Me", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Skills", link: "#skills" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-full top-0 sticky z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-2xl shadow-surface-container-lowest/50">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg w-full flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a className="flex items-center gap-space-sm group" href="#about">
          <span className="text-code-inline font-code-inline font-bold tracking-tight text-primary group-hover:text-primary-container transition-colors">
            &lt;KO /&gt;
          </span>
          <span className="text-body-md font-body-md font-semibold tracking-tight text-on-surface">
            Koray Özdemir
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-space-lg"
        >
          {navLinks.map((item) => {
            const isActive = activeNav === item.link;
            return (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setActiveNav(item.link)}
                className={
                  isActive
                    ? "text-primary font-code-inline text-code-inline font-medium border-b-2 border-primary pb-1 transition-colors"
                    : "text-on-surface-variant font-code-inline text-code-inline font-medium hover:text-on-surface pb-1 border-b-2 border-transparent transition-colors"
                }
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-space-md">
          {/* Live Availability Pill Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-tertiary/30 text-tertiary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-mono-caps text-label-mono-caps tracking-wider font-semibold">
              Available for Projects
            </span>
          </div>

          {/* Terminal & Code Actions */}
          <a
            className="p-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
            href="https://github.com/korayozdemirr"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <FiTerminal className="w-[18px] h-[18px]" />
          </a>

          {/* Resume / Contact CTA Link */}
          <a
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-code-inline text-code-inline border border-outline-variant/40 transition-all active:scale-95"
            href="#contact"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-margin py-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  onClick={() => {
                    setActiveNav(item.link);
                    setMenuOpen(false);
                  }}
                  className="block py-1.5 font-code-inline text-code-inline text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
