"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function CareerSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Pertinent Healthcare </br> USA Dental Solutions",
      dates: "Sep 2024 - Present",
      description: [
        "Integrated Plaid API to securely link bank accounts and display finances seamlessly. Implemented webhooks to ensure instant data sync of around 100 bank accounts.",
        "Led a team of four developers for the past six months, overseeing code quality, resolving merge conflicts, and mentoring members to deliver optimal solutions.",
        "Built and optimized admin features for flagship products, improving backend performance and frontend responsiveness, reducing response time by up to 50%.",
        "Created and managed more than 50 MongoDB Charts to provide real-time visual analytics, improving decision-making.",
        "Developed cron jobs to automate claim attachment workflows and integrated third-party software to streamline operations.",
      ],
    },
    {
      title: "Full Stack Intern",
      company: "OneBigBit Technologies",
      dates: "Jan 2024 - Jun 2024",
      description: [
        "Designed and deployed full stack applications using React.js, Bootstrap, Firebase, and Auth0 for secure user authentication and role-based access.",
        "Built a finance management dashboard with interactive ChartJS visualizations to analyze profits, expenses, and payments, enhancing decision-making for internal stakeholders.",
        "Contributed to both frontend and backend development of live projects by implementing features and fixing bugs.",
      ],
    },
  ];

  return (
    <div className="py-12 mx-auto overflow-hidden px-4 md:px-0 border-b w-full">
      <h2 className="text-3xl font-bold pb-4">Careers</h2>
      <div className="relative mt-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500 hidden md:block" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`relative mb-12 flex items-center w-full ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 hidden md:block" />

            <div className="absolute left-0 w-4 h-4 bg-green-500 rounded-full z-10 md:hidden" />
            <div className="absolute left-2 w-0.5 h-full bg-green-500 md:hidden" />

            <div
              className={`p-6 border rounded-lg shadow-sm w-full md:w-5/12 text-left ${
                index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
              } md:p-8`}
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p
                className="text-sm text-green-500"
                dangerouslySetInnerHTML={{ __html: exp.company }}
              ></p>
              <p className="text-gray-400 text-sm mt-1">{exp.dates}</p>
              <ul className="list-disc list-inside text-white mt-4 space-y-2 text-left">
                {exp.description.map((detail, i) => (
                  <li className="py-1" key={i}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
