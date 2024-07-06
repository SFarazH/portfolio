"use client";
import { React, useState, useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
// import me from "../public/me2.png";
import projects from "../public/projects.json";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import { InfinitySpin } from "react-loader-spinner";
import Link from "next/link";

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
        <div className="flex justify-around my-24">
          <InfinitySpin
            visible={false}
            width="200"
            color="#ffffff"
            ariaLabel="infinity-spin-loading"
            timeout={100}
          />
        </div>
      ) : (
        <>
          <main className={`flex fira flex-col justify-between`}>
            <AboutMe />
            <Skills />
            <div className="py-12 mx-auto overflow-hidden px-4 md:px-0 border-b">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div>
                {projects
                  .filter((project) => project.ft)
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      className="mx-auto"
                      img={project.img}
                      title={project.title}
                      details={project.description}
                      tech={[...project.tech]}
                      github={project.github}
                      live={project.live}
                    />
                  ))}
              </div>
            </div>
            <Achievements />
          </main>
          <Link href="/hire">
            <button className="fixed top-20 right-2 md:right-20 p-1 bg-blue-500 text-lg font-semibold text-white rounded-full shadow-[0_0_5px_#08f,0_0_5px_#08f,0_0_5px_#08f] hover:bg-blue-700 w-20 h-20">
              Hire me
            </button>
          </Link>
        </>
      )}
    </>
  );
}
