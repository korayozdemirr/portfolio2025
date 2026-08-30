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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {skill.icon}
    </div>
    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-4">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <AnimatedSection
            key={category}
            className="bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            variant="slideUp"
            delay={categoryIndex * 0.2}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-3">
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
