import ProjectCard from "@/components/ProjectCard";
import projects from "../../public/projects.json";

export default function Home() {
  return (
    <main className={`flex fira flex-col justify-between`}>
      <h2 className="text-3xl font-semibold text-center my-8" >Projects</h2>

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
