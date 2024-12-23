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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <img
          className="m-5 w-40 h-40 rounded-full object-cover object-top border-4 border-gray-300 shadow-lg"
          src="./IMG_1481.jpeg"
        />
        <AnimatedSection
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
            experiences..
          </p>
        </AnimatedSection>

        <AnimatedSection
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
            <AnimatedSection
              key={index}
              className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
