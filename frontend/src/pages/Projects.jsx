import HeadBox from "../components/HeadBox";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      heading: "Fininja",
      subtitle: "Gamified Finance Learning Platform",
      points: [
        "Duolingo-inspired gamified finance learning app",
        "Structured lessons, progress tracking & engagement loops",
        "Focused on simplifying finance concepts for beginners",
      ],
      skillsUsed: ["React", "Node.js", "MongoDB", "Express.js"],
      status: "Deployed",
      projectNumber: "01",
      href: "https://fininja.vercel.app/",
    },
    {
      heading: "Finbuddy",
      subtitle: "AI-powered Finance Chatbot",
      points: [
        "Full-stack finance chatbot integrating AI-based responses",
        "Clean, interactive UI with smooth UX",
        "Deployed on Vercel; leveraged Featherless AI tooling",
      ],
      skillsUsed: ["React", "Vercel", "Featherless AI"],
      status: "Deployed",
      projectNumber: "02",
      href: "https://fin-buddy-rho.vercel.app/",
    },
    {
      heading: "Velora",
      subtitle: "Full Stack E-Commerce",
      points: [
        "Complete e-commerce with auth, product mgmt & cart",
        "REST APIs built using Node.js and Express",
        "Responsive UI with React.js and Tailwind CSS",
      ],
      skillsUsed: ["React", "Node.js", "Tailwind", "MongoDB"],
      status: "Deployed",
      projectNumber: "03",
      href: "https://velora-frontend-lyart.vercel.app/",
    },
  ];

  return (
    <>
      <main className="w-full px-4 py-7 mt-20 text-white">
        <HeadBox
          title={"Selected projects"}
          subtitle={"// 03 — work"}
          skill={"projects"}
        />

        <section className="mt-8 max-w-6xl mx-auto">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.heading} {...project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
