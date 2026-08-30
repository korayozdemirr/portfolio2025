"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-2xl font-bold mb-3 font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30
                text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5
            bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl transition-all
            hover:bg-gray-800 dark:hover:bg-white hover:scale-[1.02] active:scale-95 font-medium w-full mt-2"
        >
          <FaGithub className="w-5 h-5" />
          <span>View Source Code</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
