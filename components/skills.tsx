"use client";

import React, { useState } from "react";
import PageHeading from "./page-heading";
import { frontendSkills, backendSkills } from "@/lib/data";

const Skills = () => {
  const [display, setDisplay] = useState(false);
  return (
    <section
      id="skills"
      className="scroll-mt-28 text-center max-w-[60rem] mb-28"
    >
      <PageHeading>what i do</PageHeading>
      <h2 className="mt-10">Frontend Development</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {frontendSkills.map((skill, index) => (
          <div className="relative flex flex-col items-center group" key={index}>
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
              <span
                className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition"
              >
                {skill.language}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10">Backend Development</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {backendSkills.map((skill, index) => (
          <div className="relative flex flex-col items-center group" key={index}>
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
              <span
                className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition"
              >
                {skill.language}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
            </div>
          </div>
        ))}
      </div>
      
      
      
      <h2 className="mt-12">delete below here later</h2>
      <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
        <span className="icon-[logos--javascript] text-[2rem]"></span>
      </div>
      <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
        <span className="icon-[logos--typescript-icon] text-[2rem]"></span>
      </div>
      <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
        <span className="icon-[logos--github-icon] text-[2.4rem]"></span>
      </div>
      <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
        <span className="icon-[logos--vercel-icon] text-[1.8rem]"></span>
      </div>
    </section>
  );
};

export default Skills;
