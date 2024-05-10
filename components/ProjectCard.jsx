"use client";
import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <>
      <div className="md:flex mx-5 rounded-lg my-4 border rounded-3xl overflow-hidden h-fit">
        {props.img && (
          <img
            src={props.img}
            className="object-cover md:w-1/2 rounded-t-lg md:rounded-t-none md:rounded-l-lg lg:max-h-full sm:h-56 md:h-auto"
          />
        )}
        <div className={` p-4  ${props.image ? "w-full md:w-1/2" : "w-full"}`}>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">{props.title}</p>
            <div className="flex gap-4  items-center">
              <Link href={String(props.github)} target="_blank">
                <AiFillGithub color="white" size="2em" />
              </Link>
              <Link href={String(props.live)} target="_blank">
                <FaExternalLinkAlt color="white" size="1.7em" />
              </Link>
            </div>
          </div>
          <p className="my-4">{props.details}</p>
          <div className="flex flex-wrap gap-3">
            {props.tech?.map((tech) => {
              return (
                <Image src={`/icons/${tech}.svg`} width={40} height={40} />
              );
              //
            })}
          </div>
        </div>
      </div>
    </>
  );
}
