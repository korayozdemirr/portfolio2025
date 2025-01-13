"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="card overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 font-sans">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 
                text-gray-700 dark:text-gray-300"
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
          className="inline-flex items-center justify-center gap-2 px-4 py-2 
            bg-primary text-white rounded-lg transition-colors
            hover:bg-primary/90 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGithub className="w-5 h-5" />
          <span>View on GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
