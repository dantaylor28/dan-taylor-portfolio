// The only way iconify icons render on my skills section is listing them here, albeit commented out
// icon-[logos--react] text-[2.2rem]
// icon-[logos--nextjs-icon] text-[2.4rem]
// icon-[logos--javascript] text-[2rem]
// icon-[logos--typescript-icon] text-[2rem]
// icon-[logos--html-5] text-[2.3rem]
// icon-[logos--css-3] text-[2.3rem]
// icon-[logos--python] text-[2.3rem]
// icon-[logos--django-icon] text-[2rem]
// icon-[logos--bootstrap] text-[2rem]
// icon-[logos--tailwindcss-icon] text-[1.7rem]
// icon-[logos--nodejs-icon] text-[2.4rem]
// icon-[logos--postgresql] text-[2.2rem]
// icon-[logos--mysql-icon] text-[2.1rem]
// icon-[logos--mongodb-icon] text-[2.5rem]
// icon-[logos--docker-icon] text-[2rem]
// icon-[logos--git-icon] text-[2.5rem]
// icon-[logos--github-icon] text-[2.4rem]
// icon-[logos--visual-studio-code] text-[2.2rem]
// icon-[logos--heroku-icon] text-[2rem]
// icon-[logos--vercel-icon] text-[1.8rem]
// icon-[logos--prettier] text-[2rem]
// icon-[logos--eslint] text-[2.2rem]
// icon-[logos--xcode] text-[2.3rem]

"use client";

import React, { useState } from "react";
import PageHeading from "./page-heading";
import { frontendSkills, backendSkills } from "@/lib/data";
import { IoMdCheckboxOutline } from "react-icons/io";

const Skills = () => {
  const [display, setDisplay] = useState(false);
  return (
    <section
      id="skills"
      className="scroll-mt-28 text-center max-w-[60rem] mb-28"
    >
      <PageHeading>what i do</PageHeading>
      <h2 className="text-lg capitalize font-light mt-10 mb-10">
        frontend development
      </h2>
      <div className="flex justify-center items items-center">
        <div className="flex flex-wrap gap-8 justify-center max-w-[30rem]">
          {frontendSkills.map((skill, index) => (
            <div
              className="relative flex flex-col items-center group"
              key={index}
            >
              <span
                className="flex justify-center"
                onMouseEnter={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
              >
                <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
                  <span className={skill.icon}></span>
                </div>
              </span>
              <div
                className={`absolute bottom-full flex flex-col items-center group-hover:flex ${
                  !display ? "hidden" : "hidden"
                }`}
              >
                <span className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition">
                  {skill.language}
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
              </div>
            </div>
          ))}
        </div>
        <ul className="border border-black/10 p-3 rounded-lg bg-cyan-50 text-cyan-800 text-left">
          <li className="flex items-center mb-5 ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Create attractive & fully responsive web pages.
          </li>
          <li className="flex items-center mb-5 ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Use testing libraries to fully test my web application.
          </li>
          <li className="flex items-center ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Troubleshoot problems with performance or user experience.
          </li>
        </ul>
      </div>

      <h2 className="text-lg capitalize font-light mt-16 mb-10">
        backend development
      </h2>
      <div className="flex justify-center items-center">
        <ul className="border border-black/10 p-3 rounded-lg bg-cyan-50 text-cyan-800 text-left">
          <li className="flex items-center mb-5 ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Create attractive & fully responsive web pages.
          </li>
          <li className="flex items-center mb-5 ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Use testing libraries to fully test my web application.
          </li>
          <li className="flex items-center ml-3">
            <IoMdCheckboxOutline className="mr-3 text-lg" />
            Troubleshoot problems with performance or user experience.
          </li>
        </ul>
        <div className="flex flex-wrap gap-8 justify-center max-w-[30rem]">
          {backendSkills.map((skill, index) => (
            <div
              className="relative flex flex-col items-center group"
              key={index}
            >
              <span
                className="flex justify-center"
                onMouseEnter={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
              >
                <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
                  <span className={skill.icon}></span>
                </div>
              </span>
              <div
                className={`absolute bottom-full flex flex-col items-center group-hover:flex ${
                  !display ? "hidden" : "hidden"
                }`}
              >
                <span className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition">
                  {skill.language}
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
