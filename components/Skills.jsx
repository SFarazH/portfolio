import React from "react";
import react from "../public/icons/React.svg";
import tailwind from "../public/icons/Tailwind.svg";
import bs from "../public/icons/Bootstrap.svg";
import js from "../public/icons/JavaScript.svg";
import Next from "../public/icons/nextjs.svg";
import ex from "../public/icons/Express.svg";
import mongo from "../public/icons/MongoDB.svg";
import aws from "../public/icons/AWS.svg";
import dj from "../public/icons/Django.svg";
import node from "../public/icons/Node.js.svg";
import sql from "../public/icons/MySQL.svg";
import py from "../public/icons/Python.svg";
import j from "../public/icons/Jupyter.svg";
import pyt from "../public/icons/PyTorch.svg";
import r from "../public/icons/R.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className=" my-4 px-4 md:px-0 border-b">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="my-4 w-full">
          <p className="text-xl py-1 ">Frontend</p>
          <div className="flex flex-wrap gap-8 py-1">
            <Image alt='logo' src={js} width={60} className="rounded-lg" />
            <Image alt='logo' src={react} width={60} />
            <Image alt='logo' src={Next} width={60} className="rounded-lg" />
            <Image alt='logo' src={tailwind} width={60} />
            <Image alt='logo' src={bs} width={60} />
          </div>
        </div>
        <div className="mt-3 mb-4">
          <p className="text-xl py-1 ">Backend / DevOps</p>
          <div className="flex flex-wrap  gap-8 py-1">
            <Image alt='logo' src={node} width={60} />
            <Image alt='logo' src={ex} width={60} style={{ color: "white" }} />
            <Image alt='logo' src={dj} width={60} />
            <Image alt='logo' src={aws} width={60} />
            <Image alt='logo' src={mongo} width={60} />
            <Image alt='logo' src={sql} width={65} />
          </div>
        </div>
        <div className="mt-2 mb-4">
          <p className="text-xl pb-4 ">Machine Learning / Data Science</p>
          <div className="flex flex-wrap  gap-8 py-1">
            <Image alt='logo' src={py} width={60} />
            <Image alt='logo' src={r} width={60} />
            <Image alt='logo' src={j} width={60} />
            <Image alt='logo' src={pyt} width={60} />
          </div>
        </div>
      </div>
    </>
  );
}
