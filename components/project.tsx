"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { projectData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectData)[number];

export default function Project({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="group/margin flex flex-col md:flex-row md:h-[35rem] overflow-hidden py-16 sm:p-0 border-b border-black/20 last:border-none sm:border-none sm:mt-16 sm:mb-32 sm:last:mb-24 md:odd:flex-row-reverse dark:border-cyan-50/20"
    >
      <div className="group flex items-center justify-center group md:w-1/2 md:h-[30rem] lg:h-[35rem] md:mt-10 lg:mt-0 rounded-md border border-black/10 dark:border-cyan-50/20 bg-slate-200/30 hover:bg-slate-200/50 dark:bg-white/5 hover:dark:bg-white/[0.065] lg:px-5 md:hover:border-black/25 md:hover:dark:border-cyan-50/30 hover:cursor-pointer transition">
        <a href={liveUrl} target="_blank">
          <div>
            <Image
              src={image}
              alt="project I coded"
              quality={95}
              className="md:w-[20.5rem] md:h-[24rem] lg:w-[28.5rem] lg:h-[32rem] rounded-sm shadow-2xl md:group-hover:scale-[1.02] transition"
            />
          </div>
        </a>
      </div>

      <div className="flex flex-col md:items-start justify-center text-left md:ml-10 lg:ml-32 md:w-1/2 mt-10 md:mt-0 md:border-y border-black/20 group-odd/margin:ml-0 md:group-odd/margin:mr-10 lg:group-odd/margin:mr-32 dark:border-cyan-50/20">
        <h3 className="text-3xl font-normal capitalize mb-10 pl-5 md:pl-0">
          {title}
        </h3>
        <p className="font-extralight pl-5 md:pl-0">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4 mb-14 pl-5 md:pl-0">
          {tags.map((tag, index) => (
            <li
              className="bg-cyan-800/90 px-4 py-[1px] text-[0.7rem] uppercase text-white rounded-3xl tracking-wider dark:bg-cyan-950/90"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-8 capitalize font-normal">
          <a
            href={liveUrl}
            target="_blank"
            className="group bg-cyan-50 text-cyan-800 flex items-center gap-2 hover:bg-cyan-600 hover:text-cyan-50 duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer dark:bg-cyan-100/90 dark:border-cyan-800 dark:hover:bg-cyan-800/70 dark:text-cyan-950 dark:hover:text-white"
          >
            live site
            <BsBoxArrowUpRight className="group-hover:text-cyan-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition dark:group-hover:text-white" />
          </a>

          <a
            href={repoUrl}
            target="_blank"
            className="group bg-cyan-800 text-cyan-50 flex items-center gap-2 hover:bg-cyan-600 hover:text-white duration-300 border border-black/10 py-2 px-6 rounded cursor-pointer dark:bg-cyan-950 dark:hover:bg-cyan-800/70"
          >
            github link
            <BsGithub className="group-hover:text-cyan-50 group-hover:translate-x-1 transition dark:group-hover:text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
