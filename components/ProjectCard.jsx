"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ProjectCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="md:mx-0 rounded-lg my-12 rounded-3xl overflow-hidden gap-4 z-1"
      >
        {props.img && (
          <div className="md:w-2/3 overflow-hidden pb-1 px-0.5 md:p-0 flex items-center justify-center mx-auto">
            <img
              src={props.img}
              className="object-fill md:h-1/2 items-center rounded-lg px-0.5"
            />
          </div>
        )}
        <div
          className={`p-4 bo rounded-lg mx-auto ${
            props.img
              ? "md:w-2/3 border-x border-b rounded-t-none"
              : "md:w-2/3 border"
          }`}
        >
          <div className="flex justify-between  ">
            <p className="text-2xl font-bold">{props.title}</p>
            <div className="flex gap-4  items-center">
              {props.github && <Link href={String(props.github)} target="_blank">
                <AiFillGithub color="white" size="2em" />
              </Link>}
              {props.live && <Link href={String(props.live)} target="_blank">
                <FaExternalLinkAlt color="white" size="1.7em" />
              </Link>}
            </div>
          </div>
          <p
            className="my-4"
            dangerouslySetInnerHTML={{ __html: props.details }}
          ></p>
          <div className="flex flex-wrap gap-3">
            {props.tech?.map((tech, index) => {
              return (
                <Image
                  alt={tech}
                  key={index}
                  src={`/icons/${tech}.svg`}
                  width={40}
                  height={40}
                />
              );
              //
            })}
          </div>
        </div>
      </div>
    </>
  );
}
