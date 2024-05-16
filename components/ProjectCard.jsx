"use client";
import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <>
      <div className="sm:flex mx-5 md:mx-0 rounded-lg my-12 rounded-3xl overflow-hidden h-fit gap-4">
        {props.img && (
          <div className="w-full sm:w-1/2 sm:w-auto md:w-1/2 overflow-hidden py-2 md:p-1 flex items-center justify-center">
            <img
              src={props.img}
              className="object-fill items-center max-h-56 sm:h-100 lg:max-h-full rounded-lg"
            />{" "}
            {/**rounded-t-lg md:rounded-t-none md:rounded-l-lg */}
          </div>
        )}
        <div
          className={`p-4 rounded-lg  ${
            props.img
              ? "w-full sm:w-1/2 md:w-1/2 border-x border-b rounded-t-none md:border-l-0 md:rounded-r-lg md:border-r md:border-y md:rounded-l-none  "
              : "w-full border"
          }`}
        >
          <div className="flex justify-between  ">
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
