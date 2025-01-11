import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const projects = [
    { name: "Project One", description: "Description for Project One" },
    { name: "Project Two", description: "Description for Project Two" },
    { name: "Project Three", description: "Description for Project Three" },
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
          <AnimatedSection>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">
              Here are some of the projects I've worked on recently. Click to
              learn more!
            </p>
          </AnimatedSection>
          <AnimatedSection className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
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
