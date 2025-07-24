"use client";
import React from "react";
import Image from "next/image";
import img from "../public/me2.jpg";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";

export default function AboutMe() {
  return (
    <>
      <div className="px-4 py-12 md:px-0 flex border-b flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8 order-last md:order-none">
          <h3 className="text-3xl lg:text-5xl font-bold">Faraz Hasan</h3>
          <h3 className="text-xl lg:text-2xl my-2 text-green-500">
            Software Developer, ML Enthusiast<br /> Chai enthusiast;
          </h3>
          <p className="text-gray-400 mt-3">
            CS Undergrad passionate about Web Dev and Data Science! <br />Love to solve problems using skills <br /> Enjoy building scalable backends using Node and Express + AWS Lambda <br />Focus on code quality over quantity 💪  
          </p>
        </div>
        <div className="w-2/3 mx-auto md:w-1/3  md:pl-8 mb-8 md:mb-0 flex items-center">
          <Image alt="me" src={img} className="rounded-lg"></Image>
        </div>
      </div>
      
    </>
  );
}
