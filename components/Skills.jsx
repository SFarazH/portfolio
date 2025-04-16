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
import java from "../public/icons/Java.svg";
import spring from "../public/icons/Spring.svg";
import Image from "next/image";

export default function Skills() {
  const options = {
    alt: "logo",
    width: 60,
    className: "rounded-lg",
  };
  return (
    <>
      <div className="px-4 md:px-0 border-b py-12">
        <h2 className="text-3xl font-bold pb-4">Skills</h2>

        <div className="mt-4 mb-12">
          <p className="text-2xl py-1 text-[#FFF8DC] ">Frontend</p>
          <div className="flex flex-wrap gap-8 py-1">
            <Image title="Javascript" src={js} {...options} />
            <Image title="React" src={react} {...options} />
            <Image title="Next" src={Next} {...options} />
            <Image title="Tailwind" src={tailwind} {...options} />
            <Image title="Bootstrap" src={bs} {...options} />
          </div>
        </div>
        <div className="my-12">
          <p className="text-2xl py-1 text-[#FFF8DC]">Backend / Database</p>
          <div className="flex flex-wrap gap-8 py-1">
            <Image title="Node" src={node} {...options} />
            <Image
              title="ExpressJS"
              src={ex}
              style={{ color: "white" }}
              {...options}
            />
            <Image title="Java" src={java} {...options} />
            <Image title="Spring" src={spring} {...options} />
            <Image title="Django" src={dj} {...options} />
            <Image title="AWS Console" src={aws} {...options} />
            <Image title="MongoDB" src={mongo} {...options} />
            <Image title="SQL" src={sql} {...options} width={65} />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-2xl py-1 text-[#FFF8DC]">
            Machine Learning / Data Science
          </p>
          <div className="flex flex-wrap gap-8 py-1">
            <Image title="Python" src={py} {...options} />
            <Image title="R" src={r} {...options} />
            <Image title="Jupyter Notebook" src={j} {...options} />
            <Image title="PyTorch" src={pyt} {...options} />
          </div>
        </div>
      </div>
    </>
  );
}
