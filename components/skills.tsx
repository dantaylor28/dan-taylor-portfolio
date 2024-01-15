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
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationIconVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * index,
    },
  }),
};

const fadeInAnimationTextVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const Skills = () => {
  const [display, setDisplay] = useState(false);
  const { ref } = useSectionInView("Skills", 0.6);
  return (
    <section
      id="skills"
      className="scroll-mt-28 text-center max-w-[60rem] mb-28 px-4 md:p-0 overflow-x-hidden"
      ref={ref}
    >
      <div className="flex items-center py-4 mb-8">
        <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
        <PageHeading>what i do</PageHeading>
        <div className="md:hidden flex-grow h-px bg-slate-950 opacity-40"></div>
      </div>

      <motion.h2
        className="text-lg capitalize font-light mt-10 mb-10"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          margin: "-100px",
        }}
      >
        frontend development
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-8 justify-center max-w-[30rem] mb-10 md:mb-0">
          {frontendSkills.map((skill, index) => (
            <motion.div
              className="relative flex flex-col items-center group"
              key={index}
              variants={fadeInAnimationIconVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              custom={index}
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
            </motion.div>
          ))}
        </div>

        <motion.ul
          className="border border-black/10 p-3 rounded-lg bg-cyan-50 text-cyan-800 text-left"
          variants={fadeInAnimationTextVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            margin: "-200px",
          }}
        >
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
        </motion.ul>
      </div>

      <h2 className="text-lg capitalize font-light mt-16 mb-10">
        backend development
      </h2>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
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
        <div className="flex flex-wrap gap-8 justify-center max-w-[30rem] mb-10 md:mb-0">
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
