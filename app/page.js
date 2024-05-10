import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import me from "../public/image.png";
import projects from "../public/projects.json";

export default function Home() {
  return (
    <main className={`flex fira flex-col justify-between`}>
      <AboutMe />
      {projects.map((project) => (
        <ProjectCard
          img={project.img}
          title={project.title}
          details={project.description}
          tech={[...project.tech]}
          github={project.github}
          live={project.live}
        />
      ))}
    </main>
  );
}
