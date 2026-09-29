"use client";

import React from "react";
import PageHeading from "./page-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { ref } = useSectionInView("About Me", 0.5);

  return (
    <div
      id="aboutme"
      className="flex w-[100%] justify-center items-center bg-cyan-800 mt-10 border-y-2 border-cyan-50 scroll-mt-20 dark:border-t dark:border-t-cyan-950 dark:border-b-slate-950 dark:bg-gradient-to-b from-cyan-950 to-slate-950 z-10"
      ref={ref}
    >
      <motion.section
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
          margin: "-175px",
        }}
        className="my-28 max-w-[50rem] text-center text-cyan-50 px-4 leading-8"
      >
        <div className="flex items-center py-4 mb-8">
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
          <PageHeading>about me</PageHeading>
          <div className="flex-grow h-px bg-cyan-50 opacity-40"></div>
        </div>
        <p className="font-light mb-5">
          Hey, I&apos;m Dan. I&apos;m a junior software developer with a
          passion for building modern, user-focused websites and applications.
          I&apos;m particularly interested in frontend development and enjoy creating
          intuitive, responsive experiences with modern web technologies.
        </p>
        <p className="font-light mb-5">
          After spending the last 10 years working in customer service and
          management roles, I decided to make a career change and pursue my
          interest in software development. I completed a 12-month coding
          bootcamp, where I developed a foundation in full-stack development
          using technologies including JavaScript, Python, HTML and CSS. I
          also gained experience with version control using Git and GitHub,
          and worked on projects using Agile methodologies and practices.
        </p>
        <p className="mb-3 font-light">
          Since graduating, I&apos;ve continued developing my skills through personal
          projects and self-directed learning, with an increasing focus on
          frontend development. I&apos;m currently working extensively with React,
          Next.js and TypeScript, while continuing to expand my knowledge across
          the wider JavaScript ecosystem and modern web development.
        </p>
      </motion.section>
    </div>
  );
}
