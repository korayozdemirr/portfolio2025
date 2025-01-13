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
        <section id="about" className="section-container">
          <img className="profile-image" src="./IMG_1481.jpeg" alt="Profile" />
          <AnimatedSection>
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              Hi, I'm Koray Özdemir, a passionate developer with a love for
              creating exceptional digital experiences.
            </p>
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
