import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

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
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center text-center p-10"
        >
          <img
            className="m-5 w-40 h-40 rounded-full object-cover object-top border-4 border-gray-300 shadow-lg"
            src="./IMG_1481.jpeg"
            alt="Profile"
          />
          <AnimatedSection>
            <h2 className="text-4xl font-semibold mb-4">About Me</h2>
            <p className="text-lg mb-6 max-w-3xl">
              Hi, I'm Koray Özdemir, a passionate developer with a love for
              creating exceptional digital experiences.
            </p>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen w-full flex flex-col items-center justify-center text-center p-10 bg-white dark:bg-gray-800"
        >
          <AnimatedSection>
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <p className="text-lg mb-6 max-w-3xl">
              Here are some of the projects I've worked on recently. Click to
              learn more!
            </p>
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </section>
        {/*Skills section */}
        <section
          id="skills"
          className="min-h-screen w-full flex flex-col items-center justify-center text-center p-10 bg-gray-50 dark:bg-gray-900"
        >
          <h2 className="text-4xl font-semibold mb-4">Skills</h2>
          <p className="text-lg mb-6 max-w-3xl">
            Here are some of the tools and technologies I work with:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Git",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center"
              >
                <p className="text-lg font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen w-full  flex flex-col items-center justify-center text-center p-10 bg-gray-100 dark:bg-gray-900"
        >
          <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-gray-50 dark:bg-gray-900"
          >
            <AnimatedSection>
              <h2 className="text-4xl font-semibold mb-4">Contact</h2>
              <p className="text-lg mb-6 max-w-3xl">
                Feel free to reach out to me by filling out the form below or
                through my social media links!
              </p>
              <div>


              <div className="flex items-center justify-center">
                <form className="max-w-lg w-full space-y-6">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Social Media Links */}
              <div className="mt-10">
                <p className="text-lg font-semibold mb-4">
                  You can also find me here:
                </p>
                <div className="flex items-center justify-center space-x-6">
                  {/* Email */}
                  <a
                    href="korayozdemirdev@gmail.com"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Email
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/korayozdemir"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/koray.ozdemirrr/"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
