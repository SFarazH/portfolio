"use client";
import React from "react";
import Image from "next/image";
import img from "../public/me.jpg";

export default function AboutMe() {
  return (
    <>
      <div class="container px-4 md:py-10 md:px-0 flex border-b">
        <div class="md:w-2/3 mt-8 pr-8">
          <h3 class="text-3xl lg:text-5xl font-bold">Faraz Hasan</h3>
          <h3 class="text-xl lg:text-2xl my-2 text-green-500">
            Student, Full Stack Developer;
          </h3>
          <p className="text-gray-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aut in, ut, laborum nemo nostrum quidem nobis veniam numquam amet accusantium modi culpa ad asperiores. Cumque minima quidem expedita magnam? Quisquam numquam eaque fugit, vitae molestiae reiciendis in. Molestiae minima id quo alias perferendis eveniet, provident doloribus reiciendis fugiat amet!</p>
        </div>
        <div class="md:w-1/3">
            <Image src={img} className="rounded-lg"></Image>
        </div>
      </div>
    </>
  );
}
