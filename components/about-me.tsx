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
          Hey, I&apos;m Dan. I&apos;m a junior full-stack developer with a
          passion for technological innovation and development. I enjoy creating
          modern websites and applications.
        </p>
        <p className="font-light mb-5">
          After spending the last 10 years working in various customer service
          and management roles, I decided to make a change and delve into the
          world of software development. I joined a 12 month long coding
          bootcamp where I began learning the fundamentals of full-stack
          development, covering languages including Javascript, Python HTML &
          CSS. I learnt version control systems including Git and Github, and
          completed projects using Agile methodologies and practises.
        </p>
        <p className="mb-3 font-light">
          Since graduating I have continued on this learning journey, delving
          deeper into frontend development. I am currently working alot with
          React, Next.js and Typescript while attempting to take in as much
          information as possible in this ever-changing technology sector.
        </p>
      </motion.section>
    </div>
  );
}
