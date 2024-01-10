"use client";

import React, { useState } from "react";
import { skillsData } from "@/lib/data";

type SkillProps = (typeof skillsData)[number];

const Skill = ({ icon, language }: SkillProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span
        className="flex justify-center"
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <div className="flex items-center justify-center h-14 w-14 border border-black/10 rounded-full shadow-lg hover:scale-105">
          <span className={icon}></span>
        </div>
      </span>
      <div
        className={`absolute bottom-full flex flex-col items-center group-hover:flex ${
          !display ? "hidden" : null
        }`}
      >
        <span className="relative z-10 p-3 text-s leading-none text-white bg-cyan-800 shadow-lg rounded-md transition">
          {language}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-800" />
      </div>
    </div>
  );
};

export default Skill;
