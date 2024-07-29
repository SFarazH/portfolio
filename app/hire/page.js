"use client";
import { React, useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

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
          <div className="flex justify-around my-24 ">
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
          <main className={`flex fira flex-col justify-between px-4 md:px-0`}>
            <h2 className="text-3xl font-semibold text-center mt-8 mb-8">
              Hire me!
            </h2>
            <p className="font-light text-lg">
              Hello, my name is Faraz Hasan. <br /> I am a 2024{" "}
              <span className="bg-red-500 rounded-lg px-1.5">CSE B.Tech</span>{" "}
              graduate with an Honors degree in{" "}
              <span className="bg-red-500 rounded-lg px-1.5">Data Science</span>{" "}
              and a CGPA of{" "}
              <span className="bg-red-500 rounded-lg px-1.5">9.05</span>. <br />
              <br /> I have worked as a{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Full Stack Intern
              </span>{" "}
              at OneBigBit Technologies Pvt. Ltd. During my internship, I
              focussed on developing applications using{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                MERN
              </span>{" "}
              stack technology and{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Firebase
              </span>
              . I have worked on multiple live projects, contributing to both{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                frontend and backend
              </span>{" "}
              development, including using Electron.js to deliver web apps.{" "}
              <br /> Along with this, I have also delivered independent projects
              including{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Tourism Website
              </span>{" "}
              - enabled with RBAC; and{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Company Finances Manager
              </span>{" "}
              - to help the company view all their finances at a single place,
              along with KPI (Key Point Indicators) and an interactive dashboard
              for data visualization. <br /> <br />
              During my college semeters, I have also worked on two semester
              projects, focussing on{" "}
              <span className="bg-red-500 rounded-lg px-1.5">
                Image matching
              </span>{" "}
              using LoFTR and{" "}
              <span className="bg-red-500 rounded-lg px-1.5">
                Skin Cancer Detection
              </span>{" "}
              using ResNet . Both of these research papers have been published
              at different conferences - namely{" "}
              <span className="bg-red-500 rounded-lg px-1.5">DAPCOM 2024</span>{" "}
              and{" "}
              <span className="bg-red-500 rounded-lg px-1.5">AITC 2024</span>.
              <br />
              <br /> Regarding my technical skills, I am proficient in MERN
              stack, having architected multiple applications with features such
              as{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                authentication
              </span>
              ,{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                CRUD
              </span>{" "}
              operations,{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                file uploading
              </span>
              , role-based access, along with hosting. <br /> I also have
              experience in using{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Python
              </span>{" "}
              and{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                SQL
              </span>{" "}
              for{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                {" "}
                data analysis
              </span>
              . I have created an{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Algorithmic Trading
              </span>{" "}
              model which uses previous stock data across different time periods
              and predicts stocks likely to perform well.
              <br /> I also have experience across different products of{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                AWS
              </span>{" "}
              - such as{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                EC2
              </span>{" "}
              and{" "}
              <span className="bg-amber-400 text-black rounded-lg px-1.5">
                Lambda
              </span>
              , which I have used to host live projects. <br />
              <br />
              Additionally, I have completed multiple certification courses
              across various fields such as:
              <ul className="list-disc ml-4">
                <li>AWS Academy Cloud Foundations</li>
                <li>SQL for Data Science</li>
                <li>Programming Foundations with JavaScript</li>
                <li>Python Basics</li>
              </ul>
              <br />
              Regarding my extra-cirriculars, I was part of a team which was
              shortlisted for{" "}
              <span className="bg-red-500 rounded-lg px-1.5">
                Smart India Hackathon
              </span>{" "}
              finals 2022 at Mangalore. I have also served as{" "}
              <span className="bg-red-500 rounded-lg px-1.5">President</span> of
              the CSE student body. This has instilled me with skills to manage
              people and deadlines, along with collaboration and team work!{" "}
              <br />
              <br />
              Please feel free to connect with me!
            </p>
          </main>
        </>
      )}
    </>
  );
}
