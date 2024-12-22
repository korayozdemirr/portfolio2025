"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    { name: "Project One", description: "Description for Project One" },
    { name: "Project Two", description: "Description for Project Two" },
    { name: "Project Three", description: "Description for Project Three" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="w-full flex justify-between p-5">
        <h1 className="text-xl font-bold">Developer Portfolio</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded dark:bg-blue-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg mb-6">
            Hi, I'm a developer passionate about building exceptional digital
            experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="w-full text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}
