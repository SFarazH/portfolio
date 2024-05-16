import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import me from "../public/image.png";
import projects from "../public/projects.json";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className={`flex fira flex-col justify-between `}>
      <AboutMe />
      <Skills />
      <div className="my-4">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        {projects
          .filter((project) => project.ft)
          .map((project) => (
            <ProjectCard
              img={project.img}
              title={project.title}
              details={project.description}
              tech={[...project.tech]}
              github={project.github}
              live={project.live}
            />
          ))}
      </div>

      <Achievements />
    </main>
  );
}
