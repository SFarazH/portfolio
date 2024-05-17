import React from "react";
export default function Achievements() {
  return (
    <>
      <div className="my-12 px-4 md:px-0">
        <span className="text-3xl font-bold">
          Achievements / Extra-curricular
        </span>
        <ul className="gap-y-4 grid grid-cols-1 pt-8 text-lg ">
          <li>Smart India Hackathon 2022 Finalist @ Mangalore, India</li>
          <li>
            <span className="text-[#f90]">Amazon</span> Machine Learning Summer
            School 2023 Participant
          </li>
          <li>
            President,{" "}
            <span className="text-yellow-300 font-semibold">Compusys</span> -
            CSE Student Body @ 2023-24
          </li>
          <li>
            Research Paper presented @{" "}
            <span className="text-green-500 font-semibold">DAPCOM24</span> and{" "}
            <span className="text-green-500 font-semibold">AITC-2024</span>
          </li>
        </ul>
      </div>
    </>
  );
}
