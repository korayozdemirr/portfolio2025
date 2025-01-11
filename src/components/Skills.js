"use client";

import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React", icon: <FaReact className="w-5 h-5" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
    { name: "ExpressJS", icon: <SiExpress className="w-5 h-5" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="w-5 h-5" /> },
    { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
  ],
};

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -5, y: 20 }}
    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="skill-item hover:scale-105 transition-transform"
  >
    {skill.icon}
    <span>{skill.name}</span>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container bg-gray-50 dark:bg-gray-900"
    >
      <AnimatedSection variant="zoomIn">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">
          Here are some of the technologies I work with:
        </p>
      </AnimatedSection>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <AnimatedSection
            key={category}
            className="skill-category"
            variant="slideUp"
            delay={categoryIndex * 0.2}
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
