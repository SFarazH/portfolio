"use client";
import { React, useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "../../public/projects.json";
import { InfinitySpin } from "react-loader-spinner";
import Contact from "@/components/Contact";

export default function Home() {
  const [loader, toggleLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      toggleLoader(false);
    }, 2000);
  });

  return (
    <>
      {loader ? (
        <>
          <div className="flex justify-around my-24">
            <InfinitySpin
              visible={false}
              width="200"
              color="#ffffff"
              ariaLabel="infinity-spin-loading"
              timeout={100}
            />
          </div>
        </>
      ) : (
        <>
          <main className={`flex fira flex-col justify-between`}>
            <h2 className="text-3xl font-semibold text-center my-8">
              Projects
            </h2>

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
          <Contact />
        </>
      )}
    </>
  );
}
