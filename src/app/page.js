import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      name: "React TODO App",
      description:
        "A simple TODO app built with React, Tailwind CSS and Firebase.",
      image: "/projects/todolist.jpg",
      github: "https://github.com/korayozdemirr/React-Todo",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    },
    {
      name: "NoteSphere",
      description:
        "NoteSphere is a modern note-taking application built with React, Firebase, and Tailwind CSS. It provides a clean and intuitive interface for creating, organizing, and managing your notes with real-time synchronization.",
      image: "/projects/Notesphere.jpg",
      github: "https://github.com/korayozdemirr/Notesphere",
      technologies: ["React", "FireBase", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1">
        {/* About Me Section */}
        <section id="about" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center p-10 max-w-6xl mx-auto gap-12 w-full">
          <AnimatedSection variant="slideUp" className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Koray Özdemir
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              A passionate developer with a love for creating exceptional digital experiences. I build modern, scalable, and user-friendly web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity text-center shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-center"
              >
                Contact Me
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="zoomIn" className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
              <img
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
                src="./IMG_1481.jpeg"
                alt="Profile"
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="section-container bg-white dark:bg-gray-800"
        >
          <AnimatedSection variant="slideUp">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} />
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
